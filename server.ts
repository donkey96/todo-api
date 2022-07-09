import {Application, Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import {bold, yellow} from "https://deno.land/std@0.147.0/fmt/colors.ts";

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({hostname, port}) => {
  console.log(bold(`Start listening on `)+ yellow(`${hostname?? "localhost"}:${port}`));
})

const port = parseInt(Deno.env.get("PORT") ?? "8000");

app.listen({port})
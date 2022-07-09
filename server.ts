import { Application, bold, Router, yellow } from './deps.ts';

const app = new Application();
const router = new Router();

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener("listen", ({hostname, port}) => {
  console.log(bold(`Start listening on `)+ yellow(`${hostname?? "localhost"}:${port}`));
})

const port = parseInt(Deno.env.get("PORT") ?? "8000");

app.listen({port})
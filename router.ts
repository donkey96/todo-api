import { Router } from './deps.ts';
import { rootHandler } from './middlewares/mod.ts'

export const router = new Router();

router.get("/", rootHandler.getHome)

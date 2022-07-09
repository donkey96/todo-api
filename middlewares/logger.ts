import { Context, cyan, green } from '../deps.ts';

export const logger = async (ctx: Context, next: () => Promise<void>) => {
  await next();
  console.log(`${green(ctx.request.method)} ${cyan(ctx.request.url.pathname)}`);
}
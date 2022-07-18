import { RouterContext } from '../deps.ts';

export const getParams = async (ctx: RouterContext<any>) => {
  const { value } = await ctx.request.body();

  return {
    ...ctx.params,
    ...value,
  }
}
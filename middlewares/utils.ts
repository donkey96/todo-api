import { RouterContext, Status } from '../deps.ts';

export const getParams = async (ctx: RouterContext<any>) => {
  const { value } = await ctx.request.body();

  return {
    ...ctx.params,
    ...value,
  }
}

export const handleOK = (ctx: RouterContext<any>, data: any) => {
  ctx.response.status = Status.OK;
  ctx.response.body = {
    data: data,
  };
}

export const handleError = (ctx: RouterContext<any>, error: Error) => {
    ctx.response.status = Status.BadRequest;
    ctx.response.body = {
      error: {
        message: error.message,
        stack: error.stack,
      }
    }
}
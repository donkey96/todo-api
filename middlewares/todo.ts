import { RouterContext, Status } from '../deps.ts';

const FILE_PATH = './db/todos.json';

export const getAll = async (ctx: RouterContext<any>) => {
  const data = await Deno.readFile(FILE_PATH);
  const decoder = new TextDecoder();
  const todos = JSON.parse(decoder.decode(data));
  ctx.response.status = Status.OK;
  ctx.response.body = {
    data: todos,
  };
};
import { client, checkError } from './client';

export async function createTodo(todo) {
  const resp = await client.from('todos').insert({ todo: todo });

  return checkError(resp);
}

export async function getTodos() {
  const resp = await client.from('todos').select('*');

  return checkError(resp);
}

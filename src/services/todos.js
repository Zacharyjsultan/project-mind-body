import { client, checkError } from './client';

export async function createTodo(todo) {
  const resp = await client.from('todos').insert({ todo: todo });

  return checkError(resp);
}

export async function getTodos() {
  const resp = await client.from('todos').select('*');

  return checkError(resp);
}

export async function toggleComplete(id, complete) {
  const resp = await client.from('todos').update({ complete: !complete }).match({ id }).single();
  return checkError(resp);
}
export async function deleteTodo(id, complete) {
  const resp = await client.from('todos').delete().match({ id, complete });

  return checkError(resp);
}
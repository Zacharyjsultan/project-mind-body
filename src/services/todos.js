import { client, checkError } from './client';

export async function createTodo(description, user_id) {
  const resp = await client.from('todos').insert({ description: description, user_id: user_id });

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
export async function deleteTodo() {
  return await client.from('todos').delete('*').match({ complete: true });
}

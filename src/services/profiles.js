import { client, checkError } from './client';

export async function createProfile(fullName, username, id) {
  const resp = await client
    .from('profiles')
    .insert({ full_name: fullName, username: username, id: id });

  return checkError(resp);
}

export async function getProfile(id) {
  const resp = await client.from('profiles').select('*').match({ id }).single();

  return checkError(resp);
}

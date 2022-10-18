import { client, checkError } from './client';

export async function createJournalEntry(
  grateful,
  today,
  affirmation,
  occurrence,
  improvement,
  user_id
) {
  const resp = await client
    .from('journals')
    .insert(grateful, today, affirmation, occurrence, improvement, user_id);
  return checkError(resp);
}

export async function getJournals(user_id) {
  const response = await client.from('journals').select('*').match({ user_id });
  return checkError(response);
}

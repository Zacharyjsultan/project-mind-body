import { client, checkError } from './client';

export async function createJournalEntry(grateful, today, affirmation, occurrence, improvement, user_id) {
  const resp = await client.from('journal').insert({ grateful, today, affirmation, occurrence, improvement, user_id });
  return checkError(resp);
}
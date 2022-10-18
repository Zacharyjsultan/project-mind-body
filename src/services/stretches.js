export async function fetchStretches(search = '') {
  const params = new URLSearchParams();
  params.set('search', search);
  const resp = await fetch(`/.netlify/functions/fetch-stretch?${params.toString()}`, {
    headers: { Accept: 'application/json' },
  });
  const data = await resp.json();

  return data;
}
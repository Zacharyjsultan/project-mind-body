export async function fetchStretches(search) {
  const params = new URLSearchParams();
  params.set('search', search);
  const resp = await fetch(`/.netlify/functions/fetch-stretch?${params.toString()}`, {
    headers: { Accept: 'application/json' },
  });
  console.log('resp', resp);
  const data = await resp.json();
  console.log('data', data);

  return data;
}
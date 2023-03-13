export const postData = async (url, data) => {
  const response = await fetch(url, {
    method: 'POST',
    body: data
  });
  return response.text();
}

export const getResource = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status ${response.status}`);
  }
  return await response.json();
}
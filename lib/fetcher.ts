export const fetcher = async (url: string) => {
  return fetch(url).then((r) => {
    return r.json();
  });
};

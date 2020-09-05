

export function getUsers() {
  return fetch(`/api/getUser`).then(response =>
      response.json()
  );
}

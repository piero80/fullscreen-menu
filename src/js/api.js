const ENDPOINT = "../../config/menu.json";

export function getConfig() {
  return fetch(ENDPOINT)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((json) => json);
}

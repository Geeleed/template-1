export const onFetch = (input) => {
  const { url, token = "", payload, method = "post" } = input;
  const data = new Promise((resolve, reject) => {
    if (method === "get") {
      fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          token,
        },
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } else if (method === "post") {
      fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          token,
        },
        body: JSON.stringify(payload || "{}"),
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    }
  });
  return data;
};

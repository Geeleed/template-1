import { onFetch } from "./2_func";

export const api = {
  getPosts: async () => {
    const input = {
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "get",
    };
    const data = await onFetch(input);
    return data;
  },
};

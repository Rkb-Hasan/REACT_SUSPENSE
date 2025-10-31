import wrapPromise from "../utils/wrapPromise";

export default function fetchPosts(url) {
  const response = fetch(url).then((res) => res.json());

  // this is a promise
  return wrapPromise(response);
}
export function fetchPostsForUSe(url) {
  const response = fetch(url).then((res) => res.json());
  return response;
}

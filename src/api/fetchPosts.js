import wrapPromise from "../utils/wrapPromise";

export default function fetchPosts(url) {
  const response = fetch(url).then((res) => res.json());
  console.dir(response);
  // this is a promise
  return wrapPromise(response);
}

import fetchPosts from "../api/fetchPosts";

// returns a promise
const resource = fetchPosts(
  "https://jsonplaceholder.typicode.com/posts?_limit=5"
);

export default function PostSelector({ onSelectPost }) {
  const posts = resource.read();

  return (
    <div>
      {/* <div>after reolsolve data</div> */}

      <select
        style={{
          width: "100%",
        }}
        onChange={onSelectPost}
      >
        <option value="">Select Post</option>
        {posts.map((post) => {
          return (
            <option key={post.id} value={post.id}>
              {post.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}

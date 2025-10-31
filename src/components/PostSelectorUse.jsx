import { use } from "react";

export default function PostSelectorUse({ postPromise, onSelectPost }) {
  const posts = use(postPromise);

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

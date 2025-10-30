import { useEffect, useState } from "react";

export default function PostSelector({ onSelectPost }) {
  const [posts, setPosts] = useState([]);
  const [isPostsLoading, setIspostsLoading] = useState(false);
  const [postsError, setPostsError] = useState(null);
  useEffect(() => {
    setIspostsLoading(true);
    setPostsError(null);

    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        const data = await response.json();

        if (response.ok) {
          setIspostsLoading(false);
          setPosts(data);
        } else {
          setIspostsLoading(false);
          setPostsError("there was an error");
        }
      } catch (err) {
        setIspostsLoading(false);
        setPostsError(err.message);
      }
    };

    fetchPosts();
  }, []);

  //   console.log(posts);
  let postsContent;
  if (isPostsLoading) {
    postsContent = <div>post loading...</div>;
  } else if (!isPostsLoading && postsError) {
    postsContent = <div>{postsError}</div>;
  } else {
    postsContent = (
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
    );
  }
  return <div>{postsContent}</div>;
}

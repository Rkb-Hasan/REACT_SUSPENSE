import { Suspense, useMemo, useState } from "react";
import fetchPosts, { fetchPostsForUSe } from "./api/fetchPosts";
import Comments from "./components/Comments";
import PostSelectorUse from "./components/PostSelectorUse";

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (e) => {
    setSelectedPostId(e.target.value);
  };

  console.log(selectedPostId);
  // to memorize the promise so that every re render it does not pass a new promise causing the suspense to fallback
  const postPromise = useMemo(() => {
    return fetchPostsForUSe(
      "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
  }, []);
  const commentPromise = useMemo(() => {
    if (!selectedPostId) return null;
    return fetchPosts(
      `https://jsonplaceholder.typicode.com/posts/${selectedPostId}/comments`
    );
  }, [selectedPostId]);

  return (
    <div>
      <h1>React Suspense and Error Boundaries</h1>

      <div>
        {/* <Suspense fallback={<p>Loading....</p>}>
          <PostSelector onSelectPost={handleSelectPost} />
        </Suspense> */}
        <Suspense fallback={<p>Loading from use....</p>}>
          <PostSelectorUse
            postPromise={postPromise}
            onSelectPost={handleSelectPost}
          />
        </Suspense>
        {selectedPostId && (
          <div style={{ height: "500px" }}>
            <h1>Comments</h1>
            <Suspense fallback={<div>Comments loading from wrapper...</div>}>
              <Comments
                commentPromise={commentPromise}
                postId={selectedPostId}
              />
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

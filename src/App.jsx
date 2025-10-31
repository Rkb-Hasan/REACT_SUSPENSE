import { Suspense, useState } from "react";
import Comments from "./components/Comments";
import PostSelector from "./components/PostSelector";

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectPost = (e) => {
    setSelectedPostId(e.target.value);
  };

  return (
    <div>
      <h1>React Suspense and Error Boundaries</h1>

      <div>
        <Suspense fallback={<p>Loading....</p>}>
          <PostSelector onSelectPost={handleSelectPost} />
        </Suspense>
        {selectedPostId && <Comments postId={selectedPostId} />}
      </div>
    </div>
  );
}

export default App;

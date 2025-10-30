import { useEffect, useState } from "react";

export default function Comments({ postId }) {
  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(false);
  const [commentsError, setCommentsError] = useState(null);

  useEffect(() => {
    setIsCommentsLoading(true);
    setCommentsError(null);

    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );

        const data = await response.json();

        if (response.ok) {
          setIsCommentsLoading(false);
          setComments(data);
        } else {
          setIsCommentsLoading(false);
          setCommentsError("there was an error");
        }
      } catch (err) {
        setIsCommentsLoading(false);
        setCommentsError(err.message);
      }
    };

    fetchComments();
  }, [postId]);

  let commentsContent;

  if (isCommentsLoading) {
    commentsContent = <div>Comments loading...</div>;
  } else if (!isCommentsLoading && commentsError) {
    commentsContent = <div>{commentsError}</div>;
  } else {
    commentsContent = (
      <ul>
        {comments.map((comment) => {
          return <li key={comment.id}>{comment.name}</li>;
        })}
      </ul>
    );
  }

  return (
    <div>
      <h1>Comments</h1>
      <div>{commentsContent}</div>
    </div>
  );
}

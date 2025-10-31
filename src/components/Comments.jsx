export default function Comments({ postId, commentPromise }) {
  console.log(postId);

  const comments = commentPromise.read();

  return (
    <div>
      <ul>
        {comments.map((comment) => {
          return <li key={comment.id}>{comment.name}</li>;
        })}
      </ul>
    </div>
  );
}

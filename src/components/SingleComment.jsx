const SingleComment = (props) => {
  return (
    <li className="mb-3">
      <p className="mb-1">{props.comment}</p>
      <small>
        Voto: {props.rate}- autore: {props.author}
      </small>
    </li>
  );
};

export default SingleComment;

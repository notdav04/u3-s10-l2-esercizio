import { useState } from "react";
import SingleComment from "./SingleComment";
const CommentList = (props) => {
  const [listaCommenti, setListaCommenti] = useState(props.listaCommenti);

  return (
    <div>
      <ul>
        {listaCommenti.map((element) => (
          <SingleComment
            key={element._id}
            comment={element.comment}
            rate={element.rate}
            author={element.author}
          />
        ))}
      </ul>
    </div>
  );
};

export default CommentList;

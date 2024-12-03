import { Button } from "react-bootstrap";

const SingleComment = (props) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTY2NzhhZDEyOTAwMTU4NzZiZTEiLCJpYXQiOjE3MzI4MDI4MzEsImV4cCI6MTczNDAxMjQzMX0.4Wo_n0XxH834Cma8Z6xwatgoMVzlxcp54ZMQwtcKZ9M"
          }
        }
      );
      if (response.ok) {
        alert("La recensione è stata elimata!");
      } else {
        console.log("asin:", asin);
        console.log("status:", response.statusText);
        throw new Error(
          "La recensione non è stata eliminata!",
          response.statusText
        );
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <li className="mb-3">
      <p className="mb-1">{props.comment}</p>
      <small>
        Voto: {props.rate}- autore: {props.author}
      </small>
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(props._id)}
      >
        Elimina
      </Button>
    </li>
  );
};

export default SingleComment;

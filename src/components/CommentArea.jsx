import { useEffect, useState } from "react";
import CommentList from "./CommentList";

import AddComment from "./AddComment";

const CommentArea = (props) => {
  const [lista_commenti, setLista_commenti] = useState([]);
  const [prevProps, setPrevProps] = useState(props.idLibro);
  const fetchCommenti = async () => {
    console.log("fetch avviata dopo cambiamento props");
    const url =
      "https://striveschool-api.herokuapp.com/api/comments/" + props.idLibro;
    console.log(url);
    try {
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTY2NzhhZDEyOTAwMTU4NzZiZTEiLCJpYXQiOjE3MzI4MDI4MzEsImV4cCI6MTczNDAxMjQzMX0.4Wo_n0XxH834Cma8Z6xwatgoMVzlxcp54ZMQwtcKZ9M"
        }
      });
      if (response.ok) {
        const responseObj = await response.json();
        // console.log("responseObj: ", responseObj);
        setLista_commenti(responseObj);
        // console.log("state lista commenti: ", this.state.lista_commenti);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (prevProps.idLibro != props.idLibro) {
      console.log("useeffect: id:", props.idLibro);
      setLista_commenti([]);
      fetchCommenti();
    }
  }, [props.idLibro]);

  return (
    <>
      {props.idLibro && (
        <div>
          <h3>Commenti</h3>
          {lista_commenti.length > 0 && (
            <CommentList listaCommenti={lista_commenti} />
          )}
          <AddComment idLibro={props.idLibro} />
        </div>
      )}
      {!props.idLibro && (
        <div>
          <h3>
            seleziona un libro <br />
            per visualizzare i commenti
          </h3>
        </div>
      )}
    </>
  );
};

export default CommentArea;

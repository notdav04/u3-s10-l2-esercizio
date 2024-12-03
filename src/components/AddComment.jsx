import { useState } from "react";

const AddComment = (props) => {
  const [obj, setObj] = useState({
    comment: "",
    rate: "",
    author: "",
    elementId: props.idLibro
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setObj((prevObj) => ({ ...prevObj, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://striveschool-api.herokuapp.com/api/comments/";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTY2NzhhZDEyOTAwMTU4NzZiZTEiLCJpYXQiOjE3MzI4MDI4MzEsImV4cCI6MTczNDAxMjQzMX0.4Wo_n0XxH834Cma8Z6xwatgoMVzlxcp54ZMQwtcKZ9M"
        },
        body: JSON.stringify(obj)
      });

      if (response.ok) {
        alert("Commento aggiunto con successo!");

        setObj({ elementId: props.idLibro, comment: "", rate: "", author: "" });
      } else {
        console.log(response);
        console.log(obj);
        alert("Errore nell'invio del commento." + response.statusText);
      }
    } catch (error) {
      console.log("Errore nella richiesta POST:", error);
    }
  };

  return (
    <div>
      <h3>Aggiungi un Commento</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Commento:</label>
          <textarea
            name="comment"
            value={obj.comment}
            onChange={handleChange}
            rows="3"
            required
          />
        </div>
        <div>
          <label>Voto (1-5):</label>
          <input
            type="number"
            name="rate"
            value={obj.rate}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="author"
            value={obj.author}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Invia Commento</button>
      </form>
    </div>
  );
};

export default AddComment;

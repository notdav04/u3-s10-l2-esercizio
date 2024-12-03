import SingleBook from "./SingleBook";
import { useState } from "react";
import { Form, Row, Container, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
const BookList = (props) => {
  const [ricerca, setRicerca] = useState("");
  const [title, setTitle] = useState("");
  const changeStateTitle = (newTitle) => {
    console.log("Aggiorno il titolo (asin) in BookList:", newTitle); // Log per verificare
    setTitle(newTitle);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const libriFiltrati = props.list.filter((book) => {
    return book.title.toLowerCase().includes(ricerca.toLocaleLowerCase());
  });
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Form className="w-50" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Ricerca</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci una parola o un testo da cercare!"
              value={ricerca}
              onChange={(e) => setRicerca(e.targget.value)}
            />
          </Form.Group>
        </Form>
      </div>
      <Container>
        <Row>
          <Col lg={8}>
            <Row>
              {!ricerca &&
                props.list.map((book) => {
                  return (
                    <SingleBook
                      key={book.asin}
                      book={book}
                      changeStateTitle={changeStateTitle}
                    />
                  );
                })}
              {ricerca &&
                libriFiltrati.map((book) => {
                  return (
                    <SingleBook
                      key={book.asin}
                      book={book}
                      changeStateTitle={changeStateTitle}
                    />
                  );
                })}
            </Row>
          </Col>
          <Col lg={4}>
            <CommentArea idLibro={title} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookList;

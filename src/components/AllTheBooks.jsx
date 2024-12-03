import { useState } from "react";
import { Card, Col, Container, Row, Badge, Button } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";

const AllTheBooks = () => {
  const [genre, setGenre] = useState(null);

  return (
    <div style={{ minHeight: "calc(100vh - 279px)" }}>
      <div className="d-flex justify-content-center mb-4">
        <div>
          <h2>Scegli il tuo genere preferito:</h2>
          <div className="d-flex justify-content-around">
            <Button onClick={() => setGenre(fantasy)}>Fantasy</Button>
            <Button onClick={() => setGenre(horror)}>Horror</Button>
            <Button onClick={() => setGenre(romance)}>Romance</Button>
          </div>
        </div>
      </div>
      {genre && (
        <div>
          <Container>
            <Row>
              {genre.map((book) => {
                return (
                  <Col md={3} key={book.asin}>
                    <Card className="mb-3">
                      <Card.Img variant="top" src={book.img} />
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Text>{book.price}</Card.Text>
                        <Badge>{book.category}</Badge>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default AllTheBooks;

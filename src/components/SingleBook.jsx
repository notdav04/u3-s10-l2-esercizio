import { Col, Card, Badge } from "react-bootstrap";
import { useState } from "react";
const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    {
      selected ? setSelected(false) : setSelected(true);
    }
    props.changeStateTitle(props.book.asin);
  };

  return (
    <Col md={4}>
      {/* {!this.state.selected && (
          <Card className="mb-4">
            <Card.Img
              variant="top"
              src={this.props.book.img}
              style={{ height: "400px" }}
            />
            <Card.Body style={{ height: "200px" }}>
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>{this.props.book.price}</Card.Text>
              <Badge>{this.props.book.category}</Badge>
            </Card.Body>
          </Card>
        )}
        {this.state.selected && (
          <Card className="mb-4 border border-1 border-primary bg-primary-subtle">
            <Card.Img
              variant="top"
              src={this.props.book.img}
              style={{ height: "400px" }}
            />
            <Card.Body style={{ height: "200px" }}>
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>{this.props.book.price}</Card.Text>
              <Badge>{this.props.book.category}</Badge>
            </Card.Body>
          </Card>
        )} */}

      <Card
        className="mb-4 "
        onClick={handleClick}
        {...(selected && {
          style: {
            border: "2px solid blue",
            backgroundColor: "rgba(124, 155, 234, 0.625"
          }
        })}
      >
        <Card.Img
          variant="top"
          src={props.book.img}
          style={{ height: "400px" }}
        />
        <Card.Body style={{ height: "200px" }}>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>{props.book.price}</Card.Text>
          <Badge>{props.book.category}</Badge>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;

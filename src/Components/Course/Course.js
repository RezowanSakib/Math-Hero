import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Course = ({ course }) => {
  const { name, img, description, id, price } = course;
  const navigate = useNavigate();
  const navigateToEnroll = (id) => {
    navigate(`/course/${id}`);
  };
  return (
    <div className="container col-md-4">
      <CardGroup>
        <Card className="h-100 shadow">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <h4>${price}</h4>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Link to="/checkout">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                navigateToEnroll(id);
              }}
            >
              Enroll Now
            </Button>
          </Link>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Course;

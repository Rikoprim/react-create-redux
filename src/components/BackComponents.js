import React from "react";
import { Row, Col, Button } from "reactstrap";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BackComponents = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to="/">
          <Button color="dark">
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default BackComponents;

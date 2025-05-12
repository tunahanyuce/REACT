import React, { useState } from "react";
import { Col, Container, Row, Col, Card, Button } from "react-bootstrap";
import { data } from "../../helpers/data";
import LegendCard from "./LegendCard";

const LegendContainer = () => {
  const [show, setShow] = useState(false);
  return (
    <Container className="my-3 card-container">
      <Row xs={1} md={2} xl={3} className="justify-content-center g-3">
        {data.map((player) => (
          <Col>
            <Card style={{ width: "18rem" }} onClick={()=>setShow(!show)}>
              {!show ? (
                <Card.Img variant="top" src={player.img} />
              ) : (
                <>
                  <Card.Header>
                    <Card.Title>{player.name}</Card.Title>
                  </Card.Header>
                  <ul>
                    {player.statistics.map((item) => (
                      <li className="list-unstyled text-start p-1 fw-bold display-6">
                        ⚽{item}
                      </li>
                    ))}
                  </ul>
                  <p>Carear Years:{player.official_career}</p>
                </>
              )}
            </Card>
          </Col>
          <LegendCard 
        ))}
      </Row>
    </Container>
  );
};

export default LegendContainer;

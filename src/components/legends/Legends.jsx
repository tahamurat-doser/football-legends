import { Container, Row, Col } from "react-bootstrap";
import { data } from "../../helpers/data";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useState, Fragment } from "react";

const Legends = () => {
  const [show, setShow] = useState(false);
  console.log(data);
  return (
    <div>
      <Form.Control type="search" placeholder="Search legends..." />
      <Container>
        <Row xs={1} sm={2} md={3} lg={4} xl={5}>
          {data.map((legend) => (
            <Col>
              <Card onClick={() =>setShow(!show)}>
                {!show ? (
                  <Card.Img  variant="top" src={legend.img} />
                ) : (
                  <Fragment>
                    <Card.Header>
                      <Card.Title>{legend.name}</Card.Title>
                    </Card.Header>
                    <ul className="m-auto">
                      {legend.statistics.map((item) => (
                        <li className="list-unstyled h5 text-start">
                          {" "}
                          ⚽️ {item}{" "}
                        </li>
                      ))}
                    </ul>
                    <span> {legend.official_career} </span>
                  </Fragment>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Legends;

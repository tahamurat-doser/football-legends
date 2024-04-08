import { useState, Fragment } from "react"
import {Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";



const LegendsCard = ({legend}) => {

    const [show, setShow] = useState(false)
    return <div>   <Col>
    <Card className="player-card" role="button" onClick={() =>setShow(!show)}>
      {!show ? (
        <Card.Img  variant="top" src={legend.img} title={legend.name} alt={legend.name} />
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
  </Col> </div>
}
export default LegendsCard
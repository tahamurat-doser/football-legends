import { Container, Row } from "react-bootstrap";
import { data } from "../../helpers/data";
import Form from "react-bootstrap/Form";
import LegendsCard from "./LegendsCard";
import { useState } from "react";

const Legends = () => {
  const [search, setSearch] = useState(" ");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredData = data.filter((item) =>
    item.name.toUpperCase().includes(search.trim().toUpperCase())
  );
  console.log(filteredData);
  return (
    <div>
      <Form.Control
        type="search"
        placeholder="Search legends..."
        onChange={handleChange}
        className="w-50 mx-auto my-2"
      />
      <Container className="p-3 rounded-4 card-container my-3">
        <Row
          xs={1}
          sm={2}
          md={3}
          lg={4}
          xl={5}
          className="justify-content-center g-3"
        >
          {data.map((legend) => (
            <LegendsCard key={legend.id} legend={legend} />
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Legends;

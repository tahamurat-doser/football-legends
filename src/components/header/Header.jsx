import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <Container>
      {" "}
      <Image src={logo} width="200px" />
      <h1>FOOTBALL LEGENDS</h1>
    </Container>
  );
};
export default Header;

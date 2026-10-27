import ContactForm from "../components/ContactUs/ContactForm/ContactForm";
import ContactInfo from "../components/ContactUs/ContactInfo/ContactInfo";
import FastGateMap from "../components/ContactUs/Map/map";
import TitleComponent from "../components/SharedComponents/SectionsTitle/SectionsTitle";
import { Container, Row, Col } from "react-bootstrap";
function ContactUs() {
  return (
    <>
      <TitleComponent title="Contact US" />
      <Container>
        <Row className="g-4">
          <Col md={5}>
            <ContactInfo />
          </Col>
          <Col md={7}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
      <FastGateMap />
    </>
  );
}
export default ContactUs;

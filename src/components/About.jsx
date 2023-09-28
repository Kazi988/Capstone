import "./About.css";
import Accordion from "react-bootstrap/Accordion";

function About() {
  return (
    <>
      <Accordion>
        <Accordion.Item id="accordion1" eventKey="0">
          <Accordion.Header className="header1">
            About Urban Essentials
          </Accordion.Header>
          <Accordion.Body className="abody1">
            <h1 id="abodytext">Urban Essentials Founded September 2023</h1>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="abody2" id="accordion2" eventKey="1">
          <Accordion.Header className="header1">
            Sustainability
          </Accordion.Header>
          <Accordion.Body className="abody1">
            <h1>
              To ensure our suppliers live up to our agreement, we employ
              dedicated sustainability staff in our worldwide production offices
              who make regular visits and audits. We also provide training to
              workers and suppliers to help them work in a more sustainable way.
              Although there are challenges in many countries in which we
              operate, our size makes it possible for us to actually make a
              difference. By committing to the UN Guiding Principles on Business
              and Human Rights, supporting workers to earn a fair wage and by
              taking a clear stance against corruption, we want to lead the way
              toward a fair fashion future.{" "}
            </h1>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item id="accordion1" eventKey="3">
          <Accordion.Header className="header1">Key Initiaves</Accordion.Header>
          <Accordion.Body className="abody1">
            <h1 id="abodytext">
              Our products are made by over 700 suppliers around the world.
              Together we’re working to improve wage management systems in order
              to ensure that everybody’s individual skills are taken into
              account. Our work on factory level has also resulted in
              democratically elected worker representatives for over 1.1 million
              garment workers.
            </h1>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item id="accordion1" eventKey="4">
          <Accordion.Header className="header1">
            Standards & Policies
          </Accordion.Header>
          <Accordion.Body className="abody1">
            <h1 id="abodytext">
              Our standards and policies are critical to achieving our
              sustainability vision and goals. Where applicable, we base our
              policies and standards on international norms and recognised
              initiatives. This includes ILO Conventions and the UN Guiding
              Principles on Business and Human Rights.
            </h1>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item id="accordion1" eventKey="5">
          <Accordion.Header className="header1">
            Product Availability
          </Accordion.Header>
          <Accordion.Body className="abody1">
            <h1 id="abodytext">
              We recommend that you review our website to know about the latest
              arrivals and our item availability. If the size of the item you’re
              interested in is out of stock but has the Coming soon option, you
              can provide us your email and we will notify you if it becomes
              available within 15 days. If it is not restocked within this
              timeframe, that feature will expire and you will have to register
              for it again. This procedure is not the same as a reservation. We
              may show on some items the message that few units remain for
              certain sizes. If one of them interests you, we urge you to buy it
              before the item has sold out. Keep in mind the items in the cart
              are not reserved. If your cart includes items that are no longer
              available, we will let you know so that you can remove them and
              complete the purchase of the available items.
            </h1>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="aboutgif">
        <img src="public/peach.gif" alt="Peach" />
      </div>
    </>
  );
}

export default About;

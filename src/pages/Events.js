import React from "react";
import "./Events.css";
import SDG from "../images/sdg11.png";
import Future from "../images/future.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";
import Button from "react-bootstrap/Button";

const Events = () => {
  // const [dayRemain, setDayRemain] = useState(0);

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const date = day + "-" + month + "-" + year;

  const event = [
    {
      name: "SDG Goal 11 Workshop",
      date: "24-6-2021",
      content: `We wish to inspire more people to move towards 
                achieving a Smarter and more Self-Sustainable City. 
                Therefore, we are organizing a talk show revolving 
                the topics and we wish to discuss about our efforts 
                in reaching this particular goal.`,
    },
    {
      name: "Technology Movement",
      date: "29-9-2021",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
        occaecat cupidatat non proident, sunt in culpa qui officia 
        deserunt mollit anim id est laborum.`,
    },
  ];

  //const remain = () => {
  //const oneDay = 24 * 60 * 60 * 1000;
  //const dateArr = event[0].date.split("-");
  //const newDate = new Date(dateArr[2], dateArr[1], dateArr[0]);
  //const oriDate = new Date(year, month, day);

  //const diff = Math.round(Math.abs((oriDate - newDate) / oneDay));
  //setDayRemain(diff);
  //};

  return (
    <>
      <Container fluid>
        <div className="title">
          <h1>Events</h1>
          <hr />
          <div className="date">
            <u>{date}</u>
          </div>
        </div>
        <div className="events">
          <Row>
            <Col>
              <Media>
                <Image fluid src={SDG} width={200} height={200} alt="SDG" />
                <Media.Body>
                  <h5>{event[0].name}</h5>
                  <p>{event[0].content}</p>
                  <Media>
                    <Media.Body>
                      <Button
                        variant="success"
                        href="https://calendar.google.com/calendar/r/eventedit?
                              text=SDG+GOAL+11+Workshop&dates=20210624/20210625"
                        alt="email"
                      >
                        Add to calendar
                        <br />
                        {event[0].date}
                      </Button>
                    </Media.Body>
                  </Media>
                </Media.Body>
              </Media>
            </Col>
            <Col>
              <Media>
                <Image
                  fluid
                  src={Future}
                  width={400}
                  height={400}
                  alt="Future"
                />
                <Media.Body>
                  <h5>{event[1].name}</h5>
                  <p>{event[1].content}</p>
                  <Media>
                    <Media.Body>
                      <Button
                        variant="success"
                        href="https://calendar.google.com/calendar/r/eventedit?
                        text=SDG+GOAL+11+Workshop&dates=20210929/20210930"
                        alt="email"
                      >
                        Add to calendar
                        <br />
                        {event[1].date}
                      </Button>
                    </Media.Body>
                  </Media>
                </Media.Body>
              </Media>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Events;

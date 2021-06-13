import React, { useEffect, useState } from "react";
import axios from "axios";

import "./News.css";
// import SDG from "../images/sdg11.png";

import { Timeline } from "react-twitter-widgets";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const News = () => {
  const [newsImg, getNewsImg] = useState("");
  const [newsTitle, getNewsTitle] = useState("");
  const [newsContent, getNewsContent] = useState("");
  const [newsLink, getNewsLink] = useState("");
  const [newsImgAlt, getNewsImgAlt] = useState("");
  const [newsTitleAlt, getNewsTitleAlt] = useState("");
  const [newsContentAlt, getNewsContentAlt] = useState("");
  const [newsLinkAlt, getNewsLinkAlt] = useState("");
  const [newsImgTer, getNewsImgTer] = useState("");
  const [newsTitleTer, getNewsTitleTer] = useState("");
  const [newsContentTer, getNewsContentTer] = useState("");
  const [newsLinkTer, getNewsLinkTer] = useState("");
  const [loading, setLoading] = useState(false);

  const url =
    "https://newsapi.org/v2/everything?q=Smart+Sustainable+Cities&sortBy=relevancy&apiKey=6211fc6f2a994435ac03cd86db09a686";

  const fetchNews = () => {
    axios
      .get(url)
      .then((response) => {
        const title = response.data.articles[0].title;
        const content = response.data.articles[0].content;
        const link = response.data.articles[0].url;
        const image = response.data.articles[0].urlToImage;
        getNewsTitle(title);
        getNewsContent(content);
        getNewsLink(link);
        getNewsImg(image);

        const altTitle = response.data.articles[1].title;
        const altContent = response.data.articles[1].content;
        const altLink = response.data.articles[1].url;
        const altImage = response.data.articles[1].urlToImage;
        getNewsTitleAlt(altTitle);
        getNewsContentAlt(altContent);
        getNewsLinkAlt(altLink);
        getNewsImgAlt(altImage);

        const terTitle = response.data.articles[2].title;
        const terContent = response.data.articles[2].content;
        const terLink = response.data.articles[2].url;
        const terImage = response.data.articles[2].urlToImage;
        getNewsTitleTer(terTitle);
        getNewsContentTer(terContent);
        getNewsLinkTer(terLink);
        getNewsImgTer(terImage);

        setLoading(false);
      })
      .catch((e) => console.error("Error: " + e));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <Container fluid>
        <div className="title">
          <h1>News</h1>
          <hr />
        </div>
        <Row>
          <Col>
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "SDGoals",
              }}
              options={{
                height: "500",
              }}
            />
          </Col>
          <Col>
            <Timeline
              dataSource={{
                sourceType: "profile",
                screenName: "IEEESmartCities",
              }}
              options={{
                height: "500",
              }}
            />
          </Col>
        </Row>
        <hr />
        <h2>
          <u>Latest News</u>
        </h2>
        <br />
        <Row>
          <Col>
            <div className="news">
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src={!newsImg ? <div>Image unavailable</div> : newsImg}
                />
                <Card.Body>
                  <Card.Title>
                    {loading ? <div>loading...</div> : newsTitle}
                  </Card.Title>
                  <Card.Text>
                    {loading ? <div>loading...</div> : newsContent}
                  </Card.Text>
                  <Button variant="success" href={newsLink} target="_blank">
                    {loading ? <div>loading...</div> : <div>Read More</div>}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="news">
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src={!newsImgAlt ? <div>Image unavailable</div> : newsImgAlt}
                />
                <Card.Body>
                  <Card.Title>
                    {loading ? <div>loading...</div> : newsTitleAlt}
                  </Card.Title>
                  <Card.Text>
                    {loading ? <div>loading...</div> : newsContentAlt}
                  </Card.Text>
                  <Button variant="success" href={newsLinkAlt} target="_blank">
                    {loading ? <div>loading...</div> : <div>Read More</div>}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="news">
              <Card style={{ width: "25rem" }}>
                <Card.Img
                  variant="top"
                  src={!newsImgTer ? <div>Image unavailable</div> : newsImgTer}
                />
                <Card.Body>
                  <Card.Title>
                    {loading ? <div>loading...</div> : newsTitleTer}
                  </Card.Title>
                  <Card.Text>
                    {loading ? <div>loading...</div> : newsContentTer}
                  </Card.Text>
                  <Button variant="success" href={newsLinkTer} target="_blank">
                    {loading ? <div>loading...</div> : <div>Read More</div>}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default News;

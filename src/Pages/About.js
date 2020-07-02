import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Team">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Programming">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Frameworks">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="Libraries">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.xfive.co%2Fwp-content%2Fuploads%2F2017%2F12%2Ffigma-prototype2.jpg&f=1&nofb=1" />
                  <p>Lorem</p>
                </Tab.Pane>
                <Tab.Pane eventKey="Team">
                  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.px08K1xa3V5oU3Zi5L65TQHaEK%26pid%3DApi&f=1" />
                  <p>Lorem</p>
                </Tab.Pane>
                <Tab.Pane eventKey="Programming">
                  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.xCgVekp-_9OwU3n7K-_0QgHaE8%26pid%3DApi&f=1" />
                  <p>Lorem</p>
                </Tab.Pane>
                <Tab.Pane eventKey="Frameworks">
                  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.eVGssbsoijih-xMlYFaGogHaEo%26pid%3DApi&f=1" />
                  <p>Lorem</p>
                </Tab.Pane>
                <Tab.Pane eventKey="Libraries">
                  <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7dOQ7_1QAz_SVsi8itRDewHaEK%26pid%3DApi&f=1" />
                  <p>Lorem</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    );
  }
}

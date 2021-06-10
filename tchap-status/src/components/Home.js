import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import ServerBlock from "./ServerBlock";

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
/*    isServerOnline('https://matrix.agent.interieur.tchap.gouv.fr/_matrix/identity/api/v1/info?medium=email&address=test@test.com', 'rest').then(value => {
      console.error("rest prod");
      console.error(value);
    });
    isServerOnline('https://matrix.i.tchap.gouv.fr/_matrix/identity/api/v1/info?medium=email&address=test@test.com', 'rest').then(value => {
      console.error("rest preprod");
      console.error(value);
    });
    isServerOnline('https://www.tchap.gouv.fr/themes/tchap/img/logos/tchap-logo.svg', 'img').then(value => {
      console.error("img prod");
      console.error(value);
    });
    isServerOnline('https://www.beta.tchap.gouv.fr/themes/tchap/img/logos/tchap-logo.svg', 'img').then(value => {
      console.error("img preprod");
      console.error(value);
    });*/
    /**
             <div className="tc_Home_block">
              <span>Web Server</span>
              <Row>
                <Col xs>
                  <ServerStatus isUp={wwwProd} title={"www.tchap.gouv.fr"}/>
                </Col>
                <Col xs>
                  <ServerStatus isUp={wwwPreprod} title={"www.beta.tchap.gouv.fr"}/>
                </Col>
                <Col xs>
                  <ServerStatus isUp={wwwPreprod} title={"www.beta.tchap.gouv.fr"}/>
                </Col>
              </Row>
            </div>

            <Row>
              <Col xs={6}>
                <ServerStatus isUp={wwwProd} title={"www.tchap.gouv.fr"}/>
              </Col>
              <Col xs={6}>
                <ServerStatus isUp={wwwProd} title={"www.tchap.gouv.fr"}/>
              </Col>
              <Col xs={6}>
                <ServerStatus isUp={wwwProd} title={"www.tchap.gouv.fr"}/>
              </Col>
            </Row>
     */
  }

  render() {
    return (
      <div className="tc_Home">
        <div className="tc_Home_title">
          Tchap Server Status
        </div>
        <h2>Web Server</h2>
        <ServerBlock configName="webServer" />
        <br />
        <h2>App Prod Server</h2>
        <ServerBlock configName="prodServer" />
        <br />
        <h2>App Pre-prod Server</h2>
        <ServerBlock configName="preprodServer" />
        <br />
        <h2>MCS</h2>
        <ServerBlock configName="avServer" />
        <br />
      </div>
    );
  }
}

import React from "react";
import ServerStatus from "./ServerStatus";
import {isOnline} from "../utils/ServerChecker"

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      prod: false,
      preprod: false,
    };
  }

  componentDidMount() {
    isOnline('https://www.tchap.gouv.fr/themes/tchap/img/logos/tchap-logo.svg', (f) => {
      this.setState({
        prod: f,
      });
    });
    isOnline('https://www.beta.tchap.gouv.fr/themes/tchap/img/logos/tchap-logo.svg', (f) => {
      this.setState({
        preprod: f,
      });
    });
  }

  render() {
    let wwwProd = this.state.prod;
    let wwwPreprod = this.state.preprod;
    return (
      <div className="tc_Home">
        <div className="tc_Home_title">
          Tchap Server Status
        </div>
        <div className="tc_Home_container">
          <ServerStatus isUp={wwwProd} title={"www.tchap.gouv.fr"}/>
          <ServerStatus isUp={wwwPreprod} title={"www.beta.tchap.gouv.fr"}/>
        </div>
      </div>
    );
  }
}

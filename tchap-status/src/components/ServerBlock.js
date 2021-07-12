import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import ServerStatus from "./ServerStatus";
import PropTypes from "prop-types";

export default class ServerBlock extends React.Component {
  static propTypes = {
    configName: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      config: undefined,
    };
  }

  componentDidMount() {
    try {
      const config = require(`../../res/config/${this.props.configName}.json`);
      this.setState({
        config,
      });
    } catch (e) {
      if (e instanceof Error && e.code === "MODULE_NOT_FOUND")
        console.error(`Cannot find "${this.props.configName}.json" config file.`);
      else
        throw e;
    }
  }

  _generateBlock = () => {
    const config = this.state.config;
    if (config) {
      let ss = [];
      config.serverlist.forEach(e => {
        ss.push(
          <Col xs={6} key={`${this.props.configName}-${e.requestType}-${e.name}`}>
            <ServerStatus url={e.url} title={e.name} requestType={e.requestType} />
          </Col>
        );
      });
      return ss;
    }
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          {this._generateBlock()}
        </Row>
      </Grid>
    );
  }
}

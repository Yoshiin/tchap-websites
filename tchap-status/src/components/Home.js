import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import ServerBlock from "./ServerBlock";

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reload: false,
            isReloadEnabled: false,
        }
    }

    componentDidMount() {
        const html = document.querySelector('html');
        html.dataset.theme = `theme-light`;
        if (typeof localStorage !== 'undefined') {
            let isSet = localStorage.getItem('isReloadEnabled');
            this.setState({
                isReloadEnabled: isSet,
            });
        }
    }

    onReloadChange() {
        if (typeof localStorage !== 'undefined') {
            const reloadEnabled = this.state.isReloadEnabled;
            localStorage.setItem('isReloadEnabled', !reloadEnabled);
            this.setState({
                isReloadEnabled: !reloadEnabled,
            });
        }
    }

    reloadStatus() {
        this.setState({
            reload: true,
        });
    }

    switchTheme(theme) {
        html.dataset.theme = `theme-${theme}`;
    }

    render() {
        let btnClasses = this.state.isReloadEnabled ? "tc_Home_btn" :"tc_Home_btn_nok";
        return (
            <div className="tc_Home">
                <div className="tc_Home_title">
                    Tchap Server Status
                </div>

                <button className={btnClasses}>RELOAD</button>
                <h2>Web Server</h2>
                <ServerBlock configName="webServer" reload={this.state.reload} />
                <br />
                <h2>App Prod Server</h2>
                <ServerBlock configName="prodServer" reload={this.state.reload} />
                <br />
                <h2>App Pre-prod Server</h2>
                <ServerBlock configName="preprodServer" reload={this.state.reload} />
                <br />
                <h2>MCS</h2>
                <ServerBlock configName="avServer" reload={this.state.reload} />
                <br />
            </div>
        );
    }
}

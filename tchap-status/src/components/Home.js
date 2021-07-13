import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import ServerBlock from "./ServerBlock";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import NightsStayIcon from '@material-ui/icons/NightsStay';

export default class Home extends React.Component {


    /*

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

    render :

                <button className={btnClasses}>RELOAD</button>
     */


    constructor(props) {
        super(props);
        this.switchTheme = this.switchTheme.bind(this);
        this.state = {
            reload: false,
            isReloadEnabled: false,
            theme: "theme-light",
        }
    }

    componentDidMount() {
        if (typeof localStorage !== 'undefined') {
            const theme = localStorage.getItem('theme') || "theme-light";
            this.setTheme(theme);

            let isSet = localStorage.getItem('isReloadEnabled');
            this.setState({
                isReloadEnabled: isSet,
            });
        }
    }

    setTheme(theme) {
        const html = document.querySelector('html');
        html.dataset.theme = theme;
        this.setState({theme: theme});
        localStorage.setItem('theme', theme);
    }

    switchTheme(event) {
        const theme = event.target.checked ? "theme-dark" : "theme-light";
        this.setTheme(theme);
    }

    render() {
        let btnClasses = this.state.isReloadEnabled ? "tc_Home_btn" :"tc_Home_btn_nok";
        const isDarkTheme = this.state.theme === "theme-dark";
        return (
            <div className="tc_Home">
                <div className="tc_Home_title">
                    Tchap Server Status
                    <div className="tc_Home_switch">
                        <WbSunnyIcon fontSize="small" className="icon-color" />
                        <label className="switch">
                            <input type="checkbox"
                                name="theme-switcher"
                                checked={isDarkTheme}
                                onChange={this.switchTheme} />
                                <span className="slider round"/>
                        </label>
                        <NightsStayIcon fontSize="small" className="icon-color" />
                    </div>
                </div>

                <h2 className="tc_ServerBlock_title">Web Server</h2>
                <ServerBlock configName="webServer" reload={this.state.reload} />
                <br />
                <h2 className="tc_ServerBlock_title">App Prod Server</h2>
                <ServerBlock configName="prodServer" reload={this.state.reload} />
                <br />
                <h2 className="tc_ServerBlock_title">App Pre-prod Server</h2>
                <ServerBlock configName="preprodServer" reload={this.state.reload} />
                <br />
                <h2 className="tc_ServerBlock_title">MCS</h2>
                <ServerBlock configName="avServer" reload={this.state.reload} />
                <br />
            </div>
        );
    }
}

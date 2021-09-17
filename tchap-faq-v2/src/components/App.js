import React from "react";
import TopBar from "./TopBar";

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TopBar />
                React Template
            </div>
        );
    }
}

import React from "react";
import PropTypes from "prop-types";
import {isServerOnline} from "../utils/ServerChecker"

export default class ServerStatus extends React.Component {
	static propTypes = {
		url: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		requestType: PropTypes.string.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {
			isUp: undefined,
		};
	}

	componentDidMount() {
		isServerOnline(this.props.url, this.props.requestType).then(res => {
			this.setState({
				isUp: res,
			});
		});
	}

	render() {
		const isUp = this.state.isUp;
		let classes = "tc_ServerStatus_block tc_ServerStatus_status ";
		if (isUp === true) {
			classes += "tc_ServerStatus_status_ok";
		} else if (isUp === false) {
			classes += "tc_ServerStatus_status_ko";
		} else {
			classes += "tc_ServerStatus_status_w";
		}

		return (
			<div className="tc_ServerStatus">
				<div className={classes}>
					&nbsp;
				</div>
				<div className="tc_ServerStatus_block tc_ServerStatus_title">
					{this.props.title}
				</div>
			</div>
		);
	}
}

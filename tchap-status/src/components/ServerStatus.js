import React from "react";
import PropTypes from "prop-types";

export default class ServerStatus extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isUp: props.isUp,
		};
	}

	render() {
		const isUp = this.props.isUp;
		let classes = "tc_ServerStatus_block tc_ServerStatus_status ";
		classes += isUp ? "tc_ServerStatus_status_ok" : "tc_ServerStatus_status_ko";
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

ServerStatus.propTypes = {
	isUp: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
};

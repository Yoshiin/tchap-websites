import React from "react";
import PropTypes from "prop-types";
import {isServerOnline} from "../utils/ServerChecker"
import ReactTooltip from 'react-tooltip';

export default class ServerStatus extends React.Component {
	static propTypes = {
		url: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		requestType: PropTypes.string.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {
			isUp: null,
			duration: "-",
			error: null
		};
	}

	componentDidMount() {
		isServerOnline(this.props.url, this.props.requestType).then(res => {
			this.setState({
				isUp: res.isUp,
				duration: res.duration,
				error: res.error,
			});
			ReactTooltip.rebuild();
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

		// TODO : Add an icon in order to make an automatic reload.
		// Add a value inside webstorage in order to save state of this btn.

		return (
			<div className="tc_ServerStatus" data-tip={this.state.error}>
				<div className={classes}>
					&nbsp;
				</div>
				<div className="tc_ServerStatus_block tc_ServerStatus_title">
					{this.props.title}
					<span className="tc_ServerStatus_time">( {this.state.duration} ms )</span>
				</div>
				<ReactTooltip place="left" type="error" effect="solid"/>
			</div>
		);
	}
}

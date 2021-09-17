import React from "react";
import Grid from '@material-ui/core/Grid';

export default class TopBar extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		try {
			const qa = require(`../../res/config/faq.json`);
			console.error(qa)
		} catch (e) {
			if (e instanceof Error && e.code === "MODULE_NOT_FOUND")
				console.error(`Cannot find "faq.json" file.`);
			else
				throw e;
		}
	}

	render() {
		return (
			<div className="tc_TopBar">
				<Grid container>
					<Grid item xs={2} className="tc_TopBar_item tc_Align_center">
						Topbar1
					</Grid>
					<Grid item xs={8} className="tc_TopBar_item tc_Align_left">
						<img src="https://www.tchap.gouv.fr/faq/libs/img/tchap-logo.svg" alt={"logo"} className="tc_TopBar_logo"/>
						<div className="tc_TopBar_tag">Tchap</div>
					</Grid>
					<Grid item xs={2} className="tc_TopBar_item tc_Align_center">
						Topbar3
					</Grid>
				</Grid>
			</div>
		);
	}
}

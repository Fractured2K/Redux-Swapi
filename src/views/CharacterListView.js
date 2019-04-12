import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchSwapiPeople } from "../actions";

import Loader from "react-loader-spinner";

class CharacterListView extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.fetchSwapiPeople();
	}

	render() {
		if (this.props.fetching) {
			return <Loader type="ThreeDots" color="#000000" height={60} />;
		}

		return (
			<div className="CharactersList_wrapper">
				<CharacterList characters={this.props.characters} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	fetching: state.charsReducer.fetching,
	characters: state.charsReducer.characters
});

export default connect(
	mapStateToProps,
	{ fetchSwapiPeople }
)(CharacterListView);

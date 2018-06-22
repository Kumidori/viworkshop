import {connect} from 'react-redux';
import App from "./App";

export const mapStateToProps = (state, props) => {
	return {
		loading: state.loading,
		users: state.users
	};
};

export const mapDispatchToProps = (dispatch, props) => {
	return {};
};

export const AppContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

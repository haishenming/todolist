import React, {Component} from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
	handleClick() {
		this.props.deleteItem(this.props.index)

	}

	render() {
		return (
			<div onClick={this.handleClick.bind(this)}>
				{this.props.content}
			</div>
		)
	}
}

TodoItem.propTypes = {
	content: PropTypes.string.isRequired,
	deleteItem: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired
};

export default TodoItem;

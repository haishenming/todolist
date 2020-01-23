import React, {Component, Fragment} from 'react';
import TodoItem from "./TodoItem";
import './TodoList.css'

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			list: []
		}
	}

	handleInputChange(e) {
		console.log(e);
		this.setState({
			inputValue: e.target.value
		});
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		if (this.state.inputValue !== '') {
			console.log("false")
			return false
		}
	}

	handleBtnClick() {
		this.setState({
			list: [...this.state.list, this.state.inputValue],
			inputValue: ''
		});
	}

	handleItemDelete(index) {
		const list = [...this.state.list];
		list.splice(index, 1);

		this.setState({
			list: list
		})
	}

	getTodoItem() {
		return this.state.list.map((item, index) => {
			return (
				// <li
				// 	key={index}
				// 	onClick={this.handleItemDelete.bind(this, index)}
				// >
				// 	{item}
				// </li>
				<TodoItem
					content={item}
					index={index}
					deleteItem={this.handleItemDelete.bind(this)}
				/>
			)
		})
	}

	render() {
		return (
			<Fragment>
				<div>
					<label htmlFor={'insertArea'}>输入</label>
					<input
						id={'insertArea'}
						className={'input'}
						value={this.state.inputValue}
						onChange={this.handleInputChange.bind(this)}
					/>
					<button onClick={this.handleBtnClick.bind(this)}>提交</button>
				</div>
				<ul>
					{
						this.getTodoItem()
					}
				</ul>
			</Fragment>
		);
	}
}

export default TodoList;

import React, {Component} from 'react';
import Textfield from 'components/textfield';

export default class Dropdown extends Component {
  constructor () {
    super();

    this.state = {
      open: false,
      value: ''
    };

    this.setupHandlers();
  }

  setupHandlers() {
    this.toggleOpen = this.toggleOpen.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  toggleOpen() {
    this.setState({
      open: !this.state.open
    })
  }

  updateValue(e) {
    this.toggleOpen();
    this.setState({
      value: e.target.textContent
    });
  }

  _renderList(data, i) {
    return (
      <li
        key={`${this.props.hash}-li-${i}`}
        className="dropdown__list-item"
      >
        <button onClick={this.updateValue}>
          {data}
        </button>
      </li>
    )
  }

  render() {
    const openClass = !this.state.open ? 'hidden': '';
    const dropdownListClasses = ['dropdown__list', openClass].join(' ')

    return(
      <div className="dropdown">
        <button type="text" onClick={this.toggleOpen}>
          <Textfield
            label={this.props.label}
            value={this.state.value}
          />
        </button>
        <ul className={dropdownListClasses}>
          {this.props.collection.map((item, i) => this._renderList(item, i))}
        </ul>
      </div>
    );
  }
}

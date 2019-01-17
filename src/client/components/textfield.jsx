import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'styles/components/textfield';

export default class Textfield extends Component {
  constructor() {
    super();

    this.state = {
      focused: false,
      dirty: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange(e) {
    const val = e.target.value;
    e.preventDefault();
    if (!this.props.textChanged) return;
    this.props.textChanged(val);
  }

  handleFocus(e) {
    this.setState({ focused: true });
  }

  handleBlur(e) {
    const isDirty = e.target.value !== '';

    this.setState({
      dirty: isDirty,
      focused: false
    });
  }

  render() {
    // TODO: Create mechanism for classnames
    const focusClass = !this.state.focused ? '' : 'textfield--focused';
    const dirtyClass = !this.state.dirty ? '' : 'textfield--dirty';
    const textfieldClasses = ['textfield', focusClass, dirtyClass].join(' ');
    
    return(
      <fieldset className={textfieldClasses}>
        <input
          id={this.props.id}
          className="textfield__input"
          type={this.props.type}
          value={this.props.value}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        <label
          className='textfield__label'
          htmlFor={this.props.id}
        >
          {this.props.label}
        </label>
        <span className={!this.props.error ? `textfield__error hidden`: 'textfield'}>Error: can't be blank</span>
      </fieldset>
    );
  }
}

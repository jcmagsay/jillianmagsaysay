import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'styles/components/textfield';

import ClassCatNode from 'atoms/ClassCatNode';

let focused = false;
let dirty = false;

const handleChange = (e, componentProps) => {
  e.preventDefault();

  const {
    textChanged,
  } = componentProps

  const val = e.target.value;

  if (!textChanged) return;

  textChanged(val);
}

const handleFocus = (e) => {
  focused = true;
}

const handleBlur = (e) => {
  const isDirty = e.target.value !== '';

  dirty = isDirty;
  focused = false;
}

const Textfield = (props) => {
  const {
    error,
    id,
    label,
    type,
    value,
  } = props;

  return (
    <ClassCatNode
      as="fieldset"
      className={[
        'textfield',
        {
          'textfield--dirty': dirty,
          'textfield--focused': focused,
        },
      ]}
    >
      <input
        id={id}
        className="textfield__input"
        type={type}
        value={value}
        onChange={(e) => handleChange(e, props)}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        className='textfield__label'
        htmlFor={id}
      >
        {label}
      </label>
      <ClassCatNode
        className={[
          'textfield__error',
          {
            'textfield__error hidden': !error,
          },
        ]}
      >
        Error: can't be blank
      </ClassCatNode>
    </ClassCatNode>
  );
};

export default Textfield;

import React, { Component } from 'react';
import Textfield from 'components/textfield';
import ClassCatNode from 'atoms/ClassCatNode';


let open = false;
let value = '';

const toggleOpen = () => {
  open = !open;
};

const updateValue = (e) => {
  this.toggleOpen();
  value = e.target.textContent
};

const renderList = (hash, data, i) => {
  return (
    <li
      key={`${hash}-li-${i}`}
      className="dropdown__list-item"
    >
      <button onClick={updateValue}>
        {data}
      </button>
    </li>
  )
};


const Dropdown = (props) => {
  const {
    collection,
    hash,
    label,
  } = props;

  const openClass = !open ? 'hidden' : '';

  return(
    <div className="dropdown">
      <button type="text" onClick={toggleOpen}>
        <Textfield
          label={label}
          value={value}
        />
      </button>
      <ClassCatNode
        className={[
          'dropdown__list',
          {
            hidden: open,
          },
        ]}
      >
        {collection.map((item, i) => renderList(hash, item, i))}
      </ClassCatNode>
    </div>
  );
}

export default Dropdown;

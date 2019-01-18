import React, { Component } from 'react';
import Dropdown from 'Molecules/Dropdown/Dropdown';
import Text from 'Atoms/Text/Text';
import Textfield from 'Molecules/Textfield/Textfield';

const getPages = () => {
  return [
    'home',
    'about',
    'projects',
    'resume',
    'ideas',
    'contact',
  ];
};

const submitForm = (e) => {
  e.preventDefault();
  // alert('future placeholder for submit form');
};

const Cms = () => {
  // TODO: perhaps this can come dynamically from the routes. More scaleable.
  const pages = getPages();

  return (
    <form onSubmit={submitForm}>
      <Text type="display-sm">Add entries</Text>
      <Dropdown
        collection={pages}
        hash="page-dd"
        label="Choose Page"
      />
      <Textfield
        id="input-1"
        label="Title"
        type="text"
      />
      <Textfield
        id="input-1"
        label="Supporting Text"
        type="text"
      />
      <input
        type="button"
        placeholder="Submit"
        onClick={submitForm}
      />
    </form>
  );
}

export default Cms;

import React, {Component} from 'react';
import Dropdown from 'components/dropdown';
import Text from 'components/text';
import Textfield from 'components/textfield';

export default class Cms extends Component {
  constructor () {
    super();

    this.pages = this.getPages();
  }

  setupHandlers() {
    this.submitForm = this.submitForm.bind(this);
  }

  getPages() {
    // TODO: update this to get from API
    return ['home', 'about', 'projects', 'resume', 'ideas', 'contact'];
  }

  submitForm(e) {
    e.preventDefault();
    // alert('future placeholder for submit form');
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <Text type="display-sm">Add entries</Text>
        <Dropdown
          collection={this.pages}
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
        <button onClick={this.submitForm}>Submit</button>
      </form>
    );
  }
}

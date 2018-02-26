import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

import { fetchXinfaList } from "../actions/index";

import './css/xinfa_list_searchbar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
    this.props.fetchXinfaList(event.target.value);
  }

  render() {
    return (
      <div>
        <FormGroup controlId="formBasicText">
          <ControlLabel>심법검색</ControlLabel>
          <FormControl
            styleName='search-input'
            type="text"
            value={this.state.term}
            placeholder="심법을 입력해주세요."
            onChange={this.onInputChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchXinfaList }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
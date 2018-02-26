import React, { Component } from 'react';
import {connect} from "react-redux";
import { Scrollbars } from 'react-custom-scrollbars';

import WuxiaPanel from '../../tiandao_ui/panel';
import {fetchXinfaList, placeXinfaSlot, selectXinfa} from "../actions";
import SearchBar from './xinfa_list_searchbar';

const xinfaPicPath = require.context('../assets/imgs/xinfa_icon', true);

import './css/xinfa_list.css';
import {Dropdown, DropdownButton, MenuItem} from "react-bootstrap";

class XinfaList extends Component {
  constructor(props) {
    super(props);

    this.placeXinfaSlot = this.placeXinfaSlot.bind(this);
  }

  componentDidMount() {
    this.props.fetchXinfaList("");
  }

  onXinfaClick(name, event) {
    // 选择重数

    // 选择心法
    this.props.selectXinfa(name);
  }

  placeXinfaSlot(slotId, xinfaName) {
    this.props.placeXinfaSlot(slotId, xinfaName);
  }

  renderXinfaList() {
    if(this.props.xinfaList) {
      return this.props.xinfaList.map((xinfa) => {
        let itemClick = this.onXinfaClick.bind(this, xinfa.name);
        return (
          <div key={xinfa.name} styleName='xinfa-list-item' onClick={itemClick}>
            <img src={
              xinfaPicPath('./' + xinfa.name + '.png', true)
            } styleName='xinfa-img'/>
            <span styleName='xinfa-name'>{xinfa.name}</span>
            <span styleName='xinfa-level'>
              [{
              this.props.brkthruData[xinfa.name] ?
                this.props.brkthruData[xinfa.name].fulfilledLevel + 1 : 0
              }]급
            </span>
            <span styleName='xinfa-placement'>
              <Dropdown bsSize='xsmall' id={`${xinfa.name}-dropdown`}>
                <Dropdown.Toggle bsStyle='primary'>배치선택</Dropdown.Toggle>
                <Dropdown.Menu styleName='select-slot-dropdown-menu'>
                  {
                    ['심법능력 100%', '심법능력 60%', '심법능력 30%', '심법능력 10%'].map((name, i) => (
                      <MenuItem eventKey={name} key={name}
                        onSelect={(e) => this.placeXinfaSlot(i, xinfa.name)}
                      >
                        {name}
                      </MenuItem>
                    ))
                  }
                </Dropdown.Menu>
              </Dropdown>{' '}
            </span>
          </div>
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  }

  render() {
    return (
      <WuxiaPanel title="심법목록">
        <div>
          <SearchBar />
        </div>
        <div styleName='xinfa-list'>
          <Scrollbars styleName='xinfa-list-wrapper'>
            {this.renderXinfaList()}
          </Scrollbars>
        </div>
        <div>

        </div>
      </WuxiaPanel>
    );
  }

}

function mapStateToProps(state) {
  return {
    xinfaList: state.xinfaList,
    brkthruData: state.brkthruData.chongxue[state.brkthruData.current]
  };
}

export default connect(mapStateToProps, {
  fetchXinfaList,
  selectXinfa,
  placeXinfaSlot
})(XinfaList);
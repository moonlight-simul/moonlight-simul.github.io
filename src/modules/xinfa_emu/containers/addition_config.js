import React, { Component } from 'react';
import {Button, ButtonGroup, Dropdown, MenuItem, Table} from "react-bootstrap";
import range from 'lodash/range';
import {
  setFiveDimAdditionProps
} from "../actions";
import {connect} from "react-redux";

import './css/addition_config.css';

import additionPercentageTable from '../assets/json/addition_percentage_table.json';
import chenghaoList from '../assets/json/addition_id_list.json';

class AdditionConfig extends Component {
  constructor(props) {
    super(props);
  }

  toPercentage(num) {
    return (num * 100).toFixed(2) + '%';
  }

  render() {
    return(
      <div styleName='school-btn-group'>
        <ButtonGroup>
          {
            [
              {id: 'YH', name: '문파', enabled: false},
              {id: 'TB', name: '태백', enabled: true},
              {id: 'ZW', name: '진무', enabled: true},
              {id: 'TX', name: '천향', enabled: true},
              {id: 'SW', name: '신위', enabled: true},
              {id: 'SD', name: '신도', enabled: true},
              {id: 'WD', name: '오독', enabled: true},
              {id: 'TM', name: '당문', enabled: true},
              {id: 'GB', name: '개방', enabled: true},
            ].map(({id, name, enabled}) => {
              let schoolId;
              try {
                schoolId = this.props.additionConfig.schoolId || 'TB'
              } catch(e) {
                schoolId = 'TB';
              }
              return(
                <Button
                  key={id}
                  disabled={!enabled}
                  bsStyle={schoolId === id ? 'default' : 'primary'}
                  onClick={() => {
                    let newConfig = { ...this.props.additionConfig };
                    newConfig.schoolId = id;
                    this.props.setFiveDimAdditionProps(newConfig);
                  }}
                >
                  {name}
                </Button>
              );
            })
          }
        </ButtonGroup>
        <Table styleName='chenghao-table'>
          <thead>
            <tr>
              <th>추가속성</th>
              <th>힘</th>
              <th>체력</th>
              <th>기력</th>
              <th>통찰</th>
              <th>집중</th>
            </tr>
          </thead>
          <tbody>
            {
              chenghaoList.map(({btnTitle, dataId, stateId}, i) => {
                let level;
                try {
                  level = this.props.additionConfig[stateId] || 0;
                } catch(e) {
                  level = 0;
                }
                return(
                  <tr key={i}>
                    <td>
                      <Dropdown id={`${stateId}-selector`}>
                        <Dropdown.Toggle bsStyle='primary' bsSize='small' style={{minWidth: '105px'}}>{btnTitle}<br />{additionPercentageTable[dataId][level]['title']}</Dropdown.Toggle>
                        <Dropdown.Menu styleName='config-selector-menu'>
                          {
                            additionPercentageTable[dataId].map((data, i) => (
                              <MenuItem
                                eventKey={i}
                                key={i}
                                onSelect={() => {
                                  let newConfig = { ...this.props.additionConfig };
                                  newConfig[stateId] = i;
                                  this.props.setFiveDimAdditionProps(newConfig);
                                }}
                              >{data['title']}, {data['des']}</MenuItem>
                            ))
                          }
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    {
                      range(5).map((i) => (
                        <td key={i}>+{this.toPercentage(additionPercentageTable[dataId][level]['all'])}</td>
                      ))
                    }
                  </tr>
                );
              })
            }
            <tr>
              <td>추가속성합계</td>
              {
                ['ld', 'gg', 'qj', 'dc', 'sf'].map((dimId) => {
                  let level;
                  try {
                    level = this.props.additionConfig.shenbingLevels[dimId] || 0;
                  } catch(e) {
                    level = 0;
                  }
                  let sum = additionPercentageTable['shenbing'][dimId][level][dimId];
                  chenghaoList.forEach(({dataId, stateId}) => {
                    let curlevel;
                    try {
                      curlevel = this.props.additionConfig[stateId] || 0;
                    } catch(e) {
                      curlevel = 0;
                    }
                    sum += additionPercentageTable[dataId][curlevel]['all'];
                  });
                  return(
                    <td key={dimId}>
                      +{this.toPercentage(sum)}
                    </td>
                  );
                })
              }
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  let additionConfig = state.brkthruData.additionConfig;
  return {
    brkthruData: state.brkthruData,
    additionConfig: additionConfig
  };
}

export default connect(mapStateToProps, {
  setFiveDimAdditionProps
})(AdditionConfig);
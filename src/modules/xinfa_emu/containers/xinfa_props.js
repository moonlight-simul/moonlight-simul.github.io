import React, { Component } from 'react';
import {connect} from "react-redux";
import {Button, ButtonGroup, Modal, Tab, Table, Tabs} from "react-bootstrap";

import PropsTable from '../components/props_table';
import WuxiaPanel from '../../tiandao_ui/panel';
import './css/xinfa_props.css';
import {calcXinfaProps, calcGongli, calcZhanli, calcSchoolProps, calcAdditionProps} from '../utils/calcProps';

const gemPngPicPath = require.context('../assets/imgs/gem_icon_png', true);


class XinfaProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      xinfaProps: {
        xiuwei: 0,
        stones: [],
        stoneExp: 0,
        ld: 0, gg: 0, qj: 0, dc: 0, sf: 0,
        wg: 0, ng: 0, wf: 0, nf: 0,
        mz: 0, gd: 0, hx: 0, rj: 0, hs: 0, qx: 0,
        gongliOffset: 0
      },
      xinfaSchoolProps: {
        xiuwei: 0,
        stones: [],
        stoneExp: 0,
        ld: 0, gg: 0, qj: 0, dc: 0, sf: 0,
        wg: 0, ng: 0, wf: 0, nf: 0,
        mz: 0, gd: 0, hx: 0, rj: 0, hs: 0, qx: 0,
        gongliOffset: 0
      },

      showGemModal: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.xinfaData.name) {
      // this.calc(nextProps);
      let props = calcXinfaProps(nextProps.xinfaData, nextProps.brkthruData);
      let schoolProps = calcAdditionProps(props, nextProps.brkthruData);
      this.setState({
        xinfaProps: props,
        xinfaSchoolProps: schoolProps
      });
    }
  }

  renderGemModal() {
    return (
      <div>
        <Modal show={this.state.showGemModal} onHide={() => this.setState({showGemModal: false})}
               styleName='wuxia-modal-wrapper'>
          <Modal.Body styleName='wuxia-modal'>
            <WuxiaPanel title='필요폄석' closeBtn onClose={() => this.setState({showGemModal: false})}>
              <div styleName='gem-panel'>
                { this.state.xinfaProps.stones ?
                  this.state.xinfaProps.stones.map((stone, i) => {
                    let colorTable = ['#fff', '#61ff61', '#5757ff', '#ff4dff', '#ffff4d'];
                    let colorId;
                    if(stone.stoneName.includes('1급'))
                      colorId = 0;
                    else if(stone.stoneName.includes('2급'))
                      colorId = 1;
                    else if(stone.stoneName.includes('3급'))
                      colorId = 2;
                    else if(stone.stoneName.includes('4급'))
                      colorId = 3;
                    else if(stone.stoneName.includes('5급'))
                      colorId = 4;
                    return (
                      <div key={i}>
                        <img src={gemPngPicPath(`./${stone.stoneName}.png`, true)} />
                        <span
                          styleName='gem-name'
                          style={{
                            color: colorTable[colorId]
                          }}
                        >{stone.stoneName}</span>
                        <span styleName='gem-des'>（폄석레벨: {stone.stoneLevel}급，{stone.brkthruLevel}급 {stone.shujiId}번 슬롯）</span>
                      </div>
                    )
                  }) :
                  '필요한 폄석이 없습니다.'
                }
                {this.state.xinfaProps.stones && this.state.xinfaProps.stones.length === 0 && '필요한 폄석이 없습니다.'}
              </div>
            </WuxiaPanel>
          </Modal.Body>
        </Modal>
      </div>
    );
  }

  render() {
    return(
      <WuxiaPanel title='심법상황판'>
        <div>
          심법속성：
          <Tabs defaultActiveKey={1} id='xinfa-props-tabs' styleName='xinfa-props-tabs'>
            <Tab eventKey={1} title='기본속성'>
              <PropsTable xinfaProps={this.state.xinfaProps} />
            </Tab>
            <Tab eventKey={2} title='문파추가속성'>
              <PropsTable
                gongliUsedProps={this.state.xinfaProps}
                xinfaProps={this.state.xinfaSchoolProps}
              />
            </Tab>
          </Tabs>
        </div>

        <div>
          필요 수양도：
          <span style={{fontSize: '16px'}}>{ this.state.xinfaProps.xiuwei }</span>
        </div>
        <div>
          <Button
            block bsStyle='primary'
            onClick={() => {this.setState({showGemModal: true})}}
          >
            필요한 폄석
          </Button>
          {this.state.showGemModal && this.renderGemModal()}
        </div>
      </WuxiaPanel>
    );
  }
}

function mapStateToProps(state) {
  let allXinfaBrkthruData = state.brkthruData.chongxue[state.brkthruData.current];
  let fulfilledLevel;
  let curLevelBrkthruData;
  let qianxiuData;

  if(state.xinfaData.name){
    fulfilledLevel = allXinfaBrkthruData[state.xinfaData.name].fulfilledLevel;
    curLevelBrkthruData = allXinfaBrkthruData[state.xinfaData.name].curLevelCX;
    qianxiuData = allXinfaBrkthruData[state.xinfaData.name].qianxiuLevels;
  }

  return {
    xinfaData: state.xinfaData,
    brkthruData: state.brkthruData,
    fulfilledLevel,
    curLevelBrkthruData,
    qianxiuData
  };
}

export default connect(mapStateToProps, {  })(XinfaProps);
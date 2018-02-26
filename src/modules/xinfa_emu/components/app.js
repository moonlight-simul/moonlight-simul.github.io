import React, { Component } from 'react';

import XinfaConfig from '../containers/xinfa_config';
import XinfaList from '../containers/xinfa_list';
import XinfaProps from '../containers/xinfa_props';
import XinfaShuji from '../containers/xinfa_shuji';
import {Col, Grid, Row} from "react-bootstrap";

import WuxiaPanel from '../../tiandao_ui/panel';

import './css/app.css';

class XinfaEmuApp extends Component {
  render() {
    return (
      <div styleName="container">
        <Grid>
          <Row>
            <Col md={12} lg={10} lgOffset={1}>
              <WuxiaPanel title='심법계산기'>
                안녕하세요-.은원섭에서 활동중인 부랑자(취걸개)입니다.
                <br/>
                족보시스템, 시계프로그램등에 많은 성원을 보내주셔서.. 항상 감사한 마음을 가지고 있습니다..!
                <br/>
				그래서 이번에는 심법계산기를 준비해왔습니다..		
                <br/>
				이 계산기는 사실 제가 직접 제작한 것은 아니고, 중국 유저가 제작한 소스를 공유받았고, 한글화를 거친후에 여러분들게 제공해드리는 것 입니다.
                <br/>
				제작지원 : [은원]한강성- 신세계!
              </WuxiaPanel>
              <Row>
                <Col xs={12} md={4}>
                  <XinfaConfig />
                </Col>
                <Col xs={12} md={8}>
                  <XinfaList />
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4}>
                  <XinfaProps />

                </Col>
                <Col xs={12} md={8}>
                  <XinfaShuji />
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default XinfaEmuApp;
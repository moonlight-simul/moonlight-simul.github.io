import React, { Component } from 'react';

import './css/app.css';
import {Col, Grid, Jumbotron, PageHeader, Panel, Row} from "react-bootstrap";

import panelPic1 from '../assets/imgs/1.png';
import panelPic2 from '../assets/imgs/2.png';
import panelPic3 from '../assets/imgs/3.png';
import panelPic4 from '../assets/imgs/4.png';

import xinfaPic from '../assets/imgs/xinfa.png';
import mapPic from '../assets/imgs/map.png';
import calendarPic from '../assets/imgs/calendar.png';


import {Link} from "react-router-dom";

class PortalApp extends Component {
  render() {
    return(
      <div>
        <Jumbotron styleName='pic-header'>
          <Grid>
            <Row>
              <Col md={10} mdOffset={1} style={{border: 'black 1px #000'}}>
                <h1>취걸개 Tools</h1>
                <p>취걸개 Tools는 현재 심법계산기, 문답족보, 부랑자시계 서비스를 제공중입니다.</p>
                <p>취걸개 블로그：<a href="http://rostory.net">로스트 스토리</a></p>
                <p>디스코드：부랑자#1710</p>
                <p>방파 - [은원] 한강성 - 신세계</p>
              </Col>
            </Row>
          </Grid>
        </Jumbotron>
        <Grid>
          <Row>
            <Col md={12}>
              <PageHeader>
                서비스 목록
              </PageHeader>
              <Row style={{display: 'flex', flexWrap: 'wrap'}}>
                <Col md={3} sm={6} xs={12}>
                  <Panel styleName='nav-panel'>
                    <Link to='/xinfa'><img src={xinfaPic} /></Link>
                    <div styleName='nav-panel-div'>
                      <Link to='/xinfa'>
                        <h3>심법계산기</h3>
                        <hr />
                        <p>
                          인게임 디자인과 흡사한 UI제공
                        </p>
                      </Link>
                    </div>
                  </Panel>
                </Col>
                <Col md={3} sm={6}>
                  <Panel styleName='nav-panel'>
                    <a href="http://moonlight-blade.github.io" target="_blank"><img src={mapPic} /></a>
                    <div styleName='nav-panel-div'>
                      <a href="http://moonlight-blade.github.io" target="_blank">
                        <h3>문답족보</h3>
                        <hr />
                        <p>
                          팔괘점, 기연문답, 소요문답을 파훼하라!
                        </p>
                      </a>
                    </div>
                  </Panel>
                </Col>
                <Col md={3} sm={6}>
                  <Panel styleName='nav-panel'>
                    <a href="http://rostory.net/4447" target="_blank"><img src={calendarPic} /></a>
                    <div styleName='nav-panel-div'>
                      <a href="http://rostory.net/4447" target="_blank">
                        <h3>부랑자 게임시계</h3>
                        <hr />
                        <p>
                          서화/견문용 시계프로그램
                        </p>
                      </a>
                    </div>
                  </Panel>
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default PortalApp;
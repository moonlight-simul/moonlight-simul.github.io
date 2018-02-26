import React, { Component } from 'react';
import Loadable from 'react-loadable';

import {
  BrowserRouter,
  Route,
  Link, NavLink, Switch, HashRouter
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import {Button, Glyphicon, MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

import Loading from './tiandao_ui/components/loading';

import Home from './portal/index';

// const Home = Loadable({
//   loader: () => import('./portal/index'),
//   loading: () => <Loading />
// });


const XinfaEmu = Loadable({
  loader: () => import('./xinfa_emu/index'),
  loading: () => <Loading />
});

const WuxiaMap = Loadable({
  loader: () => import('./map/index'),
  loading: () => <Loading />
});

const Calendar = Loadable({
  loader: () => import('./calendar/index'),
  loading: () => <Loading />
});

const FamilySkillEmu = Loadable({
  loader: () => import('./family_skill_emu/index'),
  loading: () => <Loading />
});

const Index = () => (
  <BrowserRouter>
    <div>
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>취걸개 Tools</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {/*<LinkContainer to='/'><NavItem eventKey={1}>首页</NavItem></LinkContainer>*/}
            <LinkContainer to='/xinfa'><NavItem eventKey={2}><Glyphicon glyph='remove' /> 심법계산기</NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div style={{marginTop: "50px"}}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/xinfa' component={XinfaEmu}/>
        </Switch>
      </div>
      <div style={{textAlign: 'center', marginTop: '50px'}}>
         <hr />
        <p>
          Copyright © 2017 段段~ （长生剑的一只狗太白，ID涂铃铃）
        </p>
        <p>
          제작/관리/한글화 총괄: 부랑자(취걸개)
        </p>		
        <p>
          제작/한글화 지원: MARAB, 검유
        </p>
        <p>
         디스코드 : 부랑자#1710 블로그 : rostory.net
        </p>
      </div>
    </div>
  </BrowserRouter>
);

export default Index;
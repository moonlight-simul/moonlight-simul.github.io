import React from "react";
import {Col, Grid, Panel, Row} from "react-bootstrap";

export default () => {
  return (
    <div style={{margin: '100px'}}>
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <Panel title='로딩중'>
              <h3>로딩중</h3>
              <p>로딩중입니다. 잠시만 기다려 주세요!</p>
            </Panel>
          </Col>
        </Row>
      </Grid>

    </div>
  );
}
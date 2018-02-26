import React from 'react';
import {calcGongli, calcZhanli} from "../utils/calcProps";
import {OverlayTrigger, Table, Tooltip} from "react-bootstrap";

import './css/props_table.css';

const DataFormat = (props) => {
  let data = props.data;
  let dataStr = '' + data.toFixed(3);
  let dataSplit = dataStr.split('.');
  return(
    <span>
      <span styleName='int'>{dataSplit[0]}.</span>
      <span styleName='frac'>{dataSplit[1]}</span>
    </span>
  );
};

export default (props) => {
  let p = props.xinfaProps;
  // 功力计算单独使用原始属性
  let gongli;
  if(props.gongliUsedProps) {
    gongli = calcGongli(props.gongliUsedProps);
  } else {
    gongli = calcGongli(props.xinfaProps);
  }
  return (
    <Table condensed styleName='prop-table'>
      <colgroup>
        <col className="prop-table-name" />
        <col className="prop-table-data" />
        <col className="prop-table-name" />
        <col className="prop-table-data" />
      </colgroup>
      <tbody>
      <tr>
        <td style={{color: '#f66'}}>
          <OverlayTrigger key={name} placement='top' overlay={<Tooltip id='tooltip'>전투속성에서 도출된 기본공격치(추정값)</Tooltip>}>
            <span>기본공</span>
          </OverlayTrigger>
        </td><td><DataFormat data={gongli} /></td>
        <td>힘</td><td><DataFormat data={p.ld} /></td></tr>
      <tr>
        <td style={{color: '#f66'}}>
          <OverlayTrigger key={name} placement='top' overlay={<Tooltip id='tooltip'>기본속성의 심법공력치에 의한 값(추정값)</Tooltip>}>
            <span>추가공</span>
          </OverlayTrigger>
        </td><td><DataFormat data={gongli + p.gongliOffset} /></td>
        <td>생명</td><td><DataFormat data={p.gg} /></td></tr>
      <tr>
        <td >전투력</td><td><DataFormat data={calcZhanli(props.xinfaProps)} /></td>
        <td>기력</td><td><DataFormat data={p.qj} /></td></tr>
      <tr>
        <td>피통</td><td><DataFormat data={p.qx} /></td>
        <td>통찰</td><td><DataFormat data={p.dc} /></td></tr>
      <tr>
        <td></td><td></td>
        <td>집중</td><td><DataFormat data={p.sf} /></td></tr>

      <tr>
        <td>외공</td><td><DataFormat data={p.wg} /></td>
        <td>외방</td><td><DataFormat data={p.wf} /></td>
      </tr>
      <tr>
        <td>내공</td><td><DataFormat data={p.ng} /></td>
        <td>내방</td><td><DataFormat data={p.nf} /></td>
      </tr>

      <tr>
        <td>명중</td><td><DataFormat data={p.mz} /></td>
        <td>호신</td><td><DataFormat data={p.gd} /></td>
      </tr>
      <tr>
        <td>치명타</td><td><DataFormat data={p.hx} /></td>
        <td>치명회</td><td><DataFormat data={p.rj} /></td>
      </tr>
      <tr>
        <td>치명피</td><td><DataFormat data={p.hs} /></td>
        <td></td><td></td>
      </tr>
      </tbody>
    </Table>
  );
}
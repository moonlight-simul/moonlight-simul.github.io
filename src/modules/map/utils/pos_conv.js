import mapsProps from '../assets/json/mapsProps.json';

export function gamePosToImgPos(mapId, pos) {
  let corresponds = mapsProps[mapId].correspond;
  let gw = corresponds[0].gamePosX - corresponds[1].gamePosX;
  let gh = corresponds[0].gamePosY - corresponds[1].gamePosY;
  let iw = corresponds[0].imgPosX -  corresponds[1].imgPosX;
  let ih = corresponds[0].imgPosY -  corresponds[1].imgPosY;

  let x = (pos[0] - corresponds[0].gamePosX) / gw * iw + corresponds[0].imgPosX;
  let y = (pos[1] - corresponds[0].gamePosY) / gh * ih + corresponds[0].imgPosY;

  return {x, y};
}

export function imgPosToGamePos() {

}
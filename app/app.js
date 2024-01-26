import Monifesto from "./monifesto.mjs";

const monifesto = new Monifesto();

const aPoints = [ {x: 20, y: 0}, {x: 10, y: 30}, {x: 8, y: 38}, {x: 6, y: 22}];

const oStartPoint = {x: 5, y: 0};

aPoints.forEach((oPoint, nIndex, aPointArray) => {
    let oPreviousPoint = oStartPoint;
    if (nIndex > 0) {
        oPreviousPoint = aPointArray[nIndex - 1];
    }
    const x = oPreviousPoint.x;
    const y = oPreviousPoint.y;
    const width = oPoint.x - oPreviousPoint.x;
    const height = oPoint.y - oPreviousPoint.y;
    monifesto.line({x: x, y: y, width: width, height: height});
});

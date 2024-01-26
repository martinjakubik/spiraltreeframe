import ObjectTypeEnum from './monifestoObjectTypes.mjs';
import StartDimensions from './monifestoDimensions.mjs';

class Layer {
    constructor (monifesto, dimensions, palette) {
        this.monifesto = monifesto;
        this.monifesto.context.fillStyle = palette.fill;
        const oLayerDimensions = {
            x: dimensions.x ? dimensions.x : 0,
            y: dimensions.y ? dimensions.y : 0,
            width: dimensions.width ? dimensions.width : StartDimensions.canvas.width,
            height: dimensions.height ? dimensions.height : StartDimensions.canvas.height
        };
        this.monifesto.context.fillRect(oLayerDimensions.x, oLayerDimensions.y, oLayerDimensions.width, oLayerDimensions.height);
    }

    line (dimensions = StartDimensions.line) {
        this.monifesto.context.strokeStyle = 'black';
        this.monifesto.context.lineWidth = 1;
        const nFreePathId = this.monifesto.getFreeId(ObjectTypeEnum.path);
        const oLineDimensions = {
            x: dimensions.x ? dimensions.x : StartDimensions.line.x,
            y: dimensions.y ? dimensions.y : StartDimensions.line.y,
            width: dimensions.width ? dimensions.width : StartDimensions.line.width,
            height: dimensions.height ? dimensions.height : StartDimensions.line.height
        };
        this.monifesto.paths[nFreePathId] = {
            path: [{
                x1: oLineDimensions.x,
                y1: oLineDimensions.y,
                x2: oLineDimensions.x + oLineDimensions.width,
                y2: oLineDimensions.y + oLineDimensions.height
            }]
        };
        this.monifesto.context.beginPath();
        this.monifesto.paths[nFreePathId].path.forEach(oEdge => {
            this.monifesto.context.moveTo(oEdge.x1, oEdge.y1);
            this.monifesto.context.lineTo(oEdge.x2, oEdge.y2);
        });
        this.monifesto.context.closePath();
        this.monifesto.context.stroke();
    }

    text (sText = 'text', dimensions = StartDimensions.text) {
        this.monifesto.context.font = '10px sans-serif';
        this.monifesto.context.fillStyle = 'black';
        const oTextDimensions = {
            x: dimensions.x ? dimensions.x : StartDimensions.text.x,
            y: dimensions.y ? dimensions.y : StartDimensions.text.y,
            width: dimensions.width ? dimensions.width : StartDimensions.text.width,
            height: dimensions.height ? dimensions.height : StartDimensions.text.height
        };
        this.monifesto.context.fillText(sText, oTextDimensions.x, oTextDimensions.y);
    }
}

export default Layer;
import { createCanvas } from '../../lib/learnhypertext.mjs';
import ObjectTypeEnum from './monifestoObjectTypes.mjs';
import Layer from './monifestoLayer.mjs';
import StartDimensions from './monifestoDimensions.mjs';
import Palette from './monifestoPalette.mjs';

class Monifesto {

    #MAX_LAYER_ID = 1000;
    #MAX_PATH_ID = 1000;
    constructor () {
        const sClasses = '';
        const nZindex = 0;
        const oParent = document.body;
        const nWidth = StartDimensions.canvas.width;
        const nHeight = StartDimensions.canvas.height;
        this.canvasId = 'canvas';
        this.canvas = createCanvas(this.canvasId, sClasses, nZindex, oParent, nWidth, nHeight);
        this.context = this.canvas.getContext('2d');
        this.pathId = -1;
        this.paths = {};
        this.layerId = -1;
        this.layers = {};
        this.layer();
    }

    getFreeId (nObjectType) {
        let nFreeId = this.#MAX_LAYER_ID;
        switch (nObjectType) {
        case ObjectTypeEnum.path:
            nFreeId = this.#MAX_PATH_ID;
            for (let nPathId = -1; nPathId < this.MAX_PATH_ID; nPathId++) {
                if(!this.paths[nPathId]) {
                    nFreeId = nPathId;
                }
            }
            break;
        default:
        case ObjectTypeEnum.layer:
            nFreeId = this.#MAX_LAYER_ID;
            for (let nLayerId = -1; nLayerId < this.MAX_PATH_ID; nLayerId++) {
                if(!this.layers[nLayerId]) {
                    nFreeId = nLayerId;
                }
            }
            break;
        }
        return nFreeId;
    }

    getBottomLayer () {
        let aLayerIds = Object.keys(this.layers);
        if (!aLayerIds[0]) {
            this.layer();
        }
        return Object.values(this.layers)[0];
    }

    layer (dimensions = StartDimensions.canvas, palette = Palette) {
        const oLayer = new Layer(this, dimensions, palette);
        const nLayerId = this.getFreeId(ObjectTypeEnum.layer);
        this.layers[nLayerId] = oLayer;
        return oLayer;
    }

    line (dimensions = StartDimensions.line) {
        const oLayer = this.getBottomLayer();
        oLayer.line(dimensions);
    }

    text (sText = 'text', dimensions = StartDimensions.text) {
        const oLayer = this.getBottomLayer();
        oLayer.text(sText, dimensions);
    }
}

export default Monifesto;
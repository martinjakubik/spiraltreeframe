import * as oFs from 'fs/promises';

const sLibPath = './app';

const oMkDirOptions = {
    recursive: true
};

oFs.mkdir(sLibPath, oMkDirOptions).then((oResult) => {
    console.log(oResult);

    oFs.copyFile(
        './node_modules/monifesto/dist/lib/index.mjs', `${sLibPath}/monifesto.mjs`
    ).then((oResult) => {
        console.log(oResult);
    }).catch((oError) => {
        console.log(oError);
    });

    oFs.copyFile(
        './node_modules/monifesto/dist/lib/monifestoDimensions.mjs', `${sLibPath}/monifestoDimensions.mjs`
    ).then((oResult) => {
        console.log(oResult);
    }).catch((oError) => {
        console.log(oError);
    });

    oFs.copyFile(
        './node_modules/monifesto/dist/lib/monifestoLayer.mjs', `${sLibPath}/monifestoLayer.mjs`
    ).then((oResult) => {
        console.log(oResult);
    }).catch((oError) => {
        console.log(oError);
    });

    oFs.copyFile(
        './node_modules/monifesto/dist/lib/monifestoObjectTypes.mjs', `${sLibPath}/monifestoObjectTypes.mjs`
    ).then((oResult) => {
        console.log(oResult);
    }).catch((oError) => {
        console.log(oError);
    });

    oFs.copyFile(
        './node_modules/monifesto/dist/lib/monifestoPalette.mjs', `${sLibPath}/monifestoPalette.mjs`
    ).then((oResult) => {
        console.log(oResult);
    }).catch((oError) => {
        console.log(oError);
    });

    oFs.copyFile(
        './node_modules/learnhypertext/js/index.mjs', `${sLibPath}/learnhypertext.mjs`
    ).then((oResult) => {
        console.log(oResult);
    }).catch((oError) => {
        console.log(oError);
    });

}).catch((oError) => {
    console.log(oError);
});


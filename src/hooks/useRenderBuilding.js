import { MVTLayer } from 'deck.gl';

const buildingDataTitleUrl =
  'https://indigo-lab.github.io/plateau-tokyo23ku-building-mvt-2020/{z}/{x}/{y}.pbf';

export const useRenderBuilding = (tileURL) => {
  //建物データレイヤの基本設定
  const buildingLayerBase = {
    id: 'mvFIll',
    data: buildingDataTitleUrl,
    pickable: false,
    stroked: false,
    filled: true,
    wireframe: true,
    extruded: true,
    lineJointRounded: true,
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getRadius: 100,
    getLineWidth: 1,
  };

  //ダークモード用の建物データ
  const darkBuildingLayer = new MVTLayer({
    ...buildingLayerBase,
    getFillColor: [255, 255, 255, 80],
    // getFillColor: [255, 255, 255, 20],
    // getFillColor: [255, 0, 0, 20],
    // getLineColor: [10, 10, 10, 180],
    getLineColor: [0, 100, 255, 80],
    // getLineColor: [255, 0, 0, 60],
    getElevation: (d) => d.properties.measuredHeight,
  });

  // ライトモード用の建物データ
  const lightBuildingLayer = new MVTLayer({
    ...buildingLayerBase,
    getFillColor: [160, 160, 160, 256],
    getLineColor: [10, 10, 10, 256],
    getElevation: (d) => d.properties.measuredHeight,
  });

  return { darkBuildingLayer, lightBuildingLayer };
};

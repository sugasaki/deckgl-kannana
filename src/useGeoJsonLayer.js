import { GeoJsonLayer } from "@deck.gl/layers";

//データ取得先
// public配下に置いてある
// const geojson = "./track.geojson";
const geojson = "./kannana.geojson";

export const useGeoJsonLayer = () => {
  const lineLayer = new GeoJsonLayer({
    id: "geojson-layer",
    data: geojson,
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getFillColor: [160, 160, 180, 200],
    getLineColor: [255, 0, 0, 200],
    getRadius: 100,
    getLineWidth: 1,
    getElevation: 30
  });

  return { lineLayer };
};

import { ScatterplotLayer } from "@deck.gl/layers";
import { LineLayer } from "@deck.gl/layers";

//データ取得先
// public配下に置いてある
// const geojson = "./track.geojson";
const geojson = "./kannana.geojson";

function getSize(type) {
  if (type.search("major") >= 0) {
    return 100;
  }
  if (type.search("small") >= 0) {
    return 30;
  }
  return 60;
}

function getColor(d) {
  // const z = d.start[2];
  // const r = z / 10000;

  // return [255 * (1 - r * 2), 128 * r, 255 * r, 255 * (1 - r)];
  return [255, 0, 0];
}

export const useScatterplotLayer = () => {
  //
  const lineLayer2 = new ScatterplotLayer({
    id: "airports",
    data: geojson,
    radiusScale: 20,
    getPosition: (d) => d.coordinates,
    getFillColor: [255, 140, 0],
    getRadius: (d) => getSize(d.type),
    pickable: true
  });

  const LineLayer3 = new LineLayer({
    id: "flight-paths",
    data: geojson,
    opacity: 0.8,
    // getSourcePosition: (d) => d.start,
    // getTargetPosition: (d) => d.end,
    getColor,
    getWidth: 3,
    pickable: true
  });

  return { lineLayer2, LineLayer3 };
};

import { TileLayer, BitmapLayer } from "deck.gl";

/**
 * Openstreetmapを使う
 * @param {*} tileURL
 */
export const useOpenstreetmap = (tileURL) => {
  const tileLayer = new TileLayer({
    data: tileURL,

    minZoom: 0,
    maxZoom: 19,
    tileSize: 256,

    renderSubLayers: (props) => {
      const {
        bbox: { west, south, east, north }
      } = props.tile;

      return new BitmapLayer(props, {
        data: null,
        image: props.data,
        bounds: [west, south, east, north]
      });
    }
  });

  return { tileLayer };
};

import React, { useState, useEffect } from "react";
import DeckGL from "@deck.gl/react";
import { Switch, Typography } from "antd";
import "antd/dist/antd.css";

import { useRenderBuilding } from "./hooks/useRenderBuilding";
import { useOpenstreetmap } from "./hooks/useOpenstreetmap";
import { useDeckGlEffect } from "./hooks/useDeckGlEffect";
import { useGeoJsonLayer } from "./hooks/useGeoJsonLayer";
// import { useScatterplotLayer } from "./useScatterplotLayer";

const { Title } = Typography;

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 139.767,
  latitude: 35.6716252,
  maxPitch: 80,
  zoom: 10,
  maxZoom: 25,
  pitch: 50,
  bearing: 0
};

export default function App() {
  const [isLight, setisLight] = useState(true);

  const color = isLight ? "dark" : "light";
  const tileURL = `https://cartodb-basemaps-c.global.ssl.fastly.net/${color}_all/{z}/{x}/{y}.png`;

  const { tileLayer } = useOpenstreetmap(tileURL);
  const { lightingEffect } = useDeckGlEffect();
  const { darkBuildingLayer, lightBuildingLayer } = useRenderBuilding();
  const { lineLayer } = useGeoJsonLayer();
  // const { lineLayer3 } = useScatterplotLayer();

  const descriptionElement = `${color} mode`;

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `環七`;
  });

  return (
    <>
      <DeckGL
        layers={[
          tileLayer,
          // lineLayer3,
          lineLayer,
          isLight ? darkBuildingLayer : lightBuildingLayer
        ]}
        initialViewState={INITIAL_VIEW_STATE}
        effects={[lightingEffect]}
        controller={true}
      >
        <div style={switchStyle}>
          <Title style={titleStyle} level={3} type="danger">
            {descriptionElement}
          </Title>
          <Switch
            checkedChildren="Dark"
            unCheckedChildren="Light"
            defaultChecked
            onChange={(x) => setisLight(x)}
          />
        </div>
      </DeckGL>
    </>
  );
}

const switchStyle = {
  margin: 20
};

const titleStyle = {
  display: "inline",
  marginRight: 20
};

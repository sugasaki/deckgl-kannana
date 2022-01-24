import React from 'react';
import DeckGL from '@deck.gl/react';

import { INITIAL_VIEW_STATE } from '../utils/constants';

import { useRenderBuilding } from '../hooks/useRenderBuilding';
import { useOpenstreetmap } from '../hooks/useOpenstreetmap';
import { useDeckGlEffect } from '../hooks/useDeckGlEffect';
import { useGeoJsonLayer } from '../hooks/useGeoJsonLayer';
// import { useScatterplotLayer } from "./useScatterplotLayer";

export const DeckGlMap = ({ isLight, tileURL, children }) => {
  const { tileLayer } = useOpenstreetmap(tileURL);
  const { lightingEffect } = useDeckGlEffect();
  const { darkBuildingLayer, lightBuildingLayer } = useRenderBuilding();
  const { lineLayer } = useGeoJsonLayer();
  // const { lineLayer3 } = useScatterplotLayer();

  return (
    <>
      <DeckGL
        layers={[
          tileLayer,
          // lineLayer3,
          lineLayer,
          isLight ? darkBuildingLayer : lightBuildingLayer,
        ]}
        initialViewState={INITIAL_VIEW_STATE}
        effects={[lightingEffect]}
        controller={true}
      >
        {children}
      </DeckGL>
    </>
  );
};

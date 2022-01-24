import { LightingEffect, AmbientLight } from "@deck.gl/core";

/**
 * Deck.GLにEffectをかけるためのHooks
 * @param {*} tileURL
 */
export const useDeckGlEffect = () => {
  //ライト設定
  const ambientLight = new AmbientLight({
    color: [255, 255, 255],
    intensity: 10
  });

  // Effect
  const lightingEffect = new LightingEffect({ ambientLight });
  lightingEffect.shadowColor = [0, 0, 0, 0.5];

  return { lightingEffect };
};

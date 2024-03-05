import cssnano from "cssnano";
import postcssenv from "postcss-preset-env";
import postcssduplicatecombine from "postcss-combine-duplicated-selectors";

export default {
  plugins: [
    postcssenv({ stage: 1, browsers: ["last 10 versions", "not dead", "> 0.2%", "not IE 11"] }),
    postcssduplicatecombine({ removeDuplicatedProperties: true, removeDuplicatedValues: true }),
    cssnano({
      convertValues: true,
      discardComments: true,
      discardDuplicates: true,
      discardEmpty: true,
      discardUnused: true,
      minifyFontValue: true,
      minifyGradients: true,
      minifyParams: true,
      minifySelectors: true,
      reduceIdent: true,
      reduceInitial: true,
      reduceTransforms: true,
      normalizeWhitespace: true,
      colormin: true,
      uniqueSelectors: true,
      zindex: true,
    }),
  ]
}
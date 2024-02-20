import Map from "ol/Map.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import OSM from "ol/source/OSM";
import TileDebug from "ol/source/TileDebug";

const map = new Map({
  layers: [
    new TileLayer({ source: new OSM() }),
    new TileLayer({
      source: new TileDebug(),
    }),
  ],
  target: "map",
  view: new View({
    center: [618334.0707369552, -205032.11421389505],
    zoom: 5,
  }),
});

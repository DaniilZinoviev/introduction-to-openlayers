import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { ZoomToExtent } from "ol/control.js";

const map = new Map({
  controls: defaultControls().extend([
    new ZoomToExtent({
      extent: [4076072.4828566443, 7450792.337368891, 4300910.783649025, 7554077.43179539],
      label: "М",
      tipLabel: "Переместиться в Москву",
    }),
  ]),
  layers: [new TileLayer({ source: new OSM() })],
  target: "map",
  view: new View({ center: [0, 0], zoom: 2 }),
});

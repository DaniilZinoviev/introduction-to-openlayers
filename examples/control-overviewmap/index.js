import Map from "ol/Map.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { OverviewMap, defaults as defaultControls } from "ol/control.js";

const overviewMapControl = new OverviewMap({
  // На эти классы добавим CSS (см. style.css)
  className: "ol-overviewmap ol-custom-overviewmap",
  layers: [new TileLayer({ source: new OSM() })],
  collapseLabel: "\u00BB",
  label: "\u00AB",
  collapsed: false,
});

const map = new Map({
  controls: defaultControls().extend([overviewMapControl]),
  layers: [new TileLayer({ source: new OSM() })],
  target: "map",
  view: new View({ center: [500000, 6000000], zoom: 7 }),
});

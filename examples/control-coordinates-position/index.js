import Map from "ol/Map.js";
import MousePosition from "ol/control/MousePosition.js";
import OSM from "ol/source/OSM.js";
import TileLayer from "ol/layer/Tile.js";
import View from "ol/View.js";
import { createStringXY } from "ol/coordinate.js";

const map = new Map({
  layers: [new TileLayer({ source: new OSM() })],
  target: "map",
  view: new View({ center: [0, 0], zoom: 2 }),
});

const mousePositionControl = new MousePosition({
  // Количество цифр после запятой
  coordinateFormat: createStringXY(4),
  projection: "EPSG:4326",
  className: "control-coordinates ol-unselectable ol-control",
  target: document.querySelector("#map .ol-overlaycontainer-stopevent"),
});

map.addControl(mousePositionControl);

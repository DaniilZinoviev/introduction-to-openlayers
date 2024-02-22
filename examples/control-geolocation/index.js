import Map from "ol/Map.js";
import View from "ol/View.js";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import { GeolocationControl } from "./control";

const map = new Map({
  layers: [new TileLayer({ source: new OSM() })],
  target: document.getElementById("map"),
  view: new View({ center: [0, 0], zoom: 2 }),
});

map.addControl(new GeolocationControl());
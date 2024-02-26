import Map from "ol/Map.js";
import View from "ol/View.js";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import { Overlay } from "ol";

const map = new Map({
  layers: [new TileLayer({ source: new OSM() })],
  target: document.getElementById("map"),
  view: new View({ center: [4188878.742882752, 7520435.741484543], zoom: 18 }),
});

// Позиция на карте (головной офис в БФТ)
const position = [4188878.742882752, 7520435.741484543];

// Маркер
const markerTemplate = document.getElementById("marker");
const marker = markerTemplate.content.cloneNode(true);
const markerOverlay = new Overlay({
  element: marker,
  positioning: "bottom-center",
  position: position,
});
map.addOverlay(markerOverlay);

// Попап
const popupTemplate = document.getElementById("popup");
const popup = popupTemplate.content.cloneNode(true);
const popupOverlay = new Overlay({
  element: popup,
  positioning: "bottom-center",
  offset: [0, -36],
  position: position,
});
map.addOverlay(popupOverlay);
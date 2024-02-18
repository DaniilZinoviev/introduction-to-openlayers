import { Map, View } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";

const map3857 = new Map({
  target: document.getElementById("map3857"),
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 1,
  }),
});

const map4326 = new Map({
  target: document.getElementById("map4326"),
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    projection: 'EPSG:4326',
    center: [0, 0],
    zoom: 2,
  }),
});

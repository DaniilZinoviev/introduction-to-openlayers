import { Map, View } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";

const map = new Map({
  target: document.getElementById("map"),
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [
      4190701.0645526173,
      7511438.408408914
    ],
    zoom: 10,
  }),
});

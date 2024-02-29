import { Map, View } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import OGCMapTile from "ol/source/OGCMapTile.js";

const map = new Map({
  target: document.getElementById("map"),
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  view: new View({
    center: [8862494.695656568, 872970.8715096905],
    zoom: 3,
  }),
});

const layer = new TileLayer({
  source: new OGCMapTile({
    url: "https://maps.gnosis.earth/ogcapi/collections/blueMarble/map/tiles/WebMercatorQuad",
  }),
  // Мы можем так же сделать ограничение и по разрешению карты (или масштабу)
  // minResolution: 10000,
  // maxResolution: 100000,
  maxZoom: 7,
  opacity: 0.9,
  visible: true,
  zIndex: 5,
  extent: [6717612.447527122, 583571.8523972307, 10985130.57817296, 3294022.5569966147],
  className: "favorite-layer",
});

map.addLayer(layer);

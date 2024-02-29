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
  // Выбираем источник для тайлов
  source: new OGCMapTile({
    url: "https://maps.gnosis.earth/ogcapi/collections/blueMarble/map/tiles/WebMercatorQuad",
  }),
  // Можем сделать прозрачным
  opacity: 0.9,
  // Можем скрывать слой, не убирая его из карты (и теряя тем самым настройки)
  visible: true,
  // Можем менять наложение слоёв друг на друга
  zIndex: 5,
  // Можем ограничить слой определённой областью
  extent: [6717612.447527122, 583571.8523972307, 10985130.57817296, 3294022.5569966147],
  // Можем добавить CSS-стилей
  className: "favorite-layer",
  // Можем показывать слой лишь в заданных границах зума
  maxZoom: 7,
  // Можем так же показывать слой лишь на определённых разрешениях (масштабе) карты
  // minResolution: 10000,
  // maxResolution: 100000,
});
map.addLayer(layer);

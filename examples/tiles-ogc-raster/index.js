import Map from 'ol/Map.js';
import OGCMapTile from 'ol/source/OGCMapTile.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      // API не подходит для использования XYZ?
      // Решение: создать свой подкласс и доработать API под свои нужды
      source: new OGCMapTile({
        url: 'https://maps.gnosis.earth/ogcapi/collections/blueMarble/map/tiles/WebMercatorQuad',
      }),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 1,
  }),
});

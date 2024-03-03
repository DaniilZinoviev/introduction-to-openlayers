import { Map, View } from "ol";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
// import { fromLonLat, toLonLat } from "ol/proj";

// Создаём экземпляр карты
const map = new Map({
  // HTML-элемент, в который будет инициализирована карта
  target: document.getElementById("map"),
  // Список слоёв на карте
  layers: [
    // Создадим тайловый слой. Источником тайлов будет OpenStreetMap
    new TileLayer({ source: new OSM() }),
  ],
  // Параметры отображения карты по умолчанию: координата центра и зум
  view: new View({
    center: [4190701.0645526173, 7511438.408408914],
    zoom: 10,
  }),
});

// Можем изменить значения любых переданных параметров
// map.setTarget(document.getElementById("#another-place-for-map"));
// map.getView().setZoom(5);
// map.getView().setCenter(5);

// Добавляем обработчик клика по карте
// map.on("click", function (event) {
//   // Кидаем в консоль координаты
//   console.log(event.coordinate);
//   // Часто бывает полезно знать текущий зум
//   console.log(map.getView().getZoom());
//  });

// Конвертация координат из EPSG:4326 в EPSG:3857
// fromLonLat([37.64570817463565, 55.76329720561773]); // Будет [4190701.0645526173, 7511438.408408914]
// // И обратно
// toLonLat([4190701.0645526173, 7511438.408408914]); // [37.64570817463565, 55.76329720561773]

map
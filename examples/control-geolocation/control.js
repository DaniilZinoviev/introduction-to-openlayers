import Feature from "ol/Feature.js";
import Geolocation from "ol/Geolocation.js";
import Point from "ol/geom/Point.js";
import { Icon, Style } from "ol/style.js";
import { Vector as VectorSource } from "ol/source.js";
import { Vector as VectorLayer } from "ol/layer.js";
import Control from "ol/control/Control";

/**
 * Создаем свой класс контрола как дочерний от Control
 */
export class GeolocationControl extends Control {
  // При обновлении геометрии в фичах, автоматически произойдёт перерисовка слоя карты
  accuracyFeature = new Feature();
  positionFeature = new Feature();
  layer = new VectorLayer({ source: new VectorSource({ features: [this.accuracyFeature, this.positionFeature] }) });

  constructor() {
    const element = document.createElement("div");
    super({ element: element });

    // Подготавливаем вёрстку
    // Иконка взята из https://icons8.com/icons/set/location
    element.className = "control-geolocation ol-unselectable ol-control";
    const button = document.createElement("button");
    button.innerHTML = '<img src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1"/>';
    element.appendChild(button);
    button.addEventListener("click", this._handleClick.bind(this));

    // Подготавливаем класс, отслеживающий геолокацию
    // Является оберткой над Geolocation API
    // @see https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
    const geolocation = new Geolocation({ trackingOptions: { enableHighAccuracy: true } });
    geolocation.on("error", (error) => {
      alert(error.message);
    });
    geolocation.on("change:accuracyGeometry", () => {
      this.accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
    });
    geolocation.on("change:position", () => {
      const coordinates = geolocation.getPosition();
      const geometry = coordinates ? new Point(coordinates) : null;
      this.positionFeature.setGeometry(geometry);
      if (geometry) {
        this.getMap()?.getView().fit(geometry, { duration: 300, maxZoom: 13 });
      }
    });

    // Добавляем чуть более красивых стилей
    this.positionFeature.setStyle(
      new Style({
        image: new Icon({
          width: 36,
          src: "/public/icons/human.svg",
        }),
      })
    );
    this.geolocation = geolocation;
    this.button = button;
  }

  /**
   * @overries
   * Метод вызывает OpenLayers при встраивании контрола в карту
   */
  setMap(map) {
    super.setMap(map);
    if (map) {
      this.geolocation.setProjection(map.getView().getProjection());
      map.addLayer(this.layer);
    }
  }

  /**
   * Обработчик клика по кнопке контрола
   */
  _handleClick() {
    this.geolocation.setTracking(true);
  }
}

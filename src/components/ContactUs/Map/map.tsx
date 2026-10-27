import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useTheme } from "../../../components/Layout/LayoutComponents/PageTheme/ThemeContext";
import { contactInfo } from "../../../data/contactInfo";
import styles from "./styles.module.css";
import ReturnToMarker from "./ReturnToMarker/ReturnToMarker";

const TILE_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const TILE_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const brandIcon = L.divIcon({
  className: styles.markerWrapper,
  html: `
    <div class="${styles.markerPin}">
      <div class="${styles.markerDot}"></div>
    </div>
  `,
  iconSize: [46, 54],
  iconAnchor: [23, 54],
});

export default function FastGateMap() {
  const { theme } = useTheme();
  const { lat, lng } = contactInfo.location;

  return (
    <div
      className={`${styles.mapWrapper} ${
        theme === "dark" ? styles.darkMap : ""
      }`}
    >
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        className={styles.map}
        scrollWheelZoom={false}
      >
        <TileLayer url={TILE_URL} attribution={TILE_ATTRIBUTION} />
        <Marker position={[lat, lng]} icon={brandIcon}>
          <Popup>
            <div className={styles.mapPopup}>
              <h3>Fast Gate Group</h3>
              <p>📍 Amman, Jordan</p>
              <p>📞 +962 7 9000 0000</p>
              <p>✉️ info@fastgate.com</p>
            </div>
          </Popup>
        </Marker>{" "}
        <ReturnToMarker lat={lat} lng={lng} />
      </MapContainer>
    </div>
  );
}

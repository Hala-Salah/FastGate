import { useEffect, useRef, useState } from "react";
import { useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import styles from "./styles.module.css";

interface ReturnToMarkerProps {
  lat: number;
  lng: number;
  zoom?: number;
  label?: string;
}

export default function ReturnToMarker({
  lat,
  lng,
  zoom = 15,
  label = "Back to Fast Gate",
}: ReturnToMarkerProps) {
  const map = useMap();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [isAway, setIsAway] = useState(false);

  const checkPosition = () => {
    setIsAway(!map.getBounds().contains([lat, lng]));
  };

  useMapEvents({
    moveend: checkPosition,
    zoomend: checkPosition,
  });

  useEffect(() => {
    if (btnRef.current) {
      L.DomEvent.disableClickPropagation(btnRef.current);
    }
  }, [isAway]);

  if (!isAway) return null;

  return (
    <button
      ref={btnRef}
      type="button"
      className={styles.returnBtn}
      onClick={() => map.flyTo([lat, lng], zoom, { duration: 0.8 })}
    >
      {label}
    </button>
  );
}

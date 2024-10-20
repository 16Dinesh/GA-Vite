import "mapbox-gl/dist/mapbox-gl.css";
import "./Maps.css";
import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import WhereToVoteIcon from '@mui/icons-material/WhereToVote';
import ReactDOMServer from 'react-dom/server';

mapboxgl.accessToken = import.meta.env.VITE_MAP_BOX_ACCESS_TOKEN;

export default function MapBoxMap() {
  const [map, setMap] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);

  const markerData = {
    id: 1,
    name: "Kurnool, Andhra Pradesh, India",
    position: { lat: 15.8281, lng: 78.0373 },
  };

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  useEffect(() => {
    if (mapContainerRef.current) {
      const mapInstance = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [markerData.position.lng, markerData.position.lat],
        zoom: 12,
      });

      setMap(mapInstance);

      // Create marker with custom icon
      const el = document.createElement("div");
      el.className = "custom-marker";
      el.style.width = "50px";
      el.style.height = "50px";

      // Render the SVG icon inside the marker element
      const icon = <WhereToVoteIcon sx={{ fontSize: '50px', color: "#5b864d" }} />;
      el.innerHTML = ReactDOMServer.renderToString(icon);

      markerRef.current = new mapboxgl.Marker(el)
        .setLngLat([markerData.position.lng, markerData.position.lat])
        .addTo(mapInstance)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div class="info-window"><h3>${markerData.name}</h3><p>The Plan Started Here</p></div>`
          )
        );

      el.addEventListener("click", () => {
        handleActiveMarker(markerData.id);
      });

      return () => {
        markerRef.current?.remove();
        mapInstance.remove();
      };
    }
  }, [mapContainerRef]);

  return (
    <div className="map-container">
      <div
        ref={mapContainerRef}
        className="map-style"
        style={{ height: "500px", width: "100%" }}
      />
    </div>
  );
}

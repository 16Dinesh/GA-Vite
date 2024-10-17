import "./Maps.css";
import { Fragment, useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  InfoWindowF,
  useLoadScript,
} from "@react-google-maps/api";

export default function GoogleMaps() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  const [activeMarker, setActiveMarker] = useState(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  // Hyderabad marker
  const markerData = {
    id: 1,
    name: "Kurnool, Andhra Pradesh, India",
    position: { lat: 15.8281, lng: 78.0373 },
  };

  useEffect(() => {
    if (isLoaded && mapRef.current) {
      // Create AdvancedMarkerElement
      const { AdvancedMarkerElement } = window.google.maps.marker;

      markerRef.current = new AdvancedMarkerElement({
        position: markerData.position,
        map: mapRef.current,
        title: markerData.name,
        content: `<img src="https://cdn-icons-png.flaticon.com/512/149/149060.png" alt="Marker" style="width: 50px; height: 50px;" />`,
      });

      // Add click event listener for marker
      markerRef.current.addListener("click", () => {
        handleActiveMarker(markerData.id);
      });
    }
  }, [isLoaded]);

  return (
    <>
      <Fragment>
        <div className="map-container">
          {isLoaded ? (
            <GoogleMap
              center={markerData.position}
              zoom={12}
              onClick={() => setActiveMarker(null)}
              mapContainerClassName="map-style"
              onLoad={(map) => (mapRef.current = map)}
            >
              {activeMarker === markerData.id ? (
                <InfoWindowF
                  position={markerData.position}
                  onCloseClick={() => setActiveMarker(null)}
                >
                  <div className="info-window">
                    <h3>{markerData.name}</h3>
                    <p>The Plan Started Here</p>
                  </div>
                </InfoWindowF>
              ) : null}
            </GoogleMap>
          ) : (
            <p>Loading map...</p>
          )}
        </div>
      </Fragment>
    </>
  );
}

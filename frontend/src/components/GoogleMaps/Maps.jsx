import "./Maps.css"
import { Fragment, useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";


export default function GoogleMaps() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
      });
    
      const [activeMarker, setActiveMarker] = useState(null);
    
      const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
          return;
        }
        setActiveMarker(marker);
      };
    
      // Hyderabad marker
      const marker = {
        id: 1,
        name: "Kurnool, Andhra Pradesh, India",
        position: { lat: 15.8281, lng: 78.0373 },
      };

    return (
        <>
        <Fragment>
        <div className="map-container">
          {isLoaded ? (
            <GoogleMap
              center={marker.position}
              zoom={12}
              onClick={() => setActiveMarker(null)}
              mapContainerClassName="map-style"
            >
              <MarkerF
                key={marker.id}
                position={marker.position}
                onClick={() => handleActiveMarker(marker.id)}
                icon={{
                  url: "https://cdn-icons-png.flaticon.com/512/149/149060.png", 
                  scaledSize: { width: 50, height: 50 },
                }}
              >
                {activeMarker === marker.id ? (
                  <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                    <div className="info-window">
                      <h3>{marker.name}</h3>
                      <p>The Plan Started Here</p>
                    </div>
                  </InfoWindowF>
                ) : null}
              </MarkerF>
            </GoogleMap>
          ) : (
            <p>Loading map...</p>
          )}
        </div>
    </Fragment>
        </>
    )
}
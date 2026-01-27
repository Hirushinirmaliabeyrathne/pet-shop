"use client";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef
} from "@vis.gl/react-google-maps";
import { useState } from "react";



export default function K9TrainingMap() {
  const k9Location = { lat: 6.831499582893176, lng: 79.90952492897983 };

  // This state controls the popup (InfoWindow)
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div style={{ height: "500px", width: "100%", borderRadius: "12px", overflow: "hidden" }}>
        <Map
          defaultCenter={k9Location}
          defaultZoom={15} // Zoomed in closer for specific business
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
          gestureHandling={'greedy'}
          disableDefaultUI={false}

        >
          {/* The Marker for the location */}
          <AdvancedMarker
            ref={markerRef}
            position={k9Location}
            onClick={() => setInfowindowOpen(true)}
            title={"Deutschland K9 Training Lanka"}
          >
            <Pin background={'#e74c3c'} glyphColor={'#fff'} borderColor={'#000'} />
          </AdvancedMarker>

          {/* The Label/Popup */}
          {infowindowOpen && (
            <InfoWindow
              anchor={marker}
              maxWidth={200}
              onCloseClick={() => setInfowindowOpen(false)}
            >
              <div style={{ color: "#000" }}>
                <h3 style={{ fontWeight: "bold" }}>Deutschland K9 Training Lanka</h3>
                <p style={{ fontSize: "12px" }}>Expert K9 Training & Pet Services</p>
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${k9Location.lat},${k9Location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue", fontSize: "11px", textDecoration: "underline" }}
                >
                  Get Directions
                </a>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
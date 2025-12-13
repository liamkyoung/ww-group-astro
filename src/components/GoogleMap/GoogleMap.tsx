import React, { useState } from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

import { MarkerWithInfo } from "./MarkerWithInfo";

import type { GoogleMapPin } from "@/globals/types/listing";
import { GoogleMapsDefaults } from "@/globals/general";

export type Props = {
  pins?: GoogleMapPin[];
  fullscreen?: Boolean;
  zoom?: "close" | "default" | "far";
  pinType?: "listing" | "project";
};

export const GoogleMap = ({
  pins,
  fullscreen = false,
  zoom = "default",
  pinType = "listing",
}: Props) => {
  const widthValue = !fullscreen ? "100%" : "100vw";
  const heightValue = !fullscreen ? "44rem" : "500px";

  const [activePinId, setActivePinId] = useState<string | null>(null); // State for active pin ID

  const handlePinClick = (id: any) => {
    setActivePinId(id); // Set the clicked pin as active
  };

  let mapZoom = 11;

  if (zoom === "close") mapZoom = 14;
  if (zoom === "far") mapZoom = 10;

  return (
    <div className="flex">
      <APIProvider apiKey={import.meta.env.PUBLIC_GOOGLE_MAP_API_KEY}>
        <Map
          style={{ width: widthValue, height: heightValue }}
          defaultCenter={GoogleMapsDefaults.mapCenter}
          defaultZoom={mapZoom}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          mapId={import.meta.env.PUBLIC_GOOGLE_MAPS_ID}
        >
          {pins &&
            pins.map((p, i) => (
              <MarkerWithInfo
                id={p.slug}
                activePinId={activePinId}
                position={{ lat: p.coords.lat, lng: p.coords.lng }}
                title={p.name}
                href={p.slug}
                image={p.coverImg}
                address={p.address}
                price={p.price}
                pinType={pinType}
                key={i}
                handlePinClicked={handlePinClick}
              />
            ))}
        </Map>
      </APIProvider>
    </div>
  );
};

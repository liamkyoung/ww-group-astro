import React, { useCallback, useState } from "react";
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

import { type MapCoords } from "@/globals/viewmodels";
import { ListingLinks } from "@/globals/navigation/listings/listings";
import { ProjectLinks } from "@/globals/navigation/projects/projects";
import type { SanityImage } from "@/lib/schemas";
import { urlFor } from "@/lib/sanityImage";

type Props = {
  id: string;
  activePinId: string | null;
  position: MapCoords;
  pinType: "listing" | "project";
  title: string;
  href: string;
  image?: SanityImage;
  address?: string;
  price?: number;
  handlePinClicked: (id: any) => void;
};

export const MarkerWithInfo = ({
  id,
  position,
  title,
  href,
  image,
  address,
  price,
  pinType,
  activePinId,
  handlePinClicked,
}: Props) => {
  // `markerRef` and `marker` are needed to establish the connection between
  // the marker and infowindow (if you're using the Marker component, you
  // can use the `useMarkerRef` hook instead).
  const [markerRef, marker] = useAdvancedMarkerRef();
  // clicking the marker will toggle the infowindow

  // if the maps api closes the infowindow, we have to synchronize our state
  const finalHref =
    pinType === "listing"
      ? `${ListingLinks.relLink}/${href}`
      : `${ProjectLinks.relLink}/${href}`;

  return (
    <>
      {position.lat && position.lng && (
        <>
          <AdvancedMarker
            ref={markerRef}
            position={new google.maps.LatLng(position.lat, position.lng)}
            onClick={() => handlePinClicked(id)}
          />

          {activePinId === id && (
            <InfoWindow
              anchor={marker}
              onClose={() => handlePinClicked(null)}
              className=""
            >
              <div>
                {href && image ? (
                  <a href={finalHref}>
                    <img
                      src={urlFor(image).url()}
                      alt={title}
                      className="w-64 object-cover"
                    />
                  </a>
                ) : (
                  <img
                    src={urlFor(image).url()}
                    alt={title}
                    className="w-64 object-cover"
                  />
                )}
                <h4 className="my-2">{title}</h4>
              </div>
            </InfoWindow>
          )}
        </>
      )}
    </>
  );
};

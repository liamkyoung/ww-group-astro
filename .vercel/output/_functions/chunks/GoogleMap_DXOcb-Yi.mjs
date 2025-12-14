import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { useAdvancedMarkerRef, AdvancedMarker, InfoWindow, APIProvider, Map } from '@vis.gl/react-google-maps';
import './_astro_assets_CFp-S9Ud.mjs';
import { L as ListingLinks, P as ProjectLinks, G as GoogleMapsDefaults } from './index_CDtGpoOw.mjs';
import { u as urlFor } from './sanityImage_zNuXR53M.mjs';

const MarkerWithInfo = ({
  id,
  position,
  title,
  href,
  image,
  address,
  price,
  pinType,
  activePinId,
  handlePinClicked
}) => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const finalHref = pinType === "listing" ? `${ListingLinks.relLink}/${href}` : `${ProjectLinks.relLink}/${href}`;
  return /* @__PURE__ */ jsx(Fragment, { children: position.lat && position.lng && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      AdvancedMarker,
      {
        ref: markerRef,
        position: new google.maps.LatLng(position.lat, position.lng),
        onClick: () => handlePinClicked(id)
      }
    ),
    activePinId === id && /* @__PURE__ */ jsx(
      InfoWindow,
      {
        anchor: marker,
        onClose: () => handlePinClicked(null),
        className: "",
        children: /* @__PURE__ */ jsxs("div", { children: [
          href && image ? /* @__PURE__ */ jsx("a", { href: finalHref, children: /* @__PURE__ */ jsx(
            "img",
            {
              src: urlFor(image).url(),
              alt: title,
              className: "w-64 object-cover"
            }
          ) }) : /* @__PURE__ */ jsx(
            "img",
            {
              src: urlFor(image).url(),
              alt: title,
              className: "w-64 object-cover"
            }
          ),
          /* @__PURE__ */ jsx("h4", { className: "my-2", children: title })
        ] })
      }
    )
  ] }) });
};

const GoogleMap = ({
  pins,
  fullscreen = false,
  zoom = "default",
  pinType = "listing"
}) => {
  const widthValue = !fullscreen ? "100%" : "100vw";
  const heightValue = !fullscreen ? "44rem" : "500px";
  const [activePinId, setActivePinId] = useState(null);
  const handlePinClick = (id) => {
    setActivePinId(id);
  };
  let mapZoom = 11;
  if (zoom === "close") mapZoom = 14;
  if (zoom === "far") mapZoom = 10;
  return /* @__PURE__ */ jsx("div", { className: "flex", children: /* @__PURE__ */ jsx(APIProvider, { apiKey: "AIzaSyBOy1x6ivH-pBi3zVDK_jZWmo9cqwrD8dA", children: /* @__PURE__ */ jsx(
    Map,
    {
      style: { width: widthValue, height: heightValue },
      defaultCenter: GoogleMapsDefaults.mapCenter,
      defaultZoom: mapZoom,
      gestureHandling: "greedy",
      disableDefaultUI: true,
      mapId: "4e3f5a75ff401322c0887c62",
      children: pins && pins.map((p, i) => /* @__PURE__ */ jsx(
        MarkerWithInfo,
        {
          id: p.slug,
          activePinId,
          position: { lat: p.coords.lat, lng: p.coords.lng },
          title: p.name,
          href: p.slug,
          image: p.coverImg,
          address: p.address,
          price: p.price,
          pinType,
          handlePinClicked: handlePinClick
        },
        i
      ))
    }
  ) }) });
};

export { GoogleMap as G };

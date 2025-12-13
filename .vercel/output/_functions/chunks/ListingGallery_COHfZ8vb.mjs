import { jsx, jsxs } from 'react/jsx-runtime';
import { useMemo, useState } from 'react';
import { f as formatDollarAmount, c as formatPaymentFrequency, b as formatListingType, a as formatPropertyType } from './propertyTypeFormatter_BQ5xwLpq.mjs';
import { c as cn, L as ListingLinks, G as GoogleMapsDefaults } from './index_BG6C6zDl.mjs';
import { u as urlFor } from './sanityImage_zNuXR53M.mjs';
import { G as GoogleMap } from './GoogleMap_EiZjh-RC.mjs';

function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}

const ListingCard = ({
  title: titleOverride,
  doc,
  className,
  isLoading = false
}) => {
  if (isLoading || !doc) {
    return /* @__PURE__ */ jsxs("div", { className: `flex flex-col space-y-3 ${className ?? ""}`, children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "size-64 rounded-md" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-[250px]" }) })
    ] });
  }
  const {
    slug,
    title,
    address,
    sqFt,
    sqFtLand,
    sqFtLot,
    bedCount,
    bathroomCount,
    coverImage,
    price,
    isPriceNegotiable,
    listingType,
    paymentFrequency
  } = doc;
  const titleToUse = titleOverride || title;
  const href = slug ? `${ListingLinks.relLink}/${slug}` : ListingLinks.relLink;
  const additionalInfo = [
    sqFt != null ? `${sqFt} sq ft` : "",
    sqFtLot != null ? `${sqFtLot} acres` : "",
    sqFtLand != null ? `${sqFtLand} sq ft land` : "",
    bedCount != null ? `${bedCount} bed` : "",
    bathroomCount != null ? `${bathroomCount} bath` : ""
  ].filter((info) => info !== "").slice(0, 3);
  const accentText = isPriceNegotiable ? "Negotiable" : price != null ? formatDollarAmount(price.toString()) : void 0;
  const hasCoverImage = coverImage && typeof coverImage !== "string";
  return /* @__PURE__ */ jsxs("div", { className, children: [
    /* @__PURE__ */ jsx("a", { href, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      (accentText || listingType) && /* @__PURE__ */ jsxs("div", { className: "bg-white absolute -bottom-1 -left-1 p-3 rounded-md", children: [
        accentText && /* @__PURE__ */ jsxs("span", { className: "text-wwRed font-bold", children: [
          accentText,
          " ",
          formatPaymentFrequency(paymentFrequency)
        ] }),
        listingType && /* @__PURE__ */ jsxs("span", { className: "text-wwBlack font-medium", children: [
          " ",
          "| ",
          formatListingType(listingType)
        ] })
      ] }),
      !hasCoverImage && /* @__PURE__ */ jsx("div", { className: "mx-auto flex h-64 w-full items-center justify-center rounded-md bg-gray-100 text-sm text-gray-500", children: "No image available" }),
      hasCoverImage && /* @__PURE__ */ jsx(
        "img",
        {
          className: "mx-auto rounded-md h-64 object-cover",
          src: urlFor(coverImage).url()
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      titleToUse && /* @__PURE__ */ jsx("h5", { className: "my-2 text-center lg:text-left", children: titleToUse }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        address && /* @__PURE__ */ jsxs("div", { className: "inline-flex gap-2", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: "size-5 text-wwRed",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
                  clipRule: "evenodd"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold", children: address })
        ] }),
        additionalInfo && additionalInfo.length > 0 && /* @__PURE__ */ jsxs("div", { className: "inline-flex gap-2", children: [
          /* @__PURE__ */ jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              className: "size-5 text-wwRed",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
                  clipRule: "evenodd"
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-sm font-bold", children: additionalInfo.map(
            (info, i) => info + (i !== additionalInfo.length - 1 ? ", " : "")
          ) })
        ] })
      ] }) })
    ] })
  ] });
};

const sortOptions = [
  { name: "Most Expensive", sort: "mostExpensive" },
  { name: "Least Expensive", sort: "leastExpensive" },
  { name: "Newest", sort: "newest" }
];
const ListingFilter = ({
  sortType,
  setSortType,
  agents,
  onToggleAgent,
  propertyTypes,
  onTogglePropertyType
}) => {
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortType(value);
  };
  const agentOptions = Array.from(agents.entries()).map(([name, selected]) => ({
    label: name,
    value: name,
    selected
  }));
  const propertyTypeOptions = Array.from(propertyTypes.entries()).map(
    ([value, selected]) => ({
      label: formatPropertyType(value),
      value,
      selected
    })
  );
  return /* @__PURE__ */ jsx("div", { className: "mb-6 border-t border-gray-200 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 items-start sm:flex-row sm:items-center sm:justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: "Sort by:" }),
      /* @__PURE__ */ jsx(
        "select",
        {
          className: "text-sm rounded-md border border-gray-300 bg-white px-2 py-1 focus:border-wwRed focus:outline-none focus:ring-1 focus:ring-wwRed",
          value: sortType,
          onChange: handleSortChange,
          children: sortOptions.map((option) => /* @__PURE__ */ jsx("option", { value: option.sort, children: option.name }, option.sort))
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-6 text-sm", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-700", children: "Agent:" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: agentOptions.map((option) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => onToggleAgent(option.value),
            className: "rounded-full border px-3 py-1 transition text-xs sm:text-sm " + (option.selected ? "border-wwRed bg-wwRed text-white" : "border-gray-300 bg-white text-gray-700 hover:border-wwRed"),
            children: option.label
          },
          option.value
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-700", children: "Property Type:" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: propertyTypeOptions.map((option) => /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => onTogglePropertyType(option.value),
            className: "rounded-full border px-3 py-1 transition text-xs sm:text-sm " + (option.selected ? "border-wwRed bg-wwRed text-white" : "border-gray-300 bg-white text-gray-700 hover:border-wwRed"),
            children: option.label
          },
          option.value
        )) })
      ] })
    ] })
  ] }) });
};

function convertListingsToPins(listings) {
  return listings.map((l) => ({
    name: l.title,
    coords: {
      lat: l.latitude || GoogleMapsDefaults.mapCenter.lat,
      lng: l.longitude || GoogleMapsDefaults.mapCenter.lng
    },
    slug: l.slug,
    coverImg: l.coverImage,
    address: l.address,
    price: l.price || 0
  }));
}
function sortWithNullsFirst(a, b, comparator) {
  if (a.price === null && b.price === null) return 0;
  if (a.price === null) return -1;
  if (b.price === null) return 1;
  return comparator(a, b);
}
function sortListings(listings, sortType) {
  const copy = [...listings];
  switch (sortType) {
    case "newest":
      return copy.sort(
        (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );
    case "leastExpensive":
      return copy.sort(
        (a, b) => sortWithNullsFirst(a, b, (x, y) => (x.price ?? 0) - (y.price ?? 0))
      );
    case "mostExpensive":
      return copy.sort(
        (a, b) => sortWithNullsFirst(a, b, (x, y) => (y.price ?? 0) - (x.price ?? 0))
      );
    default:
      return copy;
  }
}
function filterBySelectedAgents(listings, agentSelection) {
  if (agentSelection.get("All")) return listings;
  return listings.filter((listing) => {
    if (!listing.agents || listing.agents.length === 0) return false;
    const activeAgents = [...agentSelection.entries()].filter(([, selected]) => selected).map(([name]) => name);
    const listingAgentNames = listing.agents.map((a) => a.title);
    return listingAgentNames.some((name) => activeAgents.includes(name));
  });
}
function filterByPropertyType(listings, propertySelection) {
  if (propertySelection.get("All")) return listings;
  return listings.filter((l) => {
    if (!l.propertyType) return false;
    const selected = propertySelection.get(l.propertyType);
    return !!selected;
  });
}
const ListingGallery = ({
  listings,
  displayHeader = "yes",
  isLoading = false
}) => {
  const allAgentNames = useMemo(
    () => Array.from(
      new Set(
        listings.flatMap(
          (l) => l.agents?.map((a) => a.title).filter(Boolean) ?? []
        )
      )
    ),
    [listings]
  );
  const allPropertyTypes = useMemo(
    () => Array.from(new Set(listings.map((l) => l.propertyType))),
    [listings]
  );
  const [sortType, setSortType] = useState("mostExpensive");
  const [selectedAgents, setSelectedAgents] = useState(
    () => new Map([
      ["All", true],
      ...allAgentNames.map((name) => [name, false])
    ])
  );
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState(
    () => new Map([
      ["All", true],
      ...allPropertyTypes.map((value) => [value, false])
    ])
  );
  const filteredListings = useMemo(() => {
    const sorted = sortListings(listings, sortType);
    const byAgent = filterBySelectedAgents(sorted, selectedAgents);
    return filterByPropertyType(byAgent, selectedPropertyTypes);
  }, [listings, sortType, selectedAgents, selectedPropertyTypes]);
  const pins = useMemo(
    () => convertListingsToPins(filteredListings),
    [filteredListings]
  );
  const handleToggleAgent = (name) => {
    setSelectedAgents((prev) => {
      const next = new Map(prev);
      if (name === "All") {
        next.forEach((_, key) => next.set(key, key === "All"));
      } else {
        next.set("All", false);
        next.set(name, !next.get(name));
        const anySelected = [...next.entries()].some(
          ([key, value]) => key !== "All" && value
        );
        if (!anySelected) {
          next.forEach((_, key) => next.set(key, key === "All"));
        }
      }
      return next;
    });
  };
  const handleTogglePropertyType = (value) => {
    setSelectedPropertyTypes((prev) => {
      const next = new Map(prev);
      if (value === "All") {
        next.forEach((_, key) => next.set(key, key === "All"));
      } else {
        next.set("All", false);
        next.set(value, !next.get(value));
        const anySelected = [...next.entries()].some(
          ([key, v]) => key !== "All" && v
        );
        if (!anySelected) {
          next.forEach((_, key) => next.set(key, key === "All"));
        }
      }
      return next;
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "global-margin-x global-margin-y overflow-x-hidden", children: [
    displayHeader === "yes" ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between mb-16", children: [
      /* @__PURE__ */ jsx("h2", { children: "Current Listings" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: ListingLinks.relLink,
          className: "btn-primary hidden lg:block",
          children: "VIEW ALL LISTINGS"
        }
      )
    ] }) : /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsx("h2", { children: "Our Listings" }) }),
    /* @__PURE__ */ jsx(
      ListingFilter,
      {
        sortType,
        setSortType,
        agents: selectedAgents,
        onToggleAgent: handleToggleAgent,
        propertyTypes: selectedPropertyTypes,
        onTogglePropertyType: handleTogglePropertyType
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 overflow-y-scroll h-[44rem]", children: [
        filteredListings.map((l, i) => /* @__PURE__ */ jsx("div", { className: "w-full", children: /* @__PURE__ */ jsx(ListingCard, { doc: l, isLoading }) }, l._id || `${l.title}-${i}`)),
        filteredListings.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-center col-span-full py-8 font-semibold", children: "No listings match the selected filters." })
      ] }),
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(GoogleMap, { pins, pinType: "listing" }) })
    ] }),
    displayHeader === "yes" && /* @__PURE__ */ jsx("div", { className: "lg:hidden flex flex-col gap-8 lg:gap-0 items-center my-8", children: /* @__PURE__ */ jsx("a", { href: ListingLinks.relLink, className: "btn-primary", children: "VIEW ALL LISTINGS" }) })
  ] });
};

export { ListingGallery as L };

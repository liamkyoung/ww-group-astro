import React, { useMemo, useState } from "react";
import type {
  ListingPreview,
  GoogleMapPin,
  SortListings,
} from "@/globals/types/listing";
import { ListingCard } from "@/components/Cards/ListingCard";
import { GoogleMap } from "../GoogleMap/GoogleMap"; // you’ll provide this
import { ListingFilter } from "../ListingFilter";
import { ListingLinks } from "@/globals/navigation/listings/listings";
import { GoogleMapsDefaults } from "@/globals/general";

type Props = {
  listings: ListingPreview[];
  displayHeader?: "yes" | "no";
  isLoading?: boolean;
};

// --- helpers --------------------------------------------------

function convertListingsToPins(listings: ListingPreview[]): GoogleMapPin[] {
  return listings.map((l) => ({
    name: l.title,
    coords: {
      lat: l.latitude || GoogleMapsDefaults.mapCenter.lat,
      lng: l.longitude || GoogleMapsDefaults.mapCenter.lng,
    },
    slug: l.slug,
    coverImg: l.coverImage,
    address: l.address,
    price: l.price || 0,
  }));
}

// Put negotiable (null price) first when sorting by price
function sortWithNullsFirst(
  a: ListingPreview,
  b: ListingPreview,
  comparator: (a: ListingPreview, b: ListingPreview) => number,
): number {
  if (a.price === null && b.price === null) return 0;
  if (a.price === null) return -1;
  if (b.price === null) return 1;
  return comparator(a, b);
}

function sortListings(
  listings: ListingPreview[],
  sortType: SortListings,
): ListingPreview[] {
  const copy = [...listings];

  switch (sortType) {
    case "newest":
      return copy.sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      );
    case "leastExpensive":
      return copy.sort((a, b) =>
        sortWithNullsFirst(a, b, (x, y) => (x.price ?? 0) - (y.price ?? 0)),
      );
    case "mostExpensive":
      return copy.sort((a, b) =>
        sortWithNullsFirst(a, b, (x, y) => (y.price ?? 0) - (x.price ?? 0)),
      );
    default:
      return copy;
  }
}

function filterBySelectedAgents(
  listings: ListingPreview[],
  agentSelection: Map<string, boolean>,
): ListingPreview[] {
  // “All” selected => no agent filter
  if (agentSelection.get("All")) return listings;

  return listings.filter((listing) => {
    if (!listing.agents || listing.agents.length === 0) return false;
    const activeAgents = [...agentSelection.entries()]
      .filter(([, selected]) => selected)
      .map(([name]) => name);

    const listingAgentNames = listing.agents.map((a) => a.title);
    return listingAgentNames.some((name) => activeAgents.includes(name));
  });
}

function filterByPropertyType(
  listings: ListingPreview[],
  propertySelection: Map<string, boolean>,
): ListingPreview[] {
  if (propertySelection.get("All")) return listings;

  return listings.filter((l) => {
    if (!l.propertyType) return false;
    const selected = propertySelection.get(l.propertyType);
    return !!selected;
  });
}

// --- main component -------------------------------------------

export const ListingGallery: React.FC<Props> = ({
  listings,
  displayHeader = "yes",
  isLoading = false,
}) => {
  // Build dynamic agent filters from listings (Sanity-powered)
  const allAgentNames = useMemo(
    () =>
      Array.from(
        new Set(
          listings.flatMap(
            (l) => l.agents?.map((a) => a.title).filter(Boolean) ?? [],
          ),
        ),
      ),
    [listings],
  );

  const allPropertyTypes = useMemo(
    () => Array.from(new Set(listings.map((l) => l.propertyType))),
    [listings],
  );

  const [sortType, setSortType] = useState<SortListings>("mostExpensive");

  const [selectedAgents, setSelectedAgents] = useState<Map<string, boolean>>(
    () =>
      new Map<string, boolean>([
        ["All", true],
        ...allAgentNames.map<[string, boolean]>((name) => [name, false]),
      ]),
  );

  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<
    Map<string, boolean>
  >(
    () =>
      new Map<string, boolean>([
        ["All", true],
        ...allPropertyTypes.map<[string, boolean]>((value) => [value, false]),
      ]),
  );

  // Recompute filtered/sorted listings when inputs change
  const filteredListings = useMemo(() => {
    const sorted = sortListings(listings, sortType);
    const byAgent = filterBySelectedAgents(sorted, selectedAgents);
    return filterByPropertyType(byAgent, selectedPropertyTypes);
  }, [listings, sortType, selectedAgents, selectedPropertyTypes]);

  const pins = useMemo(
    () => convertListingsToPins(filteredListings),
    [filteredListings],
  );

  // Handlers to pass into ListingFilter
  const handleToggleAgent = (name: string) => {
    setSelectedAgents((prev) => {
      const next = new Map(prev);

      if (name === "All") {
        // Reset all, only "All" is true
        next.forEach((_, key) => next.set(key, key === "All"));
      } else {
        next.set("All", false);
        next.set(name, !next.get(name));
        // If all false, fallback to All=true
        const anySelected = [...next.entries()].some(
          ([key, value]) => key !== "All" && value,
        );
        if (!anySelected) {
          next.forEach((_, key) => next.set(key, key === "All"));
        }
      }

      return next;
    });
  };

  const handleTogglePropertyType = (value: string) => {
    setSelectedPropertyTypes((prev) => {
      const next = new Map(prev);

      if (value === "All") {
        next.forEach((_, key) => next.set(key, key === "All"));
      } else {
        next.set("All", false);
        next.set(value, !next.get(value));
        const anySelected = [...next.entries()].some(
          ([key, v]) => key !== "All" && v,
        );
        if (!anySelected) {
          next.forEach((_, key) => next.set(key, key === "All"));
        }
      }

      return next;
    });
  };

  return (
    <div className="global-margin-x global-margin-y overflow-x-hidden">
      {displayHeader === "yes" ? (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 items-center justify-between mb-16">
          <h2>Current Listings</h2>
          <a
            href={ListingLinks.relLink}
            className="btn-primary hidden lg:block"
          >
            VIEW ALL LISTINGS
          </a>
        </div>
      ) : (
        <div className="mb-16">
          <h2>Our Listings</h2>
        </div>
      )}

      <ListingFilter
        sortType={sortType}
        setSortType={setSortType}
        agents={selectedAgents}
        onToggleAgent={handleToggleAgent}
        propertyTypes={selectedPropertyTypes}
        onTogglePropertyType={handleTogglePropertyType}
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-4">
        {/* Listing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 overflow-y-scroll h-[44rem]">
          {filteredListings.map((l, i) => (
            <div key={l._id || `${l.title}-${i}`} className="w-full">
              <ListingCard doc={l} isLoading={isLoading} />
            </div>
          ))}

          {filteredListings.length === 0 && (
            <p className="text-center col-span-full py-8 font-semibold">
              No listings match the selected filters.
            </p>
          )}
        </div>

        {/* Map */}
        <div>
          <GoogleMap pins={pins} pinType="listing" />
        </div>
      </div>

      {displayHeader === "yes" && (
        <div className="lg:hidden flex flex-col gap-8 lg:gap-0 items-center my-8">
          <a href={ListingLinks.relLink} className="btn-primary">
            VIEW ALL LISTINGS
          </a>
        </div>
      )}
    </div>
  );
};

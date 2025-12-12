// ListingFilter.tsx
import React from "react";
import type { SortListings } from "@/globals/types/listing";
import { formatPropertyType } from "@/lib/propertyTypeFormatter"; // or wherever this lives

const sortOptions: { name: string; sort: SortListings }[] = [
  { name: "Most Expensive", sort: "mostExpensive" },
  { name: "Least Expensive", sort: "leastExpensive" },
  { name: "Newest", sort: "newest" },
];

type Props = {
  sortType: SortListings;
  setSortType: React.Dispatch<React.SetStateAction<SortListings>>;
  agents: Map<string, boolean>;
  onToggleAgent: (name: string) => void;
  propertyTypes: Map<string, boolean>;
  onTogglePropertyType: (value: string) => void;
};

export const ListingFilter: React.FC<Props> = ({
  sortType,
  setSortType,
  agents,
  onToggleAgent,
  propertyTypes,
  onTogglePropertyType,
}) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortListings;
    setSortType(value);
  };

  const agentOptions = Array.from(agents.entries()).map(([name, selected]) => ({
    label: name,
    value: name,
    selected,
  }));

  const propertyTypeOptions = Array.from(propertyTypes.entries()).map(
    ([value, selected]) => ({
      label: formatPropertyType(value),
      value,
      selected,
    }),
  );

  return (
    <div className="mb-6 border-t border-gray-200 py-4">
      <div className="flex flex-col gap-4 items-start sm:flex-row sm:items-center sm:justify-between">
        {/* Sort */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Sort by:</span>
          <select
            className="text-sm rounded-md border border-gray-300 bg-white px-2 py-1 focus:border-wwRed focus:outline-none focus:ring-1 focus:ring-wwRed"
            value={sortType}
            onChange={handleSortChange}
          >
            {sortOptions.map((option) => (
              <option key={option.sort} value={option.sort}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-6 text-sm">
          {/* Agents */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-gray-700">Agent:</span>
            <div className="flex flex-wrap gap-2">
              {agentOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onToggleAgent(option.value)}
                  className={
                    "rounded-full border px-3 py-1 transition text-xs sm:text-sm " +
                    (option.selected
                      ? "border-wwRed bg-wwRed text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-wwRed")
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Property types */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-gray-700">Property Type:</span>
            <div className="flex flex-wrap gap-2">
              {propertyTypeOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onTogglePropertyType(option.value)}
                  className={
                    "rounded-full border px-3 py-1 transition text-xs sm:text-sm " +
                    (option.selected
                      ? "border-wwRed bg-wwRed text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-wwRed")
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

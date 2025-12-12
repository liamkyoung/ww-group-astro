import React from "react";

import { formatDollarAmount } from "@/lib/formatDollarAmount";
import {
  formatListingType,
  formatPaymentFrequency,
} from "@/lib/propertyTypeFormatter";

import type { ListingPreview } from "@/globals/types/listing";
import { ListingLinks } from "@/globals/navigation/listings/listings";
import { Skeleton } from "../ui/skeleton";
import { urlFor } from "@/lib/sanityImage";

type ListingCardProps = {
  className?: string;
  title?: string;
  doc?: ListingPreview;
  isLoading?: boolean;
};

export const ListingCard: React.FC<ListingCardProps> = ({
  title: titleOverride,
  doc,
  className,
  isLoading = false,
}) => {
  // Skeleton state: loading or no data at all
  if (isLoading || !doc) {
    return (
      <div className={`flex flex-col space-y-3 ${className ?? ""}`}>
        <Skeleton className="size-64 rounded-md" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
        </div>
      </div>
    );
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
    paymentFrequency,
  } = doc;

  const titleToUse = titleOverride || title;
  const href = slug ? `${ListingLinks.relLink}/${slug}` : ListingLinks.relLink;

  // Build “additional info” line(s)
  const additionalInfo = [
    sqFt != null ? `${sqFt} sq ft` : "",
    sqFtLot != null ? `${sqFtLot} acres` : "",
    sqFtLand != null ? `${sqFtLand} sq ft land` : "",
    bedCount != null ? `${bedCount} bed` : "",
    bathroomCount != null ? `${bathroomCount} bath` : "",
  ]
    .filter((info) => info !== "")
    .slice(0, 3); // Only take first 3 items

  const accentText = isPriceNegotiable
    ? "Negotiable"
    : price != null
      ? formatDollarAmount(price.toString())
      : undefined;

  const hasCoverImage = coverImage && typeof coverImage !== "string";

  return (
    <div className={className}>
      <a href={href}>
        <div className="relative">
          {/* Price / type badge */}
          {(accentText || listingType) && (
            <div className="bg-gray-50 absolute -bottom-1 -left-1 p-3 rounded-md">
              {accentText && (
                <span className="text-wwRed font-bold">
                  {accentText}{" "}
                  {formatPaymentFrequency(paymentFrequency as string)}
                </span>
              )}
              {listingType && (
                <span className="text-wwBlack font-medium">
                  {" "}
                  | {formatListingType(listingType)}
                </span>
              )}
            </div>
          )}

          {/* Image */}
          {!hasCoverImage && (
            <div className="mx-auto flex h-64 w-full items-center justify-center rounded-md bg-gray-100 text-sm text-gray-500">
              No image available
            </div>
          )}
          {hasCoverImage && (
            <img
              className="mx-auto rounded-md h-64 object-cover"
              src={urlFor(coverImage).url()}
            />
          )}
        </div>
      </a>

      {/* Text content */}
      <div>
        {titleToUse && (
          <h5 className="my-2 text-center lg:text-left">{titleToUse}</h5>
        )}
        <div className="mx-auto">
          <div className="flex flex-col gap-2">
            {address && (
              <div className="inline-flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-wwRed"
                >
                  <path
                    fill-rule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p className="text-sm font-bold">{address}</p>
              </div>
            )}

            {additionalInfo && additionalInfo.length > 0 && (
              <div className="inline-flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-5 text-wwRed"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm font-bold">
                  {additionalInfo.map(
                    (info, i) =>
                      info + (i !== additionalInfo.length - 1 ? ", " : ""),
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

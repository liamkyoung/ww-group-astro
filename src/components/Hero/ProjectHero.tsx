import React, { useEffect, useState } from "react";

import { DefaultSocials } from "@/globals/general";
import { GoogleMap } from "@/components/GoogleMap/GoogleMap";
import type { GoogleMapPin } from "@/globals/types/listing";
import { ContactLink } from "@/globals/navigation/contact/contact";

type Props = {
  pins: GoogleMapPin[];
};
export const ProjectHero = ({ pins }: Props) => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-16 lg:mt-16">
      <div className="global-margin-x sm:mx-0 my-16 lg:my-auto pl-0 lg:pl-16 sm:pl-10 md:pl-20 xl:pl-36">
        <h1 className="mb-10">Featured Deals</h1>
        <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-normal w-5/6 md:mx-0 items-start md:items-center">
          <div>
            <a
              href={ContactLink.relLink}
              className="btn-primary whitespace-nowrap block max-w-min"
            >
              SEND US A MESSAGE
            </a>
          </div>
          <div className="flex items-center gap-2 border-t-2 md:border-t-0 md:border-l-2 border-wwRed md:pl-8 pt-2 w-48">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 text-wwRed"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Or call us at
              <br /> <b>{DefaultSocials.phoneNumber}</b>
            </span>
          </div>
        </div>
      </div>

      <GoogleMap pins={pins} pinType="project" />
    </div>
  );
};

import React, { useEffect } from "react";
import "./style.css";

type Props = {
  displayHeader?: "yes" | "no";
};

const LOGOS: { src: string; alt: string }[] = [
  {
    src: "src/assets/logos/christ-umc-logo.png",
    alt: "Christ United Methodist Church logo",
  },
  {
    src: "src/assets/logos/city-st-petersburg-logo.png",
    alt: "City of St. Petersburg logo",
  },
  {
    src: "src/assets/logos/clear-ph-logo.png",
    alt: "ClearPH branding agency logo",
  },
  { src: "src/assets/logos/datz-logo.png", alt: "Datz Restaurant Group logo" },
  {
    src: "src/assets/logos/everglades-university-logo.png",
    alt: "Everglades University logo",
  },
  {
    src: "src/assets/logos/feldmans-equities-logo.png",
    alt: "Feldman Equities commercial real estate logo",
  },
  {
    src: "src/assets/logos/fulmer-leroy-albee-logo.webp",
    alt: "Fulmer Leroy Albee law firm logo",
  },
  {
    src: "src/assets/logos/good-intentions-logo.png",
    alt: "Good Intentions vegan restaurant logo",
  },
  {
    src: "src/assets/logos/hp-capital-group-logo.png",
    alt: "HP Capital Group real estate logo",
  },
  {
    src: "src/assets/logos/intermezzo-logo.png",
    alt: "Intermezzo Coffee & Cocktails logo",
  },
  {
    src: "src/assets/logos/keiser-university-logo.png",
    alt: "Keiser University logo",
  },
  {
    src: "src/assets/logos/kw-st-pete-logo.png",
    alt: "Keller Williams St. Pete Real Estate logo",
  },
  { src: "src/assets/logos/lids-logo.svg", alt: "Lids retail logo" },
  {
    src: "src/assets/logos/paradeco-logo.webp",
    alt: "Paradeco Coffee Roasters logo",
  },
  {
    src: "src/assets/logos/pmg-logo.png",
    alt: "PMG real estate and development logo",
  },
  {
    src: "src/assets/logos/puregreen-logo.png",
    alt: "Pure Green juice bar logo",
  },
  {
    src: "src/assets/logos/related-logo.png",
    alt: "Related Group real estate development logo",
  },
  {
    src: "src/assets/logos/skyward-living-logo.png",
    alt: "Skyward Living real estate logo",
  },
  {
    src: "src/assets/logos/st-pete-athletic.png",
    alt: "St. Pete Athletic logo",
  },
  {
    src: "src/assets/logos/the-bank-of-tampa.png",
    alt: "The Bank of Tampa logo",
  },
  {
    src: "src/assets/logos/the-denunzio-group-logo.png",
    alt: "The Denunzio Group logo",
  },
  {
    src: "src/assets/logos/the-floridian-logo.png",
    alt: "The Floridian social club logo",
  },
  {
    src: "src/assets/logos/waterview-marinas-logo.png",
    alt: "Waterview Marinas logo",
  },
  {
    src: "src/assets/logos/belpointe-logo.png",
    alt: "Belpointe real estate investment logo",
  },
];

export const CompanyGallery: React.FC<Props> = ({ displayHeader = "no" }) => {
  useEffect(() => {
    const scrollers = document.querySelectorAll<HTMLElement>(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");

        const scrollerInner =
          scroller.querySelector<HTMLElement>(".scroller__inner");
        if (!scrollerInner) return;

        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className="global-margin-y">
      {displayHeader === "yes" && (
        <h2 className="text-center mb-12">Companies We&apos;ve Helped</h2>
      )}

      <div className="global-margin-x">
        <div className="scroller" data-direction="left" data-speed="slow">
          <div className="scroller__inner">
            {LOGOS.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-24 w-auto object-contain mx-16"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyGallery;

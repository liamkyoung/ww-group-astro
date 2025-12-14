import React, { useEffect } from "react";
import "./style.css";
import christUMCLogo from "src/assets/logos/christ-umc-logo.png";
import cityStPeteLogo from "src/assets/logos/city-st-petersburg-logo.png";
import clearPHLogo from "src/assets/logos/clear-ph-logo.png";
import datzLogo from "src/assets/logos/datz-logo.png";
import evergladesLogo from "src/assets/logos/everglades-university-logo.png";
import feldmansLogo from "src/assets/logos/feldmans-equities-logo.png";
import fulmerLeroyLogo from "src/assets/logos/Fulmer-LeRoy-Albee-logo.webp";
import goodIntentionsLogo from "src/assets/logos/good-intentions-logo.png";
import hpCapitalLogo from "src/assets/logos/hp-capital-group-logo.png";
import intermezzoLogo from "src/assets/logos/intermezzo-logo.png";
import keiserLogo from "src/assets/logos/keiser-university-logo.png";
import kwStPeteLogo from "src/assets/logos/kw-st-pete-logo.png";
import lidsLogo from "src/assets/logos/lids-logo.svg";
import paradecoLogo from "src/assets/logos/paradeco-logo.webp";
import pmgLogo from "src/assets/logos/pmg-logo.png";
import pureGreenLogo from "src/assets/logos/puregreen-logo.png";
import relatedLogo from "src/assets/logos/related-logo.png";
import skywardLivingLogo from "src/assets/logos/skyward-living-logo.png";
import stPeteAthleticLogo from "src/assets/logos/st-pete-athletic.png";
import bankOfTampaLogo from "src/assets/logos/the-bank-of-tampa.png";
import denunzioLogo from "src/assets/logos/the-denunzio-group-logo.png";
import floridianLogo from "src/assets/logos/the-floridian-logo.png";
import waterviewLogo from "src/assets/logos/waterview-marinas-logo.png";
import belpointeLogo from "src/assets/logos/belpointe-logo.png";

type Props = {
  displayHeader?: "yes" | "no";
};

export const LOGOS = [
  { src: christUMCLogo, alt: "Christ United Methodist Church logo" },
  { src: cityStPeteLogo, alt: "City of St. Petersburg logo" },
  { src: clearPHLogo, alt: "ClearPH branding agency logo" },
  { src: datzLogo, alt: "Datz Restaurant Group logo" },
  { src: evergladesLogo, alt: "Everglades University logo" },
  { src: feldmansLogo, alt: "Feldman Equities commercial real estate logo" },
  { src: fulmerLeroyLogo, alt: "Fulmer Leroy Albee law firm logo" },
  { src: goodIntentionsLogo, alt: "Good Intentions vegan restaurant logo" },
  { src: hpCapitalLogo, alt: "HP Capital Group real estate logo" },
  { src: intermezzoLogo, alt: "Intermezzo Coffee & Cocktails logo" },
  { src: keiserLogo, alt: "Keiser University logo" },
  { src: kwStPeteLogo, alt: "Keller Williams St. Pete Real Estate logo" },
  { src: lidsLogo, alt: "Lids retail logo" },
  { src: paradecoLogo, alt: "Paradeco Coffee Roasters logo" },
  { src: pmgLogo, alt: "PMG real estate and development logo" },
  { src: pureGreenLogo, alt: "Pure Green juice bar logo" },
  { src: relatedLogo, alt: "Related Group real estate development logo" },
  { src: skywardLivingLogo, alt: "Skyward Living real estate logo" },
  { src: stPeteAthleticLogo, alt: "St. Pete Athletic logo" },
  { src: bankOfTampaLogo, alt: "The Bank of Tampa logo" },
  { src: denunzioLogo, alt: "The Denunzio Group logo" },
  { src: floridianLogo, alt: "The Floridian social club logo" },
  { src: waterviewLogo, alt: "Waterview Marinas logo" },
  { src: belpointeLogo, alt: "Belpointe real estate investment logo" },
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

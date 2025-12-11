import type { NavGrouping } from "@/globals/viewmodels";
import { ProjectLinks } from "../projects/projects";

export const TeamLinks: NavGrouping = {
  title: "Our Team",
  relLink: "/team",
};

export const InvolvementLinks: NavGrouping = {
  title: "Community Involvement",
  relLink: "/involvement",
};

export const AboutLinks: NavGrouping = {
  title: "About Us",
  relLink: "/team",
  subNavigation: [TeamLinks, ProjectLinks, InvolvementLinks],
};

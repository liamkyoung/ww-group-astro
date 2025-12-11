import type { NavGrouping } from "@/globals/viewmodels";

export const NewsLink: NavGrouping = {
  title: "News",
  relLink: "/news",
};

export const CommunityResourcesLink: NavGrouping = {
  title: "Community Resources",
  relLink: "/community-resources",
};

export const CommunityLinks: NavGrouping = {
  title: "Community",
  relLink: "/news",
  subNavigation: [NewsLink, CommunityResourcesLink],
};

import KWLogo from "../../assets/branding/kw_logo.png";
import Logo from "../../assets/branding/logo.svg";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { InternalLinks } from "@/globals/navigation";
import { ContactLink } from "@/globals/navigation/contact/contact";

function MobileHeader({}) {
  return (
    <nav className="flex justify-between lg:hidden global-margin-x my-5">
      <a href="/" className="flex items-center gap-6">
        <img src={Logo.src} alt="WW-Logo" className="h-12 w-auto" />
        <img src={KWLogo.src} alt="KW-Logo" className="h-7 w-auto" />
      </a>

      <Sheet>
        <SheetTrigger>
          <div className="p-2 ring-1 ring-wwRed rounded-md cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-8 text-wwRed"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </SheetTrigger>
        <SheetContent side={"left"} className="bg-white">
          <SheetHeader>
            <SheetTitle>
              <a href="/" className="flex items-center gap-6">
                <img src={Logo.src} alt="WW-Logo" className="h-12 w-auto" />
                <img src={KWLogo.src} alt="KW-Logo" className="h-7 w-auto" />
              </a>
            </SheetTitle>
            <SheetDescription>
              {InternalLinks.map((navGroup) => (
                <div className="my-4 text-left" key={navGroup.title}>
                  <SheetClose asChild>
                    <a href={navGroup.relLink}>
                      <p className="text-xl hover:text-gray-500 cursor-pointer">
                        {navGroup.title}
                      </p>
                    </a>
                  </SheetClose>

                  {navGroup.subNavigation?.map((subNav) => (
                    <SheetClose asChild key={navGroup.title}>
                      <a href={subNav.relLink}>
                        <p className="mx-4 hover:text-gray-500 cursor-pointer text-left">
                          {subNav.title}
                        </p>
                      </a>
                    </SheetClose>
                  ))}
                </div>
              ))}

              <div className="pt-12 justify-self-start">
                <SheetClose asChild>
                  <a className="btn-primary" href={ContactLink.relLink}>
                    CONTACT
                  </a>
                </SheetClose>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileHeader;

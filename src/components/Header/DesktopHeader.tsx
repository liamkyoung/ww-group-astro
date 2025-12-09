import { Image } from 'astro:assets'
import KWLogo from '../../assets/branding/kw_logo.png'
import Logo from '../../assets/branding/logo.svg'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { InternalLinks } from '@/globals/navigation'
import { ContactLink } from '@/globals/navigation/contact/contact'

function DesktopHeader({}) {
  return (
    <nav className="font-semibold items-center justify-between my-5 hidden lg:flex global-margin-x">
      <a href="/" className="flex items-center gap-6">
        <img src={Logo.src} alt="WW-Logo" className="h-14 w-auto" />
        <img src={KWLogo.src} alt="KW-Logo" className="h-9 w-auto" />
      </a>

      <div className="flex items-center space-x-8">
        {InternalLinks.map((navGroup) => {
          if (navGroup.subNavigation) {
            return (
              <DropdownMenu key={navGroup.title}>
                <DropdownMenuTrigger asChild>
                  <p className="hover:text-gray-500 cursor-pointer">
                    {navGroup.title}
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuGroup>
                    {navGroup.subNavigation.map((subNav) => (
                      <a href={subNav.relLink} key={subNav.title}>
                        <DropdownMenuItem className="hover:cursor-pointer">
                          {subNav.title}
                        </DropdownMenuItem>
                      </a>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            )
          } else {
            return (
              <a href={navGroup.relLink} key={navGroup.title}>
                <p className="hover:text-gray-500">{navGroup.title}</p>
              </a>
            )
          }
        })}
      </div>
      <a className="btn-primary" href={ContactLink.relLink}>
        CONTACT
      </a>
    </nav>
  )
}

export default DesktopHeader

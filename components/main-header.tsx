import { DarkModeToggle } from "./dark-mode-btn";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <header className=" p-4">
      <NavigationMenu className="w-10/12 flex justify-between max-w-none mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink href="/" className="text-xl font-bold">
              DailyNews
            </NavLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavLink href="/" className={navigationMenuTriggerStyle()}>
              Home
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink href="/news" className={navigationMenuTriggerStyle()}>
              News
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavLink href="/archive" className={navigationMenuTriggerStyle()}>
              Archive
            </NavLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <DarkModeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default MainHeader;

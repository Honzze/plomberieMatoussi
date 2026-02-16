import Link from "next/link"
import Image from "next/image";
// import {ModeToggle} from "@/src/components/toggle-theme";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export const Navbar = () => {
    return (
        <nav
            className="fixed top-0 mx-auto inset-x-0 flex justify-center overflow-visible bg-background text-foreground z-50 py-4 px-2 ">
            <div className="flex items-center justify-between mx-auto max-w-7xl container px-2 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    <Image src="/onlyLogo.png"
                           width={730}
                           height={500}
                           alt="logo"
                           className="h-20 w-32"

                    />
                </div>
                <div className="flex items-center mx-auto justify-between sm:items-stretch ">
                    <div className="hidden sm:ml-6 sm:block relative overflow-visible">
                        <div className="flex items-center space-x-4">
                            <Link
                                href="#"
                                className="rounded-md px-3 py-2 text-lg font-normal hover:bg-primary-foreground/10 "
                            >
                                PLOMBERIE
                            </Link>
                            <Link
                                href="#"
                                className="rounded-md px-3 py-2 text-lg font-normal  hover:bg-primary-foreground/10"
                            >
                                DEPANNAGES
                            </Link>
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger
                                            className="rounded-md px-3 py-2 text-lg font-normal  hover:bg-primary-foreground/10">SERVICES</NavigationMenuTrigger>
                                        <NavigationMenuContent className="bg-background">
                                            <NavigationMenuLink
                                                className="rounded-md px-3 py-2 text-base font-normal   hover:bg-primary-foreground/10">CARRELAGE</NavigationMenuLink>
                                            <NavigationMenuLink
                                                className="rounded-md px-3 py-2 text-base font-normal  hover:bg-primary-foreground/10">ELECTRICITER</NavigationMenuLink>
                                            <NavigationMenuLink
                                                className="rounded-md px-3 py-2 text-base font-normal  hover:bg-primary-foreground/10">DOMOTIQUE</NavigationMenuLink>
                                            <NavigationMenuLink
                                                className="rounded-md px-3 py-2 text-base font-normal  hover:bg-primary-foreground/10">MACONNERIE</NavigationMenuLink>

                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute border-xs inset-y-0 right-0 flex items-center mr-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                        className="border-2  px-4 py-2 text-lg font-normal  border-white-500 rounded-full" ><a href="tel:+33612345678">06.12.34.56.78</a>
                    </button>
                </div>
            </div>


        </nav>
    )
}

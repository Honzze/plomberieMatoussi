import Link from "next/link"
import Image from "next/image";
import {ModeToggle} from "@/src/components/toggle-theme";
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
            className="relative overflow-visible bg-secondary-foreground/5 py-2 px-2 my-4 mx-4 rounded-lg after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px ">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between ">

                    <div className="flex justify-center items-center">
                        <Image src="/SVGlogo.svg" width={730} height={500} alt="logo" className="h-20 w-32"/>
                    </div>
                    <div className="flex items-center justify-center sm:items-stretch ">
                        <div className="hidden sm:ml-6 sm:block relative overflow-visible">
                            <div className="flex items-center space-x-4">
                                <Link
                                    href="#"
                                    className="rounded-md text-foreground px-3 py-2 text-lg font-normal hover:bg-primary-foreground/10 "
                                >
                                    Plomberie
                                </Link>
                                <Link
                                    href="#"
                                    className="rounded-md text-foreground px-3 py-2 text-lg font-normal  hover:bg-primary-foreground/10"
                                >
                                    Dépannages
                                </Link>
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger
                                                className="rounded-md text-foreground px-3 py-2 text-lg font-normal  hover:bg-primary-foreground/10">Services</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <NavigationMenuLink
                                                    className="rounded-md text-foreground px-3 py-2 text-base font-normal  hover:bg-primary-foreground/10">Carrelage</NavigationMenuLink>
                                                <NavigationMenuLink
                                                    className="rounded-md text-foreground px-3 py-2 text-base font-normal  hover:bg-primary-foreground/10">Electricter</NavigationMenuLink>
                                                <NavigationMenuLink
                                                    className="rounded-md text-foreground px-3 py-2 text-base font-normal  hover:bg-primary-foreground/10">domotique</NavigationMenuLink>
                                                <NavigationMenuLink
                                                    className="rounded-md text-foreground px-3 py-2 text-base font-normal  hover:bg-primary-foreground/10">maconnerie</NavigationMenuLink>

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
                            className="border-2 text-foreground px-4 py-2 text-lg font-normal  border-white-500 rounded-full ">06.87.78.07.94
                        </button>
                    </div>
                </div>
            </div>


        </nav>
    )
}

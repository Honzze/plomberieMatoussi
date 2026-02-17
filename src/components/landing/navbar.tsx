import Link from "next/link"
import Image from "next/image";
import {Button} from "@/components/ui/button";
// import {ModeToggle} from "@/src/components/toggle-theme";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from "react";

export const Navbar = () => {
    return (
        <nav
            className="fixed top-0 mx-auto inset-x-0 flex flex-row justify-center overflow-visible bg-background text-foreground z-50 py-4 px-2 ">
            <div className="flex items-center justify-between mx-auto max-w-7xl container px-2 sm:px-6 lg:px-8">
                <div className="flex justify-center items-center">
                    <Image src="/onlyLogo.png"
                           width={730}
                           height={500}
                           alt="logo"
                           className="w-20 h-12 sm:h-20 "

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
                    className="flex flex-row items-center absolute inset-y-0 right-0  mr-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                        className="bg-primary text-amber-50 mt-6 px-6 py-4 text-lg font-medium rounded-3xl ml-2 "><a
                        href="tel:+33612345678">06.12.34.56.78</a>
                    </button>
                    <div className="block mx-2 mt-6 md:hidden ">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline"><Button variant="outline"> <Image className="w-8 h-auto"
                                                                                            width={512}
                                                                                            height={512}
                                                                                            src={"/menu.png"}
                                                                                            alt="Image de la carte"
                                /></Button></Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>Nous Contacter</DropdownMenuItem>
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger>Nos Services</DropdownMenuSubTrigger>
                                        <DropdownMenuPortal>
                                            <DropdownMenuSubContent>
                                                <DropdownMenuItem>Carrelage</DropdownMenuItem>
                                                <DropdownMenuItem>Isolation</DropdownMenuItem>
                                                <DropdownMenuSeparator/>
                                            </DropdownMenuSubContent>
                                        </DropdownMenuPortal>
                                    </DropdownMenuSub>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                </div>
            </div>


        </nav>
    )
}


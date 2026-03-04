import Link from "next/link";
import Image from "next/image";
import {Button} from "@/src/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import React from "react";

export const Navbar = () => {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* LOGO */}
                    <div className="flex shrink-0 items-center">
                        <Link href="/">
                            <Image
                                src="/onlyLogo.png"
                                width={120}
                                height={60}
                                alt="Matoussi Plomberie"
                                className="h-12 w-auto object-contain sm:h-16"
                            />
                        </Link>
                    </div>

                    {/* DESKTOP NAV */}
                    <div className="hidden lg:block">
                        <div className="flex items-center space-x-8">
                            <Link
                                href="/#services"
                                className="group relative text-sm font-bold tracking-wider text-slate-800 uppercase transition hover:text-primary"
                            >
                                NOS SERVICES
                                <span
                                    className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full"/>
                            </Link>
                            <Link
                                href="mailto:matoussiplomberiemultiservices@gmail.com"
                                className="group relative text-sm font-bold tracking-wider text-slate-800 uppercase transition hover:text-primary"
                            >
                                NOUS CONTACTER
                                <span
                                    className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full"/>
                            </Link>

                            {/*
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent text-sm font-bold tracking-wider text-slate-700 uppercase hover:bg-transparent hover:text-blue-600 focus:bg-transparent">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[200px] gap-2 border border-slate-100 bg-white p-4 shadow-xl">
                        {[
                          "Carrelage",
                          "Électricité",
                          "Domotique",
                          "Maçonnerie",
                        ].map((item) => (
                          <li key={item}>
                            <NavigationMenuLink asChild>
                              <a
                                href="#"
                                className="block rounded-md p-2 text-xs font-semibold text-slate-600 uppercase hover:bg-slate-50 hover:text-blue-600"
                              >
                                {item}
                              </a>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              */}
                        </div>
                    </div>


                    {/* ACTIONS */}
                    <div className="flex items-center gap-4">
                        {/* Phone Button - more "solid" look */}
                        <Button
                            asChild
                            className="relative h-12 rounded-full border-t border-white/20 bg-primary px-12 font-bold tracking-tight text-white shadow-[0_4px_14px_0_rgba(106,149,196,0.39)] transition-all duration-200 hover:bg-[#5d89ba] active:translate-y-0"
                        >
                            <a href="tel:+33612345678" className="flex items-center gap-2">
                                {/* Use a cleaner SVG icon instead of the emoji for a pro look */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.28-2.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <span className="text-base">06 87 78 07 94</span>
                            </a>
                        </Button>

                        {/* Mobile Menu */}
                        <div className="lg:hidden">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="p-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-slate-700"
                                        >
                                            <line x1="4" x2="20" y1="12" y2="12"/>
                                            <line x1="4" x2="20" y1="6" y2="6"/>
                                            <line x1="4" x2="20" y1="18" y2="18"/>
                                        </svg>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="mt-2 w-56">
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem asChild className="font-bold tracking-tight uppercase">
                                            <a href="/#services">NOS SERVICES</a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="font-bold tracking-tight uppercase">
                                            <Link href="">
                                                NOUS CONTACTER
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

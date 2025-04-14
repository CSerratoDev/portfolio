'use client'
import React from "react";
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react";
import Link from "next/link";

export default function Header() {
    const [isOpen, setIsOpen] = React.useState(false); 
    const menuItems = ["Profile", "Proyects", "Achievements"];
    return (
        <div className="sticky top-0 z-50 shadow-md transition-all duration-500">
            <Navbar className="bg-zinc-100 text-[#252525] " onMenuOpenChange={setIsOpen}>
                    <NavbarContent className="container mx-auto flex justify-between items-center">
                        <NavbarMenuToggle aria-label={isOpen ? "Close menu" : "Open menu"} className="sm:hidden"/>
                            <NavbarBrand>
                                <p className="text-2xl text-[#364072] font-bold">cserrato.dev</p>
                            </NavbarBrand>
                    </NavbarContent>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem className="text-[#252525]">
                        <Link color="foreground" href="/proyects">
                            Proyects
                        </Link>
                    </NavbarItem>
                <NavbarItem className="text-[#364072]">
                    <Link aria-current="page" href="/profile">
                        Profile
                    </Link>
                </NavbarItem>
                    <NavbarItem className="text-[#252525]">
                        <Link color="foreground" href="/achievements">
                            Achievements
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <Button as={Link} className="bg-[#364072] text-white " href="/contact" variant="shadow">
                            Contact
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                    <NavbarMenu>
                        {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link className="w-full" color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                                href="#">
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                    </NavbarMenu>
            </Navbar>
        </div>
    );
}
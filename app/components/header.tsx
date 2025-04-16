'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/react";
import Link from "next/link";
import Contact from "../profile/Contact";
import SocialMedia from "../profile/SocialMedia";

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
                        <Link color="foreground" href="#projects">
                            Proyects
                        </Link>
                    </NavbarItem>
                <NavbarItem className="text-[#364072]">
                    <Link aria-current="page" href="#profile">
                        Profile
                    </Link>
                </NavbarItem>
                    <NavbarItem className="text-[#252525]">
                        <Link color="foreground" href="#achievements">
                            Achievements
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <div className="flex gap-4">
                            <SocialMedia/>
                            <Contact/>
                        </div>
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
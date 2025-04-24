import { FC } from "react";
import { LiaCopyrightSolid } from "react-icons/lia";

interface FooterProps {
    year?: number;
    owner?: string;
}

const Footer : FC<FooterProps> = ({
    year = new Date().getFullYear(),
    owner = "Alexis Serrato"
}) => {
    return (
        <footer className="h-auto flex bg-[#252525] text-white text-center py-4 justify-center">
                <p className="flex items-center gap-1">
                    {year} My website. All Rights Reserved {owner} 
                    <LiaCopyrightSolid/>
                </p>
        </footer>
    );
}
export default Footer;
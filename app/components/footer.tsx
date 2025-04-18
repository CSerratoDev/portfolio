import { LiaCopyrightSolid } from "react-icons/lia";

export default function Footer() {
    return(
        <footer className="h-auto flex bg-[#252525] text-white text-center py-4 justify-center">
                <p className="flex items-center gap-1">
                    2025 My website. All Rights Reserved Alexis Serrato 
                    <LiaCopyrightSolid/>
                </p>
        </footer>
    );
}
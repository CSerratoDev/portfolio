import { Button, Link } from "@heroui/react";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
export default function SocialMedia() {
    return (
        <> 
            <Button as={Link} href="https://github.com/CSerratoDev" variant="bordered" className="hover:bg-black hover:text-white text-md">
                <BsGithub/>
            </Button>
            <Button as={Link} href="https://www.linkedin.com/in/alexis-serrato/" variant="bordered" className="hover:bg-black hover:text-[#368DE5] text-md">
                <BsLinkedin/>
            </Button>
            <Button as={Link} href="https://www.youtube.com/@cserratodev" variant="bordered" className="hover:bg-black hover:text-[#FF0000] text-md">
                <BsYoutube/>
            </Button>
        </>
    )
}
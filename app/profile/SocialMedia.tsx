import { Button, Link } from "@heroui/react";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
export default function SocialMedia() {
    return (
        <> 
            <Button as={Link} href="https://github.com/CSerratoDev" target="_blank" rel="noopener noreferrer" variant="bordered" className="p-2 min-w-0 w-auto h-auto text-xl hover:bg-black hover:text-white">
                <BsGithub/>
            </Button>
            <Button as={Link} href="https://www.linkedin.com/in/alexis-serrato/" target="_blank" rel="noopener noreferrer" variant="bordered" className="p-2 min-w-0 w-auto h-auto text-xl hover:bg-black hover:text-white">
                <BsLinkedin/>
            </Button>
            <Button as={Link} href="https://www.youtube.com/@cserratodev" target="_blank" rel="noopener noreferrer" variant="bordered" className="p-2 min-w-0 w-auto h-auto text-xl hover:bg-black hover:text-white">
                <BsYoutube/>
            </Button>
        </>
    )
}
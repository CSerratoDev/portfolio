import { Button, Link } from "@heroui/react";
import { BsInstagram } from "react-icons/bs";
import { SiGoogledocs } from "react-icons/si";
import Avatar from "../common/avatar";
export default function AboutMe() {
    return (
        <section id="profile" className="text-[#252525] py-6 px-6">
            <div className="flex flex-col md:flex-row md:flex-wrap">  
                <div className="w-full md:w-2/3">
                    <h1 className="text-6xl font-semibold">Hello, I am Alexis!</h1>
                    <h5 className="text-3xl line-clamp-3">Software Engineer</h5>
                    <br/>
                    <p className="line-clamp-3">
                        Analyzing, learning and building is what I've been doing since I was 15. 
                        Developing software is just the fruit of continuing to do this consistently and I love it.
                    </p> 
                    <p>Obviously my family is a priority.</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        <Button 
                            color="danger" 
                            as={Link} 
                            href="https://www.instagram.com/alexxiis_sg/" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <BsInstagram/> Instagram
                        </Button>
                        <Button 
                            color="secondary" 
                            as={Link} 
                            href="https://drive.google.com/file/d/19nikSbfxDISUBqJD03dmcSIOmHW8rlbp/view?usp=sharing" 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <SiGoogledocs/>Resume
                        </Button>
                    </div>
                </div>
                <div className="w-full md:w-1/3 flex justify-center items-center mt-6 md:mt-0">
                    <div className="max-w-ls w-full">
                        <Avatar />
                    </div>
                </div>
            </div>
        </section>
    );
}

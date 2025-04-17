import { Button, Link } from "@heroui/react";
import { BsInstagram } from "react-icons/bs";
import { SiGoogledocs } from "react-icons/si";

export default function AboutMe() {
    return (
        <section id="profile" className="h-[750px] w-[580px] flex text-[#252525] p-6">
            <article>  
                <div className="h-auto w-auto flex-wrap justify-start">
                        <h1 className="text-6xl font-semibold">Hello, I am Alexis!</h1>
                        <h5 className="text-3xl line-clamp-3">Engineer Software</h5>
                    <br/><p className="line-clamp-3">Analyzing, learning and building is what I've been doing since I was 15. Developing software is just the fruit of continuing to do this consistently and I love it.</p> 
                    <p>Obviously my family is a priority.</p>
                    <div className="flex justify-end p-3 gap-3">
                        <Button color="danger" as={Link} href="https://www.instagram.com/alexxiis_sg/" target="_blank" rel="noopener noreferrer"><BsInstagram/> Instagram</Button>
                        <Button color="secondary" as={Link} href="https://drive.google.com/file/d/19nikSbfxDISUBqJD03dmcSIOmHW8rlbp/view?usp=sharing" target="_blank" rel="noopener noreferrer"><SiGoogledocs/>Resume</Button>
                    </div>
                </div>
            </article>
        </section>
    )
}
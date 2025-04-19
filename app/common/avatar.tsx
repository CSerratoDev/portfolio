import { Image } from "@heroui/react";

export default function Avatar() {
    return (

        <div className="flex justify-center content-center p-5">
        <Image
            alt="HeroUI hero Image"
            src="https://heroui.com/images/hero-card-complete.jpeg"
            height={300}
        />
        </div>
    )
}
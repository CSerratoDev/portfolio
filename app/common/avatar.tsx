import { Image } from "@heroui/react";

export default function Avatar() {
    return (

        <div className="flex justify-center">
        <Image
            alt="HeroUI hero Image"
            src="https://heroui.com/images/hero-card-complete.jpeg"
            height={400}
            width={700}
        />
        </div>
    )
}
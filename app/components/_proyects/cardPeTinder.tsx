import { Card, CardBody, CardHeader, Image } from "@heroui/react";

export default function CardPeTinder(){
    return (
        <Card className="py-4 bg-zinc-50 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:scale100 cursor-pointer">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny text-[#252525] uppercase font-bold">UserFlow</p>
                <small className="text-[#252525]">UI</small>
                <h4 className="font-bold text-large text-[#252525]">CatFinder</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="background"
                    className="object-cover"
                    src="https://heroui.com/images/hero-card-complete.jpeg"
                    width={280}
                />
            </CardBody>
        </Card>
    );
}
import { Card, CardBody, CardHeader, Image } from "@heroui/react";

export default function CardPeTinder(){
    return (
        <Card className="py-4 bg-black">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny text-white uppercase font-bold">Frontend</p>
                <small className="text-default-400">UI</small>
                <h4 className="font-bold text-large text-white">CatFinder</h4>
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
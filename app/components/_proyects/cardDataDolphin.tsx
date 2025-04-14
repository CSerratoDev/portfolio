import { Card, CardBody, CardHeader, Image } from "@heroui/react";
import Link from "next/link";

export default function CardDataDolphin(){
    return (
        <Link href={"https://devpost.com/software/zerotech?ref_content=user-portfolio&ref_feature=in_progress"}>
                <Card className="py-4 bg-zinc-50 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:scale100 hover:bg-[#4AFEBA] cursor-pointer">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny text-[#252525] uppercase font-bold">Hackathon</p>
                        <small className="text-[#252525]">AI</small>
                        <h4 className="font-bold text-large text-[#252525]">DataDolphin</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="background"
                            className="object-cover"
                            src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/003/342/911/datas/original.png"
                            width={280}
                        />
                    </CardBody>
                </Card>
        </Link>
    );
}
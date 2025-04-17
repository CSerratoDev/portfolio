"use client "
import { Chip } from "@heroui/react";
import CardPeTinder from "../components/_proyects/cardPeTinder";
import CardDataDolphin from "../components/_proyects/cardDataDolphin";

export default function Projects() {
    return (
        <section id="projects" className="h-auto text-[#252525] p-6">
            <h2 className="font-sans text-2xl font-semibold">Proyects</h2>
            <aside className="flex flex-wrap justify-center px-3 p-3 items-center">
            <div className="px-3">
                <CardPeTinder/>
                    <div className="text-[#252525] flex justify-center px-6 py-3 gap-2">
                        <Chip radius="md">Figma</Chip>
                        <Chip radius="md">Design</Chip>
                        <Chip radius="md">UserFlow</Chip>
                    </div>
            </div>
            <div className="px-3">
                <CardDataDolphin/>
                <div className="text-[#252525] flex justify-center px-6 py-3 gap-2">
                    <Chip radius="md">Hackathon</Chip>
                    <Chip radius="md">GeminiAI</Chip>
                    <Chip radius="md">Business</Chip>
                </div>
            </div>
            <div className="px-3">
                <CardDataDolphin/>
                    <div className="text-[#252525] flex justify-center px-6 py-3 gap-2">
                        <Chip radius="md">Project</Chip>
                        <Chip radius="md">Backend</Chip>
                        <Chip radius="md">API</Chip>
                    </div>
                </div>
            </aside>
        </section>
    )
}
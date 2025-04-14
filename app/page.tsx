import { Chip } from "@heroui/react";
import CardPeTinder from "./components/_proyects/cardPeTinder";
import Header from "./components/header";
import CardDataDolphin from "./components/_proyects/cardDataDolphin";

export default function Home() {
  return (
    <main>
      <Header/>
      <section className="flex text-[#252525] p-6">
        <h2>Welcome My Portfolio!</h2>
      </section>
      <aside className="flex justify-center px-6 p-6 items-center">
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
    </main>
  );
}

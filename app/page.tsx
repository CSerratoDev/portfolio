import { Chip } from "@heroui/react";
import CardPeTinder from "./components/_proyects/cardPeTinder";
import Header from "./components/header";

export default function Home() {
  return (
    <main>
      <Header/>
      <section className="flex text-black p-6">
        <h2>Welcome My Portfolio</h2>
      </section>
      <aside className="flex px-6 justify-between items-center">
          <CardPeTinder/>
      </aside>
      <div className="flex px-6 py-3 gap-2">
        <Chip radius="md">Figma</Chip>
        <Chip radius="md">Design</Chip>
        <Chip radius="md">UserFlow</Chip>
      </div>
    </main>
  );
}

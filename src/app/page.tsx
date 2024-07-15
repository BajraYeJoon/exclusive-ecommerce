import { Banner, Navbar } from "@/pages";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto">
      <Banner />
      <Navbar />
    </main>
  );
}

import HeroImage from "@/components/HeroImage";
import Nav from "@/components/Nav";
import CursorProvider from "@/components/ui/CursorProvider";

export default function Home() {
  return (
    <main className="bg-black-color">
      <CursorProvider>
        <Nav />
        <HeroImage />
      </CursorProvider>
    </main>
  );
}

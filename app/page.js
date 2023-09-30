import HeroImage from "@/components/HeroImage";
import Nav from "@/components/Nav";
import TextInformation from "@/components/TextInformation";
import CursorProvider from "@/components/ui/CursorProvider";

export default function Home() {
  return (
    <main className="bg-black-color">
      <CursorProvider>
        <Nav />
        <HeroImage />
        <TextInformation />
      </CursorProvider>
    </main>
  );
}

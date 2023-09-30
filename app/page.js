import ContactMe from "@/components/ContactMe";
import HeroImage from "@/components/HeroImage";
import LatestWorks from "@/components/LatestWorks";
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
        <LatestWorks />
        <ContactMe />
      </CursorProvider>
    </main>
  );
}

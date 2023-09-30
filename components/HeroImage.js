import Image from "next/image";
import BackgroundImage from "@/public/background.jpg";
export default function HeroImage() {
  return (
    <section className="hero-background-image relative flex min-h-screen items-center justify-between px-10 py-8 text-white">
      <h2 className="hero-section-text text-3xl font-bold leading-tight md:text-5xl lg:text-6xl">
        Strategic design
        <br />
        for the brands
        <br />
        of tomorrow.
      </h2>
      <Image src={BackgroundImage} alt="" width={400} height={800} />
    </section>
  );
}

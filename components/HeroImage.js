import Image from "next/image";
import BackgroundImage from "@/public/background.jpg";
export default function HeroImage() {
  return (
    <section className="hero-background-image relative flex flex-col items-center justify-between px-10 pt-8 text-white md:min-h-screen md:flex-row">
      <h2 className="hero-section-text text-center text-3xl font-bold leading-tight md:text-left md:text-5xl lg:text-6xl">
        Strategic design
        <br />
        for the brands
        <br />
        of tomorrow.
      </h2>
      <Image
        src={BackgroundImage}
        alt=""
        width={500}
        height={800}
        className="md:self-end"
      />
    </section>
  );
}

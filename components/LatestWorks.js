import Image from "next/image";
// importing images
import firstImage from "@/public/portfolio/1.jpg";
import secondImage from "@/public/portfolio/2.jpg";
import thirdImage from "@/public/portfolio/3.jpg";

export default function LatestWorks() {
  return (
    <section className="min-h-screen bg-black px-10 py-8 text-white">
      <h2 className="latest-works-title text-center text-5xl font-bold leading-relaxed sm:text-6xl sm:leading-none lg:text-7xl">
        LATEST WORKS
      </h2>
      <div className="portfolio-item relative mx-auto my-10 w-auto max-w-7xl after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:translate-y-[0.8em] after:bg-white after:opacity-70 sm:w-[50vw]">
        <Image
          src={firstImage}
          alt=""
          className="grayscale transition-all hover:grayscale-0"
          width={800}
          height={500}
        />
        <div className="portfolio-item-details my-5 flex w-full flex-col items-start justify-between gap-y-4 text-xs uppercase opacity-90 sm:flex-row sm:items-center">
          <div className="portfolio-item-categories">
            brand strategy, corporate identity, 3D/AR
          </div>
          <div className="portfolio-item-brand-type">Tech Start-Up</div>
        </div>
      </div>
      <div className="home-page-portfolio-grid mx-auto my-10 flex max-w-7xl flex-wrap items-center justify-between gap-14">
        <div className="portfolio-item relative mx-auto after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:translate-y-[0.8em] after:bg-white after:opacity-70">
          <Image
            src={secondImage}
            alt=""
            className="grayscale transition-all hover:grayscale-0"
            width={500}
            height={500}
          />
          <div className="portfolio-item-details mt-5 flex w-full flex-col items-start justify-between gap-y-4 text-xs uppercase opacity-90 sm:flex-row sm:items-center">
            <div className="portfolio-item-categories">branding & website</div>
            <div className="portfolio-item-brand-type">venture capital</div>
          </div>
        </div>
        <div className="portfolio-item relative mx-auto after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:translate-y-[0.8em] after:bg-white after:opacity-70">
          <Image
            src={thirdImage}
            alt=""
            className="grayscale transition-all hover:grayscale-0"
            width={500}
            height={500}
          />
          <div className="portfolio-item-details mt-5 flex w-full flex-col items-start justify-between gap-y-4 text-xs uppercase opacity-90 sm:flex-row sm:items-center">
            <div className="portfolio-item-categories">
              Brand Strategy & Corporate Identity
            </div>
            <div className="portfolio-item-brand-type">Digital consulting</div>
          </div>
        </div>
      </div>
    </section>
  );
}

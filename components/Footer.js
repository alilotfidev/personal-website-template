import Link from "next/link";
export default function Footer() {
  return (
    <footer className="min-h-screen bg-black px-10 py-8 text-white">
      <h4 className="my-6 text-2xl font-bold sm:text-4xl">
        Let's create something that matters!
      </h4>
      <h4 className="email inline-block text-sm font-bold underline decoration-white transition-all hover:decoration-transparent sm:text-lg">
        <Link href="mailto:hello@my-name.com">hello@my-name.com</Link>
      </h4>
      <div className="footer-devider mt-28 h-[1px] w-full bg-white opacity-70"></div>
      <div className="footer-links mt-5 flex flex-col  gap-10 text-sm font-bold sm:flex-row sm:items-center">
        <Link href="/" className="footer-link tracking-wider">
          LinkedIn
        </Link>
        <Link href="/" className="footer-link tracking-wider">
          Instagram
        </Link>
        <Link href="/" className="footer-link tracking-wider">
          Email
        </Link>
      </div>
      <div className="copyright mt-20 text-xs tracking-widest opacity-60">
        © Katrin Schroder . All rights reserved.
      </div>
    </footer>
  );
}

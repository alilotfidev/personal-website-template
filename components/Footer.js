import Link from "next/link";
export default function Footer() {
  return (
    <footer className="min-h-screen bg-black px-10 py-8 text-white">
      <h4 className="my-6 text-4xl font-bold">
        Let's create something that matters!
      </h4>
      <h4 className="email inline-block text-lg font-bold underline decoration-white transition-all hover:decoration-transparent">
        <Link href="mailto:hello@my-name.com">hello@my-name.com</Link>
      </h4>
      <div className="footer-devider mt-28 h-[1px] w-full bg-white opacity-70"></div>
      <div className="footer-links mt-5 flex items-center gap-10 text-sm font-bold">
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
        © Callum Glover . All rights reserved.
      </div>
    </footer>
  );
}

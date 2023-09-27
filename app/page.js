import Nav from "@/components/Nav";
import CursorProvider from "@/components/ui/CursorProvider";

export default function Home() {
  return (
    <main className="bg-neutral-950">
      <CursorProvider>
        <Nav />
      </CursorProvider>
    </main>
  );
}

export default function ContactMe() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-neutral-100 px-10 py-8 text-black">
      <div className="start-project-cta">
        <h4 className="text-center text-5xl font-bold">start your project.</h4>
        <div className="start-project-cta-buttons my-10 flex items-center justify-between gap-8">
          <button className="rounded-full border border-black px-8 py-5 transition-all duration-300 hover:bg-black hover:text-white hover:ease-in-out">
            process & expertise
          </button>
          <button className="rounded-full bg-black px-8 py-5 text-white transition-all duration-300 hover:ease-in-out">
            book a meeting
          </button>
        </div>
      </div>
    </section>
  );
}

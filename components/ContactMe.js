export default function ContactMe() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-neutral-100 px-10 py-8 text-black">
      <div className="start-project-cta">
        <h4 className="text-center text-4xl font-bold sm:text-5xl">
          start your project.
        </h4>
        <div className="start-project-cta-buttons my-10 flex flex-col-reverse items-center justify-between gap-8 sm:flex-row">
          <button className="rounded-full border border-black px-6 py-4 transition-all duration-300 hover:bg-black hover:text-white hover:ease-in-out sm:px-8 sm:py-5">
            process & expertise
          </button>
          <button className="rounded-full bg-black px-6 py-4 text-white transition-all duration-300 hover:ease-in-out sm:px-8 sm:py-5">
            book a meeting
          </button>
        </div>
      </div>
    </section>
  );
}

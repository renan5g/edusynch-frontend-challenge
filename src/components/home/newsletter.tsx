import { NewsletterForm } from "./newsletter-form";

export function Newsletter() {
  return (
    <section className="relative mt-28 bg-gradient-to-br from-primary-500 to-primary-700 py-20">
      <div className="relative z-10 m-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-8 md:flex-row lg:justify-between lg:px-20">
        <div>
          <h2 className="mb-1 text-xl font-bold text-gray-200">Lorem ipsum</h2>
          <h3 className="mb-6 text-5xl font-bold text-gray-100">Lorem ipsum</h3>
          <p className="mb-8 max-w-xl text-base leading-relaxed text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
            asperiores quam quas, hic similique fuga nam quisquam voluptatem
            cupiditate ducimus expedita sit illo laborum earum tempora
            praesentium doloribus ea quo!
          </p>
        </div>

        <NewsletterForm />
      </div>

      <div
        style={{ backgroundImage: "url(/waves.png)" }}
        className="absolute inset-0 z-0 h-full w-full -scale-x-100 bg-cover bg-center bg-no-repeat"
      />
    </section>
  );
}

import { Footer } from "~/components/footer";

import { About } from "~/components/home/about";
import { Header } from "~/components/home/header";
import { Hero } from "~/components/home/hero";
import { Newsletter } from "~/components/home/newsletter";
import { TopCryptos } from "~/components/home/top-cryptos";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <TopCryptos />
      <Newsletter />
      <Footer />
    </main>
  );
}

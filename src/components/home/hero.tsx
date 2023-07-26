import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "~/components/ui/button";

export function Hero() {
  return (
    <>
      <section className="mx-auto mt-20 flex max-w-7xl items-center justify-between px-8 xl:px-0">
        <div className="">
          <h2 className="mb-6 w-full max-w-xl text-5xl font-bold text-primary-500">
            Lorem ipsum dolor sit amet, consectetur
          </h2>

          <p className="mb-8 max-w-xl text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
            asperiores quam quas, hic similique fuga nam quisquam voluptatem
            cupiditate ducimus expedita sit illo laborum earum tempora
            praesentium doloribus ea quo!
          </p>

          <Button className="font-bold uppercase" rounded="full" size="lg">
            Sing up now <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <ul className="mt-20 flex gap-8">
            <li className="rounded-sm bg-primary-100 px-4 py-1 text-primary-500">
              Cryptos
            </li>
            <li className="rounded-sm bg-primary-100 px-4 py-1 text-primary-500">
              NFTs
            </li>
            <li className="rounded-sm bg-primary-100 px-4 py-1 text-primary-500">
              Games
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <Image
            src="/carousel.png"
            alt="happy woman standing isolated using tablet-computer"
            width={464}
            height={500}
          />
        </div>
      </section>

      <Image
        src="/waves.png"
        alt="waves"
        className="w-full object-cover"
        width={1000}
        height={500}
      />
    </>
  );
}

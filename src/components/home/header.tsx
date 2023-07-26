import Link from "next/link";
import { Logo } from "~/components/logo";
import { Button } from "~/components/ui/button";

export function Header() {
  return (
    <header className="mx-auto flex h-16 max-w-7xl items-center px-8 xl:px-0">
      <Logo />

      <nav className="ml-10  hidden items-center gap-6 md:flex">
        <Link className="text-sm " href="#about">
          About us
        </Link>
        <Link className="text-sm " href="#top-cryptos">
          Top Cryptos
        </Link>
      </nav>

      <div className="ml-auto hidden gap-2 md:flex ">
        <Button rounded="full" size="lg" variant="link">
          Sing In
        </Button>
        <Button rounded="full" size="lg">
          Sing Up
        </Button>
      </div>
    </header>
  );
}

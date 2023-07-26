import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="mx-auto flex h-16 max-w-7xl items-center justify-center px-8 md:justify-between xl:px-0">
      <p className="hidden md:block">
        Copyright © {new Date().getFullYear()} - All rights reserved
      </p>
      <Logo />
    </footer>
  );
}

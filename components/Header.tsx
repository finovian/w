import Image from "next/image";

export function Header() {
  return (
    <header>
      <nav className="flex items-center justify-center py-5" aria-label="Primary">
        <Image src="/assets/wealthup1.png" alt="WealthUp" width={120} height={40} />
      </nav>
    </header>
  );
}

import Link from "next/link";
import clsx from "clsx";

export function DonateWithWoovi() {
  return (
    <Link
      href="#"
      aria-label="Donate with Woovi"
      className={"rounded-lg transition-colors bg-green-700 text-white p-2"}
    >
      Doar com Woovi
    </Link>
  );
}

import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

export function DonateWithWoovi() {
  return (
    <Link
      href="#"
      aria-label="Donate with Woovi"
      className={
        "rounded-lg transition-colors bg-woovi-700 text-white p-2 flex items-center gap-x-2 font-medium hover:bg-woovi-900 text-lg"
      }
    >
      <Image
        src={"https://developers.woovi.com/img/icons/woovi.svg"}
        alt="Woovi"
        width={100}
        height={100}
        className="h-8 w-8"
      />
      Doar com Woovi
    </Link>
  );
}

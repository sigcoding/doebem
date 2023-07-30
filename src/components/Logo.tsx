import Image from "next/image";
import DoeBem from "../assets/images/logos/logo.png";

export function Logo(props: any) {
  return (
    <Image
      className="h-8 w-8"
      height={100}
      width={100}
      alt="DoeBem"
      src={DoeBem}
      {...props}
    />
  );
}

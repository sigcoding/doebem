import Image from "next/image";
import Link from "next/link";

import qrCode from "../assets/images/qr-code.svg";
import { Container } from "./Container";
import { NavLinks } from "./NavLinks";
import { TextField } from "./Fields";
import { Button } from "./Button";
import DoeBemSymbol from "../assets/images/logos/doebem-symbol.png";

function QrCodeBorder(props: any) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Image
                className="h-8 w-8"
                height={100}
                width={100}
                alt="DoeBem"
                src={DoeBemSymbol}
              />
              <div className="ml-4">
                <p className="text-base font-semibold">DoeBem</p>
                <p className="mt-1 text-sm">Doe com coração.</p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>
          <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500" />
              <Image src={qrCode} alt="" unoptimized />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-gray-900">
                <span className="absolute inset-0 sm:rounded-2xl" />
                Faça uma doação
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Escaneie o QR Code e faça uma doação de qualquer valor para a
                DoeBem.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            &copy; Copyright doebem {new Date().getFullYear()}. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

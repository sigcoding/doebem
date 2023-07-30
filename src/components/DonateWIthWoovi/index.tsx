"use client";

import { useState } from "react";
import { DonateValues } from "./DonateValues";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Image from "next/image";
import DonateOpts from "./DonateOpts";

type DonateWithWooviProps = {
  label: string
}
export function DonateWithWoovi({ label }: DonateWithWooviProps) {
  const [step, setStep] = useState<number>(0);
  const [selectedOrg, setSelectedOrg] = useState<string>("doebem");
  const [selectedValue, setSelectedValue] = useState<string>("0");
  const [customValue, setCustomValue] = useState<string>("0");

  return (
    <Dialog>
      <DialogTrigger className="p-2 rounded-lg bg-woovi-600 text-white flex items-center gap-x-2">
        <Image
          src={"https://developers.woovi.com/img/icons/woovi.svg"}
          alt="Woovi"
          width={100}
          height={100}
          className="h-8 w-8"
        />
        {label}
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Faça a sua doação usando Pix</DialogTitle>
          <DialogDescription>
            Doe com certeza. Você fará um impacto real com essa doação.
          </DialogDescription>
        </DialogHeader>

        {step === 0 && (
          <DonateValues
            setStep={setStep}
            config={{
              selectedValue: selectedValue,
              setSelectedValue: setSelectedValue,
              selectedOrg: selectedOrg,
              setSelectedOrg: setSelectedOrg,
              customValue: customValue,
              setCustomValue: setCustomValue,
            }}
          />
        )}
        {step === 1 && (
          <DonateOpts
            org={selectedOrg}
            value={Number(selectedValue) > 0 ? selectedValue : customValue}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

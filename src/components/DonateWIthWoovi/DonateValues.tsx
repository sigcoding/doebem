"use client";

import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SetStateAction } from "react";
import DonateItem from "../ui/donateItem";
import { TItem } from "../types";

const donateValues: TItem[] = [
  { value: 30 },
  { value: 50 },
  { value: 100 },
  { value: 250 },
  { value: 500 },
  { value: 1000 },
];

const orgs = [
  "Instituto Dara",
  "Hospital Caviver",
  "Renovatio",
  "Against Malaria Foundation",
  "GiveDirectly",
  "Schistosomiasis Control Initiative",
  "doebem",
];

type TDonateValuesProps = {
  setStep: React.Dispatch<SetStateAction<number>>;
  config: {
    setSelectedOrg: React.Dispatch<SetStateAction<string>>;
    setSelectedValue: React.Dispatch<SetStateAction<string>>;
    setCustomValue: React.Dispatch<SetStateAction<string>>;
    selectedOrg: string;
    selectedValue: string;
    customValue: string;
  };
};

export function DonateValues({ setStep, config }: TDonateValuesProps) {
  const handleChange = (value: string) => {
    config.setSelectedOrg(value);
  };

  const nextStep = () => {
    if (
      (config.selectedOrg && Number(config.selectedValue) > 0) ||
      Number(config.customValue) > 0
    ) {
      setStep(1);
    }
  };

  const changeCustomValue = (e: any) => {
    config.setSelectedValue("0");
    config.setCustomValue(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center mt-4">
        <span className="text-black">Escolha a sua instituição</span>
      </div>
      <div className="flex justify-center">
        <Select value={config.selectedOrg} onValueChange={handleChange}>
          <SelectTrigger className="w-56">
            <SelectValue placeholder="A critério da DoeBem" />
          </SelectTrigger>
          <SelectContent>
            {orgs.map((org, index) => (
              <SelectItem
                value={org.toLowerCase().replaceAll(" ", "-")}
                key={index}
              >
                {org}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-3 gap-4">
          {donateValues.map((item, index) => (
            <DonateItem
              item={item}
              setSelectedValue={config.setSelectedValue}
              setCustomValue={config.setCustomValue}
              selectedValue={config.selectedValue}
              customValue={config.customValue}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className="mt-2 flex items-center gap-x-2 justify-center">
        <span className="text-zinc-600">R$</span>

        <Input
          placeholder="Valor customizado (R$)"
          className="w-72"
          value={config.customValue}
          onChange={(e) => changeCustomValue(e)}
        />
      </div>

      <div className="flex justify-center mt-2">
        <button
          className="py-2 px-4 rounded-md bg-woovi-600 text-white flex items-center gap-x-2 text-lg hover:bg-woovi-700"
          onClick={nextStep}
        >
          Continuar &rarr;
        </button>
      </div>
    </>
  );
}

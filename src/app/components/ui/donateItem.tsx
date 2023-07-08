import { SetStateAction } from "react";
import { TItem } from "../types";

type TDonateItemProps = {
  item: TItem;
  setSelectedValue: React.Dispatch<SetStateAction<string>>;
  setCustomValue: React.Dispatch<SetStateAction<string>>;
  selectedValue: string;
  customValue: string;
};

export default function DonateItem({
  item,
  setSelectedValue,
  setCustomValue,
  selectedValue,
  customValue,
}: TDonateItemProps) {
  const toggleSelection = () => {
    setSelectedValue(item.value.toString());
    setCustomValue("");
  };

  if (
    Number(selectedValue) === item.value ||
    Number(customValue) === item.value
  ) {
    return (
      <button className="py-2 px-4 rounded-lg bg-woovi-600 text-white hover:border-zinc-500 transition-all duration-100">
        {item.value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </button>
    );
  }

  return (
    <button
      className="py-2 px-4 rounded-lg text-zinc-800 border border-zinc-300 hover:border-zinc-500 transition-all duration-100"
      onClick={toggleSelection}
    >
      {item.value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })}
    </button>
  );
}

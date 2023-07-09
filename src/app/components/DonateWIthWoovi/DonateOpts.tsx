import Image from "next/image";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { validateTaxID } from "../../../lib/validateTaxID";
import { validateCEP } from "@/lib/validateCEP";
import { TCharge, TCustomer } from "../types";

type TDonateOptsProps = {
  value: string;
  org: string;
};

type TCustomerResponse = {
  customer: TCustomer;
};

type TChargeResponse = {
  charge: TCharge;
  correlationID: string;
  brCode: string;
};

export default function DonateOpts({ value, org }: TDonateOptsProps) {
  const impactValue = Number(value) - (Number(value) * 0.8) / 100;
  const [operationalCosts, setOperationalCosts] = useState<number>(3079);
  const [ocCheck, setOCCheck] = useState<boolean>(false);
  const [NDA, setNDA] = useState<boolean>(false);
  const [qrCodeImage, setQrCodeImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const FormSchema = z.object({
    name: z.string().nonempty({ message: "O campo nome é obrigatório" }),
    email: z.string().email({ message: "O e-mail é inválido" }),
    taxID: z
      .string()
      .nonempty({ message: "O campo CPF é obrigatório" })
      .refine((data) => validateTaxID(data), {
        message: "CPF/CNPJ inválido",
        path: ["taxID"],
      }),
    CEP: z
      .string()
      .nonempty({ message: "O campo CEP é obrigatório" })
      .refine((data) => validateCEP(data), { message: "CEP inválido" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (data) => {
    setLoading(true);

    const payload = {
      org: org,
      value: value,
      taxID: data.taxID.replaceAll(".", "").replaceAll("-", ""),
      CEP: data.CEP.replaceAll("-", ""),
      name: data.name,
      email: data.email,
      operationalCosts: ocCheck,
      NDA: NDA,
    };

    const customerRequest = fetch(`${process.env.BASE_URL}/api/v1/customer`, {
      method: "POST",
      body: JSON.stringify({
        name: payload.name,
        taxID: payload.taxID,
        email: payload.email,
      }),
      headers: {
        Authorization: process.env.WOOVI_KEY ? process.env.WOOVI_KEY : "",
        "Content-Type": "application/json",
      },
    });

    const customer: Promise<TCustomerResponse> = (await customerRequest).json();

    const chargeRequest = fetch(`${process.env.BASE_URL}/api/v1/charge`, {
      method: "POST",
      body: JSON.stringify({
        correlationID: (await customer).customer.correlationID,
        value: Number(payload.value) * 100,
      }),
      headers: {
        Authorization: process.env.WOOVI_KEY ? process.env.WOOVI_KEY : "",
        "Content-Type": "application/json",
      },
    });

    const charge: Promise<TChargeResponse> = (await chargeRequest).json();

    setQrCodeImage((await charge).charge.qrCodeImage);

    setLoading(false);
  };

  return (
    <>
      <h3>
        Sua doação de{" "}
        <span className="font-bold text-woovi-600">
          {Number(value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>{" "}
        para a instituição{" "}
        <span className="font-bold text-woovi-600">{org}</span> terá um impacto
        efetivo de{" "}
        <span className="font-bold text-woovi-600">
          {impactValue.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </h3>

      {qrCodeImage === "" ? (
        <div className="mt-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="Nome completo" {...register("name")} />
              <Input placeholder="Email" {...register("email")} />

              {errors.name && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.name.message}
                </p>
              )}
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}

              <Input placeholder="CPF/CNPJ" {...register("taxID")} />
              <Input placeholder="CEP" {...register("CEP")} />

              {errors.taxID && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.taxID.message}
                </p>
              )}
              {errors.CEP && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.CEP.message}
                </p>
              )}
            </div>

            <div className="pb-4 pt-6">
              <div className="items-top flex space-x-2">
                <Checkbox id="aditional-costs" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="aditional-costs"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Eu gostaria de cobrir os custos operacionais da transação
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Adicional de{" "}
                    {(operationalCosts / 100).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
              </div>

              <div className="items-top flex space-x-2 mt-4">
                <Checkbox id="not-share-donate" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="not-share-donate"
                    className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Não divulgar meu nome/empresa publicamente
                  </label>
                </div>
              </div>

              <div className="items-top flex space-x-2 mt-4">
                <Checkbox id="privacy-warn" checked disabled />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="privacy-warn"
                    className="text-sm text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Li e concordo com esse{" "}
                    <a
                      href="https://doare.org/terms"
                      className="text-woovi-600"
                    >
                      Aviso de Privacidade
                    </a>
                    , e aceito receber comunicados desta organização.
                  </label>
                </div>
              </div>

              <div className="mt-4 flex justify-center">
                <button className="py-2 px-4 rounded-md bg-woovi-600 text-white flex items-center gap-x-2 text-lg hover:bg-woovi-700">
                  {loading ? (
                    <>
                      <Image
                        src={"https://developers.woovi.com/img/icons/woovi.svg"}
                        alt="Woovi"
                        width={100}
                        height={100}
                        className="h-6 w-6"
                      />
                      Carregando
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-width="2"
                        >
                          <path
                            stroke-dasharray="60"
                            stroke-dashoffset="60"
                            stroke-opacity=".3"
                            d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                          >
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              dur="1.3s"
                              values="60;0"
                            />
                          </path>
                          <path
                            stroke-dasharray="15"
                            stroke-dashoffset="15"
                            d="M12 3C16.9706 3 21 7.02944 21 12"
                          >
                            <animate
                              fill="freeze"
                              attributeName="stroke-dashoffset"
                              dur="0.3s"
                              values="15;0"
                            />
                            <animateTransform
                              attributeName="transform"
                              dur="1.5s"
                              repeatCount="indefinite"
                              type="rotate"
                              values="0 12 12;360 12 12"
                            />
                          </path>
                        </g>
                      </svg>
                    </>
                  ) : (
                    <>
                      <Image
                        src={"https://developers.woovi.com/img/icons/woovi.svg"}
                        alt="Woovi"
                        width={100}
                        height={100}
                        className="h-6 w-6"
                      />
                      Faça a sua doação
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <Image src={qrCodeImage} alt="QR Code" width={200} height={200} />
        </div>
      )}
    </>
  );
}

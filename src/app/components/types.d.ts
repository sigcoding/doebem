export type TItem = {
  value: number;
};

export type TCustomer = {
  name: tring;
  email: string;
  taxID: {
    taxID: string;
    type: string;
  };
  correlationID: string;
};

export type TCharge = {
  customer: string;
  value: number;
  identifier: string;
  correlationID: string;
  paymentLinkID: string;
  transactionID: string;
  status: string;
  additionalInfo: [];
  discount: number;
  valueWithDiscount: number;
  expiresDate: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  brCode: string;
  expiresIn: number;
  pixKey: string;
  paymentLinkUrl: string;
  qrCodeImage: string;
  globalID: string;
};

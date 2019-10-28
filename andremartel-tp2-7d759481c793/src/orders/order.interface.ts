export default interface Order {
  id?: number;
  createdAt?: object;
  packages: Package[];
  contact: Contact;
  carrier: Carrier;
}

interface Carrier {
  name: string;
  contact: Contact2;
}

interface Contact2 {
  firstname: string;
  lastname: string;
  phone: string;
  mail: string;
  headOfficeAddress: BillingAddress;
}

interface Contact {
  firstname: string;
  lastname: string;
  phone: string;
  mail: string;
  billingAddress: BillingAddress;
  deliveryAddress: BillingAddress;
}

interface BillingAddress {
  postalCode: string;
  city: string;
  addressLine1: string;
  addressLine2: string;
}

interface Package {
  length: Length;
  width: Length;
  height: Length;
  weight: Length;
  products: Product[];
}

interface Product {
  quantity: number;
  label: string;
  ean: string;
}

interface Length {
  unit: string;
  value: number;
}

import { ReactNode } from "react";

export type ProductType = {
  id?: number;
  identifier: number; // Code bare
  name: string;
  priceCost: number; // Prix d'achat
  priceSale: number; // Prix de vente null si des options sont disponible
  stockQuantity: number;
  minStockQuantity?: number;
  category: number | undefined;
  supplier: number | undefined;
  isActive: boolean;
  unit: string; // Type d'unité
  type: "standard" | "variable";
  image: string;
};

export type ProductOptionType = {
  id?: number;
  name: string;
  identifier: string; // Code bare
  ProductID: number;
  supplier: number | null;
  priceCost: number; // Prix d'achat
  priceSale: number; // Prix de vente
  stockQuantity: number;
};

export type ProductsWithOptionsType = ProductType & {
  options?: ProductOptionType[];
};

export type CategoryType = {
  id?: number;
  name: string;
  color?: string;
  isActive: boolean;
};

export type CustomerType = {
  id?: number;
  firstName: string;
  lastName: string;
  address: string;
  phone: number;
  mail?: string;
  isActive: boolean;
};

export type SupplierType = {
  id?: number;
  name: string;
  address: string;
  phone: number;
  isActive: boolean;
};

export type SaleType = {
  id?: number;
  receiptNo: string;
  date: string | Date;
  amount: number;
  discount: number;
  advance: number;
  itemsNumbers: number;
  customer?: number | null;
  status: "pending" | "paid" | "cancelled" | "refunded";
};

export type SaleItemType = {
  id?: number;
  saleId: number;
  ProductIdentifier: string;
  quantity: number;
  price: number;
  discount: 0;
};

export type SaleDetails = SaleType & {
  saleItems: CartType[];
};

export type SaleItemsDetails = SaleItemType & {
  product: ProductType;
};

export type StockReplenishmentType = {
  id?: number;
  supplier: number | null;
  totalAmountOrder: number;
  payAmount: number;
  status: string; // "pending" | "in progress" | "completed"
  date: Date;
};

export type StockReplenishmentItemsType = {
  id?: number;
  stockId: number;
  productIdentifier: string; // Identification du produit ou de l'option du produit
  initialtQuantity: number;
  newQuantity: number;
  priceCost: number; // Prix d'achat
  priceSale: number; // Prix de vente
  date: Date;
};

export type PriceHistoryType = {
  id?: number;
  productIdentifier: string; // Identification du produit ou de l'option du produit
  oldPriceCost: number; // Ancien Prix d'achat
  oldPriceSale: number; // Ancien Prix de vente
  newPriceCost: number; // Nouveau Prix d'achat
  newPriceSale: number; // Nouveau Prix de vente
  supplier: number | null; // Fournisseur
  date: Date;
};

export type CartType = {
  productName: string;
  productImage: string;
  productUnit: string;
  identifier: string;
  price: number;
  discount: number;
  quantity: number;
};

// Navigation Route
export type ProductParams = {
  Product: { pid: number };
};

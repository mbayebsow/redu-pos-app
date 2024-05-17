export type ProductType = {
  id?: number;
  identifier: number; // Code bare
  name: string;
  priceCost: number; // Prix d'achat
  priceSale: number; // Prix de vente null si des options sont disponible
  stockQuantity: number;
  minStockQuantity?: number;
  categoryId: number | undefined; // CategoryType relation
  supplierId: number | undefined; // PartenerType relation
  storeId: number; // StoreType relation
  isActive: boolean;
  unit: string; // Type d'unité
  type: "standard" | "variable";
  image: string;
};

export type ProductOptionType = {
  id?: number;
  name: string;
  identifier: string; // Code bare
  ProductId: number;
  supplierId: number | null; // PartenerType relation
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
  teamId: number;
  isActive: boolean;
};

export type PartenerType = {
  id?: number;
  name: string;
  address: string;
  phone: number;
  email?: string;
  teamId: number;
  isActive: boolean;
  type: "customer" | "supplier";
};

export type SaleType = {
  id?: number;
  receiptNo: string;
  date: string | Date;
  amount: number;
  discount: number;
  advance: number;
  itemNumbers: number;
  customerId?: number | null;
  storeId: number; // StoreType relation
  status: "pending" | "paid" | "cancelled" | "refunded";
};

export type SaleItemType = {
  id?: number;
  saleId: number;
  ProductId: number;
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
  supplierId: number | null; // PartenerType relation
  storeId: number; // StoreType relation
  totalAmountOrder: number;
  payAmount: number;
  status: string; // "pending" | "in progress" | "completed"
  date: Date;
};

export type StockReplenishmentItemsType = {
  id?: number;
  stockId: number;
  productId: number; // Identification du produit ou de l'option du produit
  initialtQuantity: number;
  newQuantity: number;
  priceCost: number; // Prix d'achat
  priceSale: number; // Prix de vente
  date: Date;
};

export type PriceHistoryType = {
  id?: number;
  productId: number; // Identification du produit ou de l'option du produit
  oldPriceCost: number; // Ancien Prix d'achat
  oldPriceSale: number; // Ancien Prix de vente
  newPriceCost: number; // Nouveau Prix d'achat
  newPriceSale: number; // Nouveau Prix de vente
  supplierId: number | null; // PartenerType relation
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

export type TeamsType = {
  id?: number;
  name: string;
  numberOfMembers: number;
};

export type TeamMembersType = {
  id?: number;
  teamId: number;
  userId: number;
  role: "vendeur" | "caissier" | "admin";
};

export type StoreType = {
  id?: number;
  teamId: number;
  name: string;
  location: string;
};
// Navigation Route
export type ProductParams = {
  Product: { pid: number };
};

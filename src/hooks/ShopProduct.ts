import { product } from "../data/product";

export const getProductMyShop = (shopId: string) => {
  return product.filter((p) => {
    return p.shopId === shopId;
  });
};

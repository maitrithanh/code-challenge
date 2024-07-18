import { shop } from "../data/shop";

export const infoShop = (shopId: string) => {
  return shop.find((s) => {
    return s.shopId === shopId;
  });
};

import create from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface IProduct {
  id: string;
  title: string;
  type: string;
  variants: string;
  img: string;
  price: number;
}

export interface ICartItem extends IProduct {
  quantity: number;
  subTotal: number;
}

export interface ICartStore {
  products: ICartItem[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  clearCart: () => void;
}

const useStore = create<ICartStore>()(
  persist(
    (set, get) => ({
      products: [],
      addToCart: (product: IProduct) => {
        const existingProduct = get().products.some((p) => p.id === product.id);

        set({
          products: existingProduct
            ? get().products.map((p) => {
                return p.id === product.id
                  ? {
                      ...p,
                      quantity: p.quantity + 1,
                      subTotal: p.subTotal + product.price,
                    }
                  : { ...p };
              })
            : [
                ...get().products,
                { ...product, quantity: 1, subTotal: product.price },
              ],
        });
      },
      removeFromCart: (product: IProduct) => {
        const existingProduct = get().products.find((p) => p.id === product.id);

        set({
          products:
            !existingProduct || existingProduct.quantity === 1
              ? [...get().products.filter((p) => p.id !== product.id)]
              : [
                  ...get().products.map((p) => {
                    return p.id === product.id
                      ? {
                          ...p,
                          quantity: p.quantity - 1,
                          subTotal: p.subTotal - product.price,
                        }
                      : { ...p };
                  }),
                ],
        });
      },
      clearCart: () => set({ products: [] }),
    }),
    {
      name: "cart-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;

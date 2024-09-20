// add-items
/// remove items
// clear items
// keep track of cart items;
import { Product } from '../payload-types';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';

export type CartItem = {
    product: Product;
}

type CartState = {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    cleartCart: () => void;
}

export const useCart = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            addItem: (product) => set((state) => {
                return {items: [...state.items, {product}]}
            }), 
            removeItem: (productId) => set((state) => {
                const index = state.items.findIndex(item => item.product.id === productId);
                if (index !== -1) {
                    const newItems = [
                        ...state.items.slice(0, index), // Items before the found item
                        ...state.items.slice(index + 1) // Items after the found item
                    ];
                    return { items: newItems };
                }
                return state;
            }),            
            cleartCart: () => set({items: []})
        }),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage),
        })
);
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { initialItems } from '../lib/constants';

export const useItemStore = create(persist((set) => ({
    items: initialItems,
    addItem: (newItemText) => {
        const newItem = {
            id: new Date().getTime(),
            name: newItemText,
            packed: false,
        };
        set(state => ({ items: [...state.items, newItem] }))
    },
    deleteItem: (id) => {
        set(state => {
            const newItems = state.items.filter((item) => item.id !== id);
            return { items: newItems }
        })
    },
    removeAllItems: () => {
        set(() => ({ items: [] }))
    },
    toggleItem: (id) => {
        set((state) => {
            const newItems = state.items.map((item) => {
                if (item.id === id) {
                    return { ...item, packed: !item.packed };
                }
                return item;
            })
            return { items: newItems }
        })
    },
    resetToInitial: () => {
        set(() => ({ items: initialItems }));
    },
    markAllAsComplete: () => {
        set(state => {
            const newItems = state.items.map((item) => {
                return { ...item, packed: true };
            });
            return { items: newItems }
        })
    },
    markAllAsIncomplete: () => {
        set((state) => {
            const newItem = state.items.map((item) => {
                return { ...item, packed: false };
            });
            return { items: newItem }
        })

    }
}),
    {
        name: "items",
    }
));
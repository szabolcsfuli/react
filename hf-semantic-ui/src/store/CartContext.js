import { createContext } from "react";

const CartContext = createContext({
    products: [],
    totalCount: 0,
    totalAmount: 0,
    add: () => {},
    remove: () => {},
})

export default CartContext;
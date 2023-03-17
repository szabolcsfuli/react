import { useContext } from "react"
import { View, Button } from "react-native"
import CartContext from "../../store/CartContext";

const MiniCart = ({ navigation }: any) => {
    const ctx = useContext(CartContext);
    const title = ctx.totalCount ? `${ctx.totalItems} Products, total price $${ctx.totalAmount.toFixed(2)}` : 'No products in cart';

    return (
        <View>
            <Button onPress={() => (ctx.totalCount ? navigation.navigate('Cart') : false)} title={title} />
        </View>
    )
}

export default MiniCart;
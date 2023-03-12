import { View, Text, Button } from 'react-native';
import Price from '../Meals/Price'
import Styles from '../../Style'
import { useContext, useRef } from 'react';
import CartContext from '../../store/CartContext';
import { TextInput } from 'react-native';

const CartItem = (props: any) => {
    const { item } = props;
    const ctx = useContext(CartContext);
    const countRef = useRef<TextInput>(null);

    const onPressPlus = () => {
        ctx.addItem({ ...item, ...{ count: 1 } })
    }

    const onPressMinus = () => {
        ctx.removeItem({ ...item, ...{ count: 1 } })
    }

    return (
        <View style={Styles.listView} key={item.id}>
            <View style={{ flex: 1.5 }}>
                <Text style={Styles.title}>{item.name}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={Styles.desc}>{item.description}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Price price={item.price} />
            </View>
            <View style={{ flex: .2 }}>
                <Text style={Styles.title}> {item.count} </Text>
            </View>
            <View style={{ flex: 1 }}>
                <Button title='+' onPress={onPressPlus} />
            </View>
            <View style={{ flex: 1 }}>
                <Button title='-' onPress={onPressMinus} />
            </View>
        </View>
    )
}

export default CartItem;
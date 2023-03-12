import { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import CartContext from '../../store/CartContext';
import { Stack } from 'react-native-flex-layout';
import CartItem from './CartItem';
import Styles from '../../Style';
import Price from '../Meals/Price';

export default ({ navigation }: any) => {
    const ctx = useContext(CartContext);
    return (
        <Stack fill >
            {ctx.items.map((item: any) => (
                <CartItem key={item.id} item={item} />
            ))}
            <View>
                <View style={Styles.listView}>
                    <View style={{ flex: 1 }}>
                        <Text style={Styles.total}>Total</Text>
                    </View>
                    <View style={{ flex: 1 }}>

                    </View>
                    <View style={{ flex: 1 }}>
                        <Price price={ctx.totalAmount} cls='totalPrice' />
                    </View>
                </View>
                <Button
                    title="Home"
                    onPress={() =>
                        navigation.navigate('Home')
                    }
                />
            </View>
        </Stack>
    );
}
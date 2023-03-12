import { View, Text, Button } from 'react-native';
import Price from './Price'
import Styles from '../../Style'
import { useContext } from 'react';
import CartContext from '../../store/CartContext';

const Meal = (props: any) => {
    const { item } = props;
    const ctx = useContext(CartContext);

    return (
        <View style={Styles.listView} key={item.id}>
            <View style={{ flex: 1 }}>
                <Text style={Styles.title}>{item.name}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={Styles.desc}>{item.description}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Price price={item.price} />
            </View>
            <View style={{ flex: 1 }}>
                <Button title='Add to cart' onPress={() => { ctx.addItem({ ...item, ...{ count: 1 } }) }} />
            </View>
        </View>
    )
}

export default Meal;
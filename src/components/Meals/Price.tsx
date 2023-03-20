import { Text } from 'react-native';
import Styles from '../../Style'

export default ({ price, cls }: any) => {
    return <Text style={cls ? Styles.totalPrice : Styles.price}>${price.toFixed(2)}</Text>;
}
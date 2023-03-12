import { View, Button } from "react-native";
import { Stack } from 'react-native-flex-layout';
import Meal from "./Meal";
import { DUMMY_MEALS } from "../../data";
import MiniCart from "../Cart/MiniCart";


const AvailableMeals = ({ navigation }: any) => {
    return (
        <Stack fill >
            <MiniCart navigation={navigation} />
            {DUMMY_MEALS.map(item => (
                <Meal
                    key={item.id}
                    item={item}
                />
            ))}
            <View>
                <Button
                    title="Home"
                    onPress={() =>
                        navigation.navigate('Home')
                    }
                />
            </View>
        </Stack>
    );
};

export default AvailableMeals;

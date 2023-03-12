import * as React from 'react';
import { Button } from 'react-native';
import AvailableMeals from './src/components/Meals/AvailableMeals';
import Cart from './src/components/Cart/Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartProvider from './src/store/CartProvider';
import { Stack as LayoutStack } from 'react-native-flex-layout';

const Stack = createNativeStackNavigator();


const HomeScreen = ({ navigation }: any) => {
  return (
    <LayoutStack fill>
      <Button
        title="Products"
        onPress={() =>
          navigation.navigate('AvailableMeals')
        }
      />
      <Button
        title="Cart"
        onPress={() =>
          navigation.navigate('Cart')
        }
      />
    </LayoutStack>
  );
};

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          // initialRouteName='AvailableMeals'
        >
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{ title: 'ReactWebshop' }}
          />
          <Stack.Screen name="AvailableMeals" component={AvailableMeals} />
          <Stack.Screen name="Cart" component={Cart} options={{ title: 'Cart' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

export default App;
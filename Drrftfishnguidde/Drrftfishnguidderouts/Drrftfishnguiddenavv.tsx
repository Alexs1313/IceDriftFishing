// stack

import {createStackNavigator} from '@react-navigation/stack';

import Drrftfishnguiddeldre from '../Drrftfishnguiddecompn/Drrftfishnguiddeldre';
import Drrftfishnguiddeonb from '../Drrftfishnguiddescrns/Drrftfishnguiddeonb';
import Drrftfishnguiddetabb from '../../Drrftfishnguiddetabb';

const Stack = createStackNavigator();

const Drrftfishnguiddenavv = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Drrftfishnguiddeldre"
        component={Drrftfishnguiddeldre}
      />
      <Stack.Screen
        name="Drrftfishnguiddeonb"
        component={Drrftfishnguiddeonb}
      />
      <Stack.Screen
        name="Drrftfishnguiddetabb"
        component={Drrftfishnguiddetabb}
      />
    </Stack.Navigator>
  );
};

export default Drrftfishnguiddenavv;

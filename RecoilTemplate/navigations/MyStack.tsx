import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootMyStackParamList} from 'Navigation';

import Collections from '@components/Collections';
import BasicCounter from '@components/BasicCounter';

const Stack = createStackNavigator<RootMyStackParamList>();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Collections" component={Collections} />
      <Stack.Screen name="BasicCounter" component={BasicCounter} />
    </Stack.Navigator>
  );
}

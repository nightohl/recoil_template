import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RecoilRoot} from 'recoil';
import {RootMyStackParamList} from 'Navigation';

import Collections from '@components/Collections';
import BasicCounter from '@components/BasicCounter';
import ColorBoxes from '@components/ColorBoxes';
import SearchAnimation from '@components/SearchAnimation';

const Stack = createStackNavigator<RootMyStackParamList>();

export default function MyStack() {
  return (
    <RecoilRoot>
      <Stack.Navigator>
        <Stack.Screen name="Collections" component={Collections} />
        <Stack.Screen name="BasicCounter" component={BasicCounter} />
        <Stack.Screen name="ColorBoxes" component={ColorBoxes} />
        <Stack.Screen name="SearchAnimation" component={SearchAnimation} />
      </Stack.Navigator>
    </RecoilRoot>
  );
}

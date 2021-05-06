import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Collections({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="BasicCounter"
        onPress={() => navigation.navigate('BasicCounter')}
      />
    </View>
  );
}

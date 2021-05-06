import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {RecoilRoot, useRecoilState} from 'recoil';
import {countState} from '@recoil/atoms/BasicCounter';

const Counter1 = () => {
  const [count, setCount] = useRecoilState(countState);
  return (
    <View style={[styles.container, styles.yellow]}>
      <Text>{count}</Text>
      <Button title="1 감소" onPress={() => setCount(count - 1)} />
      <Button title="1 증가" onPress={() => setCount(count + 1)} />
    </View>
  );
};
const Counter2 = () => {
  const [count, setCount] = useRecoilState(countState);
  return (
    <View style={[styles.container, styles.blue]}>
      <Text>{count}</Text>
      <Button title="1 감소" onPress={() => setCount(count - 1)} />
      <Button title="1 증가" onPress={() => setCount(count + 1)} />
    </View>
  );
};
export default function BasicCounter({navigation}) {
  return (
    <RecoilRoot>
      <Counter1 />
      <Counter2 />
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {backgroundColor: 'blue'},
  yellow: {backgroundColor: 'yellow'},
});

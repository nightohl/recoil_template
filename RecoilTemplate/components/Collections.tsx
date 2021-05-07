import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useRecoilState} from 'recoil';
import {countState} from '@recoil/BasicCounter';

const RecoilRootTest = ({onPress}) => {
  const [count, setCount] = useRecoilState(countState);
  return (
    <View style={styles.container}>
      <View style={styles.basicCounterContainer}>
        <Text style={{padding: 10, borderWidth: 1, borderRadius: 10}}>
          {count}
        </Text>
        <Button title="1 감소" onPress={() => setCount(count - 1)} />
        <Button title="1 증가" onPress={() => setCount(count + 1)} />
        <Button title="BasicCounter" onPress={onPress} />
      </View>
      <Text style={styles.description}>
        컴포넌트는 가장 가까운 RecoilRoot를 참조하므로 동일한 atom을
        사용하더라도 RecoilRoot가 다르면 공유되지 않는다.
      </Text>
    </View>
  );
};
export default function Collections({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <RecoilRootTest onPress={() => navigation.navigate('BasicCounter')} />
      <View style={styles.container}>
        <Button
          title="ColorBoxes"
          onPress={() => navigation.navigate('ColorBoxes')}
        />
      </View>
      <View style={styles.container}>
        <Button
          title="SearchAnimation"
          onPress={() => navigation.navigate('SearchAnimation')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  description: {
    margin: 8,
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 15,
    overflow: 'hidden',
  },
  basicCounterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    padding: 5,
    width: '100%',
    marginTop: -2,
  },
});

import React from 'react';
import {View, Text, Button} from 'react-native';
import {useRecoilState} from 'recoil';
import {countState} from '@recoil/atoms/BasicCounter';

const RecoilRootTest = ({onPress}) => {
  const [count, setCount] = useRecoilState(countState);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{padding: 10, borderWidth: 1, borderRadius: 10}}>
          {count}
        </Text>
        <Button title="1 감소" onPress={() => setCount(count - 1)} />
        <Button title="1 증가" onPress={() => setCount(count + 1)} />
        <Button title="BasicCounter" onPress={onPress} />
      </View>
      <Text
        style={{
          margin: 8,
          padding: 10,
          backgroundColor: 'lightgrey',
          borderRadius: 15,
          overflow: 'hidden',
        }}>
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
    </View>
  );
}

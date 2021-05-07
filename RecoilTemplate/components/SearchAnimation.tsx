import React, {Suspense, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {RecoilRoot, useRecoilState, useRecoilValue} from 'recoil';
import {Searchbar} from 'react-native-paper';
import {keywordState, animeList} from '@recoil/SearchAnimation';

const SearchBox = () => {
  const [keyword, setKeyword] = useRecoilState(keywordState);

  const [value, setValue] = useState('');

  return (
    <View style={styles.queryContainer}>
      <Searchbar
        placeholder="검색어를 입력하세요."
        onChangeText={text => setValue(text)}
        value={value}
        onSubmitEditing={e => setKeyword(e.nativeEvent.text)}
      />
      <Text style={{padding: 10}}>Query: {keyword}</Text>
    </View>
  );
};

const AnimationList = () => {
  const list = useRecoilValue(animeList);

  return (
    <ScrollView>
      <View style={styles.aniListContainer}>
        {list.map(item => (
          <AnimeItem key={item.mal_id} {...item} />
        ))}
      </View>
    </ScrollView>
  );
};

const AnimeItem = ({image_url, title}: {image_url: string; title: string}) => {
  return (
    <View style={styles.singleAni}>
      <Image
        style={styles.image}
        source={{uri: image_url}}
        resizeMode="stretch"
      />
      <Text style={{padding: 10}}>{title}</Text>
    </View>
  );
};

export default function SearchAnimation() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>애니메이션 검색</Text>
      <Text style={styles.subTitle}>
        영어 키워드를 입력한 후 엔터를 누르세요
      </Text>
      <RecoilRoot>
        <SearchBox />
        <Suspense fallback={<Text>Loading...</Text>}>
          <AnimationList />
        </Suspense>
      </RecoilRoot>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FB87AF50',
  },
  title: {fontSize: 20, fontWeight: '600', marginBottom: 20},
  subTitle: {fontSize: 15, marginBottom: 10},
  queryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  singleAni: {
    width: 150,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    alignItems: 'center',
    margin: 10,
  },
  aniListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {width: 150, height: 180},
});

import {atom, selector} from 'recoil';

export const keywordState = atom({
  key: 'keywordState',
  default: '',
});

export const animeList = selector({
  key: 'animeList',
  get: async ({get}) => {
    const keyword = get(keywordState);
    if (!keyword || keyword.length < 3) {
      return [];
    }

    const response = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${keyword}&rated=pg13&page=1`,
    );
    const data = await response.json();

    return data.results;
  },
});

import {atom, atomFamily, selector} from 'recoil';

const BOX_NUM = 25;

const COLORS = {
  RED: 'red',
  BLUE: 'blue',
  WHITE: 'white',
};

export const boxState = atomFamily({
  key: 'boxState',
  default: COLORS.WHITE,
});

export const colorState = atom({
  key: 'colorState',
  default: COLORS.RED,
});

export const colorCounterState = selector({
  key: 'colorCounterState',
  get: ({get}) => {
    let counter = {[COLORS.RED]: 0, [COLORS.BLUE]: 0, [COLORS.WHITE]: 0};

    for (let i = 0; i < BOX_NUM; i++) {
      const box = get(boxState(i));
      counter[box] = counter[box] + 1;
    }
    return counter;
  },

  set: ({set}) => {
    for (let i = 0; i < BOX_NUM; i++) {
      set(boxState(i), COLORS.WHITE);
    }
  },
});

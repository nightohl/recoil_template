import React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {RecoilRoot, useRecoilState, useRecoilValue} from 'recoil';
import {boxState, colorState, colorCounterState} from '@recoil/ColorBoxes';

const BOX_NUM = 25;

const COLORS = {
  RED: 'red',
  BLUE: 'blue',
  WHITE: 'white',
};

const Box = ({id}) => {
  const [box, setBox] = useRecoilState(boxState(id));
  const color = useRecoilValue(colorState);
  const setColor = () => {
    setBox(color);
  };
  return (
    <TouchableOpacity
      style={[styles.box, {backgroundColor: box}]}
      onPress={setColor}
    />
  );
};

const Grid = () => {
  let boxes = [];
  for (let i = 0; i < BOX_NUM; i++) {
    boxes.push(<Box key={i} id={i} />);
  }
  return (
    <View style={{paddingTop: 20}}>
      <Text style={styles.pressTitle}>Press on boxes to color:</Text>
      <View style={styles.boxContainer}>{boxes}</View>
    </View>
  );
};

const ColorPicker = () => {
  const [color, setColor] = useRecoilState(colorState);
  return (
    <View style={[styles.center, styles.row]}>
      <Text style={styles.selectTitle}>Select Color:</Text>
      <TouchableOpacity
        style={[
          styles.colorButton,
          {backgroundColor: color === COLORS.RED ? 'lightgrey' : 'white'},
        ]}
        onPress={() => setColor(COLORS.RED)}>
        <Text>red</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.colorButton,
          {backgroundColor: color === COLORS.BLUE ? 'lightgrey' : 'white'},
        ]}
        onPress={() => setColor(COLORS.BLUE)}>
        <Text>blue</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.colorButton,
          {backgroundColor: color === COLORS.WHITE ? 'lightgrey' : 'white'},
        ]}
        onPress={() => setColor(COLORS.WHITE)}>
        <Text>white</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stats = () => {
  const [colorCounter, setColorCounter] = useRecoilState(colorCounterState);

  return (
    <View style={[styles.center, {paddingTop: 30}]}>
      <Text>White: {colorCounter[COLORS.WHITE]}</Text>
      <Text>Red: {colorCounter[COLORS.RED]}</Text>
      <Text>Blue: {colorCounter[COLORS.BLUE]}</Text>
      <Button title="Reset" onPress={setColorCounter} />
    </View>
  );
};

export default function ColorBoxes() {
  return (
    <RecoilRoot>
      <View style={styles.root}>
        <ColorPicker />
        <Grid />
        <Stats />
      </View>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  center: {justifyContent: 'center', alignItems: 'center'},
  row: {flexDirection: 'row'},
  boxContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 50,
    paddingRight: 50,
  },
  box: {width: 50, height: 50, borderWidth: 1},
  pressTitle: {fontSize: 20, padding: 5, alignSelf: 'center'},
  root: {paddingTop: 50, flex: 1},
  selectTitle: {fontSize: 15},
  colorButton: {padding: 8, borderRadius: 10, marginLeft: 5},
});

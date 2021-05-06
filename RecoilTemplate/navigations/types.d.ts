import {StackScreenProps} from '@react-navigation/stack';

declare module 'Navigation' {
  // 스택네비게이터의 모든 화면별 파라미터 설정
  export type RootMyStackParamList = {
    Collections: BasicCounterProps;
    BasicCounter: BasicCounterProps;
  };

  export type BasicCounterProps = StackScreenProps<
    RootMyStackParamList,
    'BasicCounter'
  >;
}

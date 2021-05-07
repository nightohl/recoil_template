# recoil_template
React-Native에서 Recoil 상태관리 라이브러리를 사용한 여러가지 예시를 정리함.

## Recoil
페이스북에서 만든 React만을 위한 React전용 상태관리 라이브러리
* [Recoil 공식깃헙](https://github.com/facebookexperimental/Recoil)
* [Recoil 한글문서](https://recoiljs.org/ko/docs/introduction/core-concepts)

## 실행
```shell
$ git clone https://github.com/nightohl/recoil_template.git
$ cd RecoilTemplate
$ yarn install
$ npx pod-install
$ npx react-native run-ios
```

## 예시
### 1. BasicCounter
`atom` 으로 상태를 정의하고, `RecoilRoot`, `useRecoilState`를 통해 컴포넌트간 상태를 공유하는 기본적인 예시

<html>
  <img src="https://user-images.githubusercontent.com/48432932/117424270-96653800-af5c-11eb-9aa7-ad93105fcced.png", height="500px">
  <img src="https://user-images.githubusercontent.com/48432932/117424601-e6dc9580-af5c-11eb-999f-da00486c6b45.png", height="200px">
</html>


* 동일한 `atom`을 참조하면 자동으로 상태가 공유되고 종속성이 생긴다.
* 컴포넌트는 가장 가까운 `RecoilRoot`를 참조하므로, `RecoilRoot`가 다를 때에는 동일한 `atom`을 참조했더라도 서로 공유되지 않는다.
---
### 2. ColorBoxes
`atom`에서 파생된 데이터를 만드는 `selector`에 대한 기본적인 예시

<html>
  <img src="https://user-images.githubusercontent.com/48432932/117422361-79c80080-af5a-11eb-84aa-cf7a80a2414c.png", height="500px">
</html>

* `selector`의 `get` 함수를 정의함으로써, `atom` 상태값을 이용하여 필요한 연산을 거쳐 가공된,파생된 결과 값을 반환받을 수 있다.
* `selector`의 `set` 함수를 정의함으로써, `atom` 상태값을 이용하여 필요한 연산을 거친 후 가공된,파생된 결과 값을 atom에 반영시킬 수 있다.
* `get`과 `set`을 모두 정의한 경우 `useRecoilState`를 이용하여 아래와 같이 Hook으로 반환받아 사용할 수 있다:
* `selector`는 자신이 어떤 `atom`들을 의존하고 있는지, 또 어떤 컴포넌트들이 자신을 필요로하는지를 추적하기 때문에 상태가 변화하면 연관된 컴포넌트들도 다시 렌더링 된다.

```js
// 셀렉터 정의

export const 셀렉터 = selector({
  key: 'colorCounterState',
  get: ({get}) => {
      const 현재_아톰_상태값 = get(아톰);
      /*
       ... 가공 ... 가공
       (atom에는 영향을 끼치지 않음)
      */
    }
    return 가공된_결과값;
  },

  set: ({set}) => {
      set(아톰, 새로운_값);
  },
});
```
```js
// 가공된 상태값이 필요한 컴포넌트

const [value, setValue] = useRecoilState(셀렉터); // 그냥 hook 쓰듯이 쓰면 된다.
```

---
### 3. SearchAnimation
React 동시성 모드의 일부기능인 `Suspense`를 활용한 비동기 처리 예시

<html>
  <img src="https://user-images.githubusercontent.com/48432932/117421167-4173f280-af59-11eb-9ee7-e14c5d92c511.png", height="500px">
</html>

```js
<Suspense fallback={<Text>비동기 처리가 완료되기까지 보여질 컴포넌트</Text>}>
  <비동기_요청을_보내는_컴포넌트 />
</Suspense>
```

* `selector`의 `get` 메소드 정의 시 `async & await`으로 작성하면 된다:
```js
export const 비동기_셀렉터 = selector({
  key: '유니크한_키',
  get: async ({get}) => {
    const param = get(아톰);

    const response = await fetch(
      `https://your.api.com/?param=${param}`,
    );
    const data = await response.json();

    return data.results;
  },
});
```

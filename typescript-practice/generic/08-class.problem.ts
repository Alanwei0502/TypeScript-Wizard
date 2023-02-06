// 請實做一個泛型 store 類別
class Store<State> {}

// 符合下方應用
const initState = {
  id: 0,
  name: '123'
}

const store = new Store(initState);

store.updateState({
  ...initState,
  name: 'abc'
})

store.updateState({
  ...initState,
  // name: true // error
});
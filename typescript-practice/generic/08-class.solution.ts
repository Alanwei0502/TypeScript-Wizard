class Store<State> {
  private state: State;

  constructor(initState: State){
    this.state = initState;
  }

  updateState(newState: State){
    this.state = newState;
  }

  getState(){
    return this.state;
  }

  someMethod<T>(param: T): T[]{
    return [param];
  }
}

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
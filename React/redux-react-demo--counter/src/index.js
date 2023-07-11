import ReactDOM from "react-dom";
import { createStore } from "redux";
import './index.css'

// REDUX CODE
///////////////////////////////////

// ACTION Creators - just return pre-defined action when function is triggered
const increment = () => ({ type: "increment" });

const decrement = () => ({ type: "decrement" });


// REDUCER
const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

// STORE initialized
const store = createStore(counterReducer);

// REACT CODE
///////////////////////////////////


//SEND STATE to comonent with state={store.getState()}
const render = () => {
  ReactDOM.render(
    <CounterApp state={store.getState()} />,
    document.getElementById("root")
  );
};

render();                 // Render once with the initial state.
store.subscribe(render)   // Subscribe render to changes to the store's state.


// This componenent displays the state, in this case the current number
function CounterApp(props) {
  let state = props.state;
  const onIncrementButtonClicked = () => {
    store.dispatch(increment())
  };

  const onDecrementButtonClicked = () => {
    store.dispatch(decrement())
  };

  return (
    <div id="counter-app">
      <h1> {state} </h1>
      <button onClick={onIncrementButtonClicked}>+</button>
      <button onClick={onDecrementButtonClicked}>-</button>
    </div>
  );
}


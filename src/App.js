import React, { useReducer } from 'react';
import reducer from "./reducers/index"
import './App.css';
import { applyNumber, changeOperation, clearDisplay, updateMemory, clearMemory } from "./actions/index"
import { initialState } from './reducers';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  //console.log(reducer)

  // const clickToAdd = e => {
  //   dispatch(addOne())
  // }

  const applyN = (num) => { 
    dispatch(applyNumber(num))
    console.log(state.total)
    console.log(state.operation)
  }

  const operationHandler = (mode) => {
    dispatch(changeOperation(mode))
    console.log("meyh")
  }

  const clearHander = () => {
    dispatch(clearDisplay())
    console.log("please just work")
  }

  const memoryHandler = () => {
    dispatch(updateMemory())
    console.log(memoryHandler, "maybe")
  }

  const clearMemoryHandler = () => {
    dispatch(clearMemory())
    console.log("why")
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton 
                onClick={() => memoryHandler("M+")}
                value={"M+"}/>
              <CalcButton 
                onClick={() => {
                  applyN(state.memory);
                }}
                value={"MR"}/>
              <CalcButton 
                onClick={() => {clearMemoryHandler()}}
                value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton 
                onClick={() => applyN(1)} 
                value={1}/>
              <CalcButton 
                onClick={() => applyN(2)}
                value={2}/>
              <CalcButton 
                onClick={() => applyN(3)} 
                value={3}/>
            </div>

            <div className="row">
              <CalcButton 
                onClick={() => applyN(4)} 
                value={4}/>
              <CalcButton 
                onClick={() => applyN(5)} 
                value={5}/>
              <CalcButton 
                onClick={() => applyN(6)} 
                value={6}/>
            </div>

            <div className="row">
              <CalcButton 
                onClick={() => applyN(7)}
                value={7}/>
              <CalcButton 
                onClick={() => applyN(8)} 
                value={8}/>
              <CalcButton 
                onClick={() => applyN(9)}
                value={9}/>
            </div>

            <div className="row">
              <CalcButton 
                onClick={() => operationHandler("+")}
                value={"+"}/>
              <CalcButton 
                onClick={() => operationHandler("*")}
                value={"*"}/>
              <CalcButton 
                onClick={() => operationHandler("-")}
                value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton 
                onClick={() => clearHander("CE")}
                value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

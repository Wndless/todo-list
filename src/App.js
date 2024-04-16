import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import TodoBoard from './TodoBoard';

function App() {
  const[inputValue, setInputValue] = useState('')
  
  // 초기값 불러오기
  const [todoList, setTodoList] = useState(
    ()=>{
      const browserValue = localStorage.getItem("items")
      if(browserValue == null || browserValue == 'undefined') return []
      return JSON.parse(browserValue)
  })

  // 로컬스토리지
  useEffect( ()=> {
    localStorage.setItem("items", JSON.stringify(todoList))
  }, [todoList])

  const addItem = () => {
    setTodoList([...todoList, inputValue]);
  }
  return (
    <main>
      <input value={inputValue} type='text' onChange={(event) => {
        setInputValue(event.target.value);
      }}/>
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList}>

      </TodoBoard>
    </main>
  );
}

export default App;

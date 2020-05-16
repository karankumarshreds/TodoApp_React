import React from 'react';
import './App.css';
import TodoList from './Components/TodoList/TodoList'

function App() {
  let addr = 'http://pngimg.com/uploads/manchester_united/manchester_united_PNG26.png';
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;

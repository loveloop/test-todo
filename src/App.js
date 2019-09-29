import React, { useState, useEffect } from "react"; //훅사용
import styled from "styled-components";
import Header from "./components/header";
import Contents from "./components/contents";
import Footer from "./components/footer";
import Container from "./components/container";

//부모

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");

    setTodos(savedTodos ? JSON.parse(savedTodos) : []);
  }, []);

  useEffect(() => {
    console.log("save:", JSON.stringify(todos));
    localStorage.setItem("todos", JSON.stringify(todos)); //로컬스트리지에 객체는 저장 안됨 -> 스트링으로 바꿔야함
  }, [todos]);

  const handleAddTodo = text => {
    // todos.push() 원본에 손상을 줌 지금 안씀
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        isDone: false
      }
    ]);
  };

  const handleUpdateStatus = id => {
    setTodos(
      todos.map(todo => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  const handleDeletTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Container margin={{ top: 10, bottom: 10 }}>
      <Header onAddTodo={handleAddTodo} /> {/* props로 넘겨줄때 씀 : on ~~ */}
      <Contents
        todos={todos}
        onUpdateStatus={handleUpdateStatus}
        onDeleteTodo={handleDeletTodo}
      />
      <Footer />
    </Container>
  );
}

export default App;

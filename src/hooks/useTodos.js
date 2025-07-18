import { useRef, useState, useEffect } from "react";
import { getItem, setItem } from "../utils/storage";

export function useTodos() {
  const [todos, setTodos] = useState(() => getItem("todos", [])); //로컬스토리지에서 todos 가져오기
  //로컬스토리지의 마지막 ID + 1 을 nextId로 지정, 없다면 1로 지정
  const nextId = useRef(
    todos.length > 0 ? Math.max(...todos.map((t) => t.id)) + 1 : 1
  );

  //로컬스토리지 상태 동기화
  useEffect(() => {
    setItem("todos", todos);
  }, [todos]);

  const addTodo = (text) => {
    //빈 제출 검증
    if (!text) {
      return { success: false, message: "할 일을 입력해주세요!" };
    }
    //중복된 일 제출 검증
    if (todos.some((todo) => todo.text === text)) {
      return { success: false, message: "이미 추가된 일입니다!" };
    }

    const todo = { id: nextId.current, text, check: false }; //새 todo 객체 생성
    const updatedTodos = [todo, ...todos]; //기존 todos에 새 todo 추가
    setTodos(updatedTodos); //상태 업데이트
    nextId.current++; //다음 id 증가

    return { success: true };
  };

  //DELETE
  const removeTodo = (deleteId) => {
    const remainTodos = todos.filter((todo) => todo.id != deleteId); //삭제된 todos
    setTodos(remainTodos); //상태 업데이트
  };

  //UPDATE
  const toggleTodo = (selectedId) => {
    const updateTodos = todos.map(
      (
        todo //todo 상태 변경
      ) => (todo.id == selectedId ? { ...todo, check: !todo.check } : todo)
    );
    setTodos(updateTodos); //상태 업데이트
  };

  return { todos, addTodo, removeTodo, toggleTodo };
}

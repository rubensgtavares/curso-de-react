import AddTask from "./components/AddTasks.jsx";
import Tasks from "./components/Tasks.jsx";
import './App.css'
import { useEffect, useState } from "react";
import {v4} from 'uuid';
import Title from "./components/Title.jsx";
import Test from "./components/Test.jsx";

function App(){
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []


  // [
  // {
  //   id: 1,
  //   title: "Estudar programação",
  //   description: "Estudar programação parar se tornar um desenvolvedor full Stack.",
  //   isCompleted: false,
  // }, {
  //   id: 2,
  //   title: "Estudar inglês",
  //   description: "Estudar para se tornar fluente.",
  //   isCompleted: false,
  // }, {
  //   id: 3,
  //   title: "Estudar matemática",
  //   description:
  //     "Estudar matemática para se tornar um desenvolvedor full stack.",
  //   isCompleted: false,
  // }
  // ]
);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    async function fetchTasks() {
      // CHAMAR API
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10", 
      {
        method: 'GET',
      });
    // PEGAR OS DADOS QUE ELA RETORNA
    const data = await response.json();
    // ARMAZENA/PERSISTIR ESSES DADOS NO STATE
    setTasks(data);
    }
    // SE QUISER PODE CHAMAR UMA API
    // fetchTasks();
  }, [])

  function onAddTaskSubmit(title, description) {
    const newTasks = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTasks]);
  };


  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return{ ...task, isCompleted: !task.isCompleted};
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onTaskClickDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-3">
        <Title>Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClick = {onTaskClick} onTaskClickDelete = {onTaskClickDelete}/>
      </div>
    </div>
  );
}


export default App;
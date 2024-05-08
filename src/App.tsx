import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";

import styles from './App.module.css'

import { Header as ListHeader } from "./components/List/Header";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Item } from "./components/List/Item";
import { Empty } from "./components/List/Empty";

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export function App(){

  const [tasks, setTasks] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if(currentTask.isChecked){
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    if(!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) =>[...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id:number){
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if(!confirm("Are you sure you want to remove")){
      return
    }

    setTasks(filteredTasks)
  }

  return(
    <main>
      <Header/>

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold"/>
          </Button>
        </div>

        <div className={styles.tasksList}>
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />
        </div>

        {
          tasks.length > 0 ? (
            <div>
              {
                tasks.map((task) => (
                  <Item
                    data={task}
                    key={task.id}
                    removeTask={handleRemoveTask}
                  />
                ))}
            </div>
          ) : (
            <Empty/>
          )}
      </section>
    </main>
  )
}
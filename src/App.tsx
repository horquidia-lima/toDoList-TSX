import { PlusCircle } from "@phosphor-icons/react";

import styles from './App.module.css'

import { Header as ListHeader } from "./components/List/Header";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Item } from "./components/List/Item";

export function App(){
  return(
    <main>
      <Header/>

      <section className={styles.content}>
        <div className={styles.taskInfoContainer}>
          <Input/>
          <Button>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold"/>
          </Button>
        </div>

        <div className={styles.taskList}>
          <ListHeader/>
        </div>

        <div>
          <Item/>
        </div>
      </section>
    </main>
  )
}
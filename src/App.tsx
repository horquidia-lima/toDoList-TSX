import { PlusCircle } from "@phosphor-icons/react";

import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

export function App(){
  return(
    <main>
      <Header/>

      <section>
        <div>
          <Input/>
          <Button>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold"/>
          </Button>
        </div>
      </section>
    </main>
  )
}
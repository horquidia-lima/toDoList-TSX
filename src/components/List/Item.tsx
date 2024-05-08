import { Trash, Check } from '@phosphor-icons/react'

import styles from './Item.module.css'
import { ITask } from '../../App'

interface Props {
    data: ITask
    removeTask: (id: number) => void
}

export function Item({data, removeTask}: Props){

    function handleRemove(){
        removeTask(data.id)
    }
    return(
        <div className={styles.container}>
            <div>
                <label htmlFor="checkbox">
                    <input type="checkbox" />
                    <span className={styles.checkbox}>
                        <Check size={12}/>
                    </span>

                    <p className={styles.paragraph}>
                        prueba
                    </p>
                </label>
            </div>

            <button onClick={handleRemove}>
                <Trash size={16} color="#808080"/>
            </button>
        </div>
    )
}
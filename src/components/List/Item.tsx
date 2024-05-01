import { Trash, Check } from '@phosphor-icons/react'

import styles from './Item.module.css'

export function Item(){
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

            <button>
                <Trash size={16} color="#808080"/>
            </button>
        </div>
    )
}
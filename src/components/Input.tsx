import styles from './Input.module.css'

export function Input(){
    return(
        <input 
            className={styles.container}
            placeholder='Adicione uma nova tarefa'
        />
    )
}
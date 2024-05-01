import styles from './Button.module.css'

type Props = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>

export function Button({children}: Props){
    return(
        <button className={styles.container}>
            {children}
        </button>
    )
}
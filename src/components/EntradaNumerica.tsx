import styles from "@/app/styles/EntradaNumerica.module.css"

interface iEntradaNumerica {
  text: string,
  value: number,
  onChange: (newValue: number) => void
}

const EntradaNumerica = (props: iEntradaNumerica) => {
  const dec = () => props.onChange(props.value - 1)
  const inc = () => props.onChange(props.value + 1)

  return (
    <div className={ styles.EntradaNumerica }>
      <span className={ styles.text }>{ props.text }</span>
      <span className={ styles.value }>{ props.value }</span>
      <div className={styles.botoes}>
        <button className={styles.btn} onClick={dec}>-</button>
        <button className={styles.btn} onClick={inc}>+</button>
      </div>
    </div>
  )
}

export default EntradaNumerica
import styles from "@/app/styles/Cartao.module.css"

interface iCartao {
  bgColor?: string;
  children?: any;
}

const Cartao = (props: iCartao) => {
  return (
    <div className={styles.cartao} style={{ backgroundColor: props.bgColor ?? "#fff" }}>
      {props.children}
    </div>
  )
}

export default Cartao
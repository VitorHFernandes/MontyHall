import styles from "@/app/styles/Porta.module.css"
import Presente from "@/components/Presente"
import PortaModel from "@/model/porta"

interface iPorta {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

const Porta: any = (props: iPorta) => {
  const porta = props.value
  const selecionada = porta.getSelecionada && !porta.getAberta ? styles.selecionada : ''

  const alternarSelecao = (e: any) => props.onChange(porta.alternarSelecao())
  const abrir = (e: any) => {
    e.stopPropagation()
    props.onChange(porta.abrir())
  }

  const renderizarPorta = () => {
    return (
      <div className={styles.porta}>
          <div className={styles.numero}>{porta.getNumber}</div>
          <div className={styles.macaneta}
            onClick={abrir}></div>
        </div>
    )
  }
  
  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={ `${styles.estrutura} ${selecionada}` }>
        { porta.getFechada ? 
          renderizarPorta() : 
          porta.getTemPresente ? <Presente /> : false }
      </div>  
      <div className={styles.chao}></div>
    </div>
  )
}

export default Porta
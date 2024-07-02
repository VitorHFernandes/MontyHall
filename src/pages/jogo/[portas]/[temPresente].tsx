'use client'
import "@/app/globals.css";
import Link from "next/link"
import Porta from "@/components/Porta"
import styles from "@/app/styles/Jogo.module.css"
import PortaModel from "@/model/porta"
import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import { criarPortas, atualizarPortas } from "@/functions/portas"

const Jogo = () => {
  const router = useRouter()

  const [valido, setValido] = useState(false)
  const [portas, setPortas] = useState<PortaModel[]>([])

  useEffect(() => {
    const portas: number = router.query?.portas ? +router.query.portas : 1;
    const temPresente: number = router.query?.temPresente ? +router.query.temPresente : 1;

    const qtdePortasValidas = portas >= 3 && portas <= 100
    const temPresenteValido = temPresente >= 1 && temPresente <= portas 

    setValido(qtdePortasValidas && temPresenteValido)
  }, [portas]);

  useEffect(() => {
    const portas: number = router.query?.portas ? +router.query.portas : 1;
    const temPresente: number = router.query?.temPresente ? +router.query.temPresente : 1;
  
    setPortas(criarPortas(portas, temPresente));
  }, [router?.query]);

  const renderizarPortas = () => {
    return portas.map(porta => {
      return (
        <Porta
          key={porta.getNumber}
          value={porta} 
          onChange={ (novaPorta: PortaModel) =>  setPortas(atualizarPortas(portas, novaPorta)) }
        />
      )
    })
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {
          valido ?
            renderizarPortas() :
            <h1>Valores inválidos!</h1> 
        }
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo</button>
        </Link>
      </div>
    </div>
  )
}

export default Jogo
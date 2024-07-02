'use client'
import EntradaNumerica from "@/components/EntradaNumerica"
import styles from "@/app/styles/Form.module.css"
import Cartao from "@/components/Cartao"
import { useState } from "react"
import Link from "next/link"

export default function Form() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={ styles.form }>
      <div >
        <Cartao bgColor="#c0392c">
          <h1 >Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quantidade portas?"
            value={qtdePortas}
            onChange={novaQtde => setQtdePortas(novaQtde)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
        <EntradaNumerica text="Porta com presente?"
            value={comPresente}
            onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}
          />
        </Cartao>

        <Cartao bgColor="#28a085" >
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} className={styles.link}>
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}

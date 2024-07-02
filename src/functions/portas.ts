import PortaModel from "@/model/porta"

const criarPortas = (qtde: number, portaComPresente: number): PortaModel[] => {
  return Array.from({ length: qtde }, (_, i) => {
    const numero = i + 1
    const temPresente = numero === portaComPresente
    return new PortaModel(numero, temPresente)
  })
}

const atualizarPortas = (portas: PortaModel[], portaModificada: PortaModel) => {
  return portas.map(portaAtual => {
    const igualAModificada = portaAtual.getNumber === portaModificada.getNumber

    if(igualAModificada){
      return portaModificada
    } else {
      return portaModificada.getAberta ? portaAtual : portaAtual.desselecionar()
    }
  })
}

export { criarPortas, atualizarPortas }
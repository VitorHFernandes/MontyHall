class PortaModel {
  private Numero: number
  private TemPresente: boolean
  private Selecionada: boolean
  private Aberta: boolean

  constructor(Numero: number, TemPresente: boolean = false, Selecionada: boolean = false, Aberta: boolean = false){
    this.Numero = Numero
    this.TemPresente = TemPresente
    this.Selecionada = Selecionada
    this.Aberta = Aberta
  }

  get getNumber() {
    return this.Numero
  }

  get getTemPresente() {
    return this.TemPresente
  }

  get getSelecionada() {
    return this.Selecionada
  }

  get getAberta() {
    return this.Aberta
  }

  get getFechada() {
    return !this.Aberta
  }


  desselecionar() {
    const Selecionada = false
    return new PortaModel(this.Numero, this.TemPresente, Selecionada,this.Aberta)
  }

  alternarSelecao() {
    const Selecionada = !this.Selecionada
      return new PortaModel(this.Numero, this.TemPresente, Selecionada,this.Aberta)
  }

  abrir() {
    const Aberta = true
      return new PortaModel(this.Numero, this.TemPresente, this.Selecionada, Aberta)
  }

}

export default PortaModel
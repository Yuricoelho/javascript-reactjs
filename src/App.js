import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Component } from "react";
import "./assets/App.css";
import './assets/index.css';

class App extends Component{

  criarNota(titulo, texto){

  }

  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota}/>
        <ListaDeNotas/>
      </section>
    );
  }
  
}

export default App;

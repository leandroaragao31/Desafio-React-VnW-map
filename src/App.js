import React from "react";
import styled from "styled-components";
import "./styles.css";

const Paragrafo = styled.p`
  color: white;
  font-size: 4vw;
  font-weight: 500;
`;

const Container = styled.div`
  border: 2px solid blue;
  box-shadow: 25px 25px 25px 25px blue;
`;

export default class Cadastro extends React.Component {
  state = [
    {
      nome: "Dandara",
      idade: 23,
      cor: "azul"
    },
    {
      nome: "Neymar",
      idade: 25,
      cor: "lilas"
    },
    {
      nome: "Lucas",
      idade: 32,
      cor: "verde"
    },
    {
      nome: "Jailson Mendes",
      idade: 45,
      cor: "aquamarine"
    },
    {
      nome: "Felipe Neto",
      idade: 32,
      cor: "preto"
    },
    {
      nome: "Maicon",
      idade: 31,
      cor: "vermelho"
    }
  ];

  render() {
    return (
      <Container>
        {this.state.map((item) => (
          <Paragrafo>
            Meu nome é {item.nome}, tenho {item.idade} anos de idade e minha cor
            favorita é {item.cor}
          </Paragrafo>
        ))}
      </Container>
    );
  }
}

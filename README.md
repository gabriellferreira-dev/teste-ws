# Teste WS
  Projeto desenvolvido como parte do teste da empresa WS.

## Descrição
  O objetivo era criar uma aplicação de listagem de veículos, consumindo os dados de uma api e posteriormente, permitindo adicionar mais veículos.

## Como executar em sua máquina
  - Faça o clone do repositório

    https://github.com/gabriellferreira-dev/teste-ws
  - Instale as dependências (npm install ou yarn add)
  - Execute-o rodando 'npm start' ou 'yarn start'

## Componentes de Listagem
No diretório "src/components" há um componente `<GroupCars />` que recebe obrigatoriamente uma lista de carros no seguinte formato:

    [
      ...
      {
        id: number;
        marca_id: number;
        marca_nome: string;
        nome_modelo: string;
        ano: number;
        combustivel: string;
        num_portas: number;
        valor_fipe: number;
        cor: string;
        timestamp_cadastro: number;
      }
      ...
    ]

Dentro desse componente, será feito um 'map' sobre esse array, onde outro componente,`<CardCar>` , ficará responsável por exibir os dados do carro.

O card recebe obrigatoriamente como props um objeto, como citado no array acima.

O Card pode ter filhos opcionalmente, como por exemplo, um botão de editar.

Ex:

    <CardCar car={car}>
        <Button>Editar</Button>
    </CardCar>

## Deploy

  Pode acessar a aplicação em tempo real nesse link.


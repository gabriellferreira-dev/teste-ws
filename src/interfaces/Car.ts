interface IObjectKeys {
  [key: string]: string | number;
}

export interface Car extends IObjectKeys {
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

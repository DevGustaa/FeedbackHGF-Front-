import type { Setor } from "../enums/setorEnum";

export interface FeedBack {
  avaliacao_geral: number;
  atendimento_recepcao: number;
  responsavel_atendimento: number;
  limpeza_local: number;
  tempo_espera: number;
  setor: (typeof Setor)[keyof typeof Setor];
}

export type FeedBackUpdate = Partial<FeedBack>;

export interface FeedBack {
  avaliacaogeral: number;
  atendimento: number;
  consulta: number;
  limpeza: number;
  tempoespera: number;
}

export type FeedBackUpdate = Partial<FeedBack>;

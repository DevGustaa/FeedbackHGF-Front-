export const Setor = {
  ala_a: "Ala A",
  ala_b: "Ala B",
  recepcao: "Recepção",
} as const;

export type Setor = (typeof Setor)[keyof typeof Setor];

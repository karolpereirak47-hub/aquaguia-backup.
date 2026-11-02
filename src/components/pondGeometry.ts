export type PondShape = 'retangular' | 'circular' | 'irregular';

export interface PondValues {
  comprimento: string;
  largura: string;
  diametro: string;
  area: string;
}

export const pondShapeInfo: Record<
  PondShape,
  { label: string; areaFormula: string; volumeFormula: string }
> = {
  retangular: {
    label: 'Retangular',
    areaFormula: 'Área = comprimento × largura.',
    volumeFormula: 'Volume = comprimento × largura × profundidade média.',
  },
  circular: {
    label: 'Circular',
    areaFormula: 'Área = π × (diâmetro ÷ 2)².',
    volumeFormula: 'Volume = π × (diâmetro ÷ 2)² × profundidade média.',
  },
  irregular: {
    label: 'Irregular',
    areaFormula: 'Área informada manualmente.',
    volumeFormula: 'Volume = área informada × profundidade média.',
  },
};

export const pondShapeIds = Object.keys(pondShapeInfo) as PondShape[];

function positive(value: string): number | null {
  const n = parseFloat(value);
  return Number.isFinite(n) && n > 0 ? n : null;
}

export function pondAreaM2(shape: PondShape, values: PondValues): number | null {
  if (shape === 'retangular') {
    const c = positive(values.comprimento);
    const l = positive(values.largura);
    return c !== null && l !== null ? c * l : null;
  }
  if (shape === 'circular') {
    const d = positive(values.diametro);
    return d !== null ? Math.PI * (d / 2) ** 2 : null;
  }
  return positive(values.area);
}

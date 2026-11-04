export function parseDecimal(value: string): number {
  const normalized = value.trim().replace(',', '.');
  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : NaN;
}

export function parseMealRange(value: string): { min: number; max: number } | null {
  const matches = value.match(/\d+/g)?.map(Number) ?? [];
  if (matches.length === 0) return null;
  const min = matches[0];
  const max = matches[1] ?? min;
  return { min, max };
}

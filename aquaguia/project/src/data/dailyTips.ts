const dailyTips: string[] = [
  'Meça o oxigênio da água ao amanhecer. É o momento de menor oxigênio dissolvido do dia, porque a fotossíntese para à noite e a respiração dos peixes continua.',
  'A quantidade de ração deve considerar a temperatura da água. Com água fria, o apetite e a digestão dos peixes caem, e sobra ração no tanque.',
  'Em pH alto, a amônia se torna mais tóxica, porque a maior parte dela passa para a forma não ionizada. Por isso, meça o pH junto com a amônia.',
  'A transparência da água pode ser estimada com o disco de Secchi. Água muito clara favorece plantas excessivas; água muito turva indica excesso de partículas.',
  'Os favoritos e as marcações do check-list são gravados no próprio navegador do aparelho. Limpar os dados do navegador apaga essas informações.',
  'Os favoritos e o check-list não são enviados para um servidor. Por isso, marcar ou consultar esses itens funciona mesmo com a conexão instável, desde que o aplicativo já esteja carregado.',
  'Registre a data e os valores de cada medição de água. Um histórico simples mostra tendências antes que o problema apareça nos peixes.',
  'Aeração de emergência ajuda quando o oxigênio cai. Se os peixes subirem à superfície para respirar, aja imediatamente e reduza a alimentação.',
];

export function getTipOfDay(date: Date = new Date()): string {
  const dayNumber = Math.floor(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86_400_000,
  );
  return dailyTips[dayNumber % dailyTips.length];
}

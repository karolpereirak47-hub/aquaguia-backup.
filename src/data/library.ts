export type LibraryCategory =
  | 'aquicultura'
  | 'qualidade-agua'
  | 'alimentacao'
  | 'sanidade'
  | 'manejo'
  | 'reproducao'
  | 'construcao-viveiros'
  | 'especies'
  | 'sustentabilidade'
  | 'legislacao'
  | 'videos';

export type MaterialType = 'artigo' | 'cartilha' | 'manual' | 'video' | 'legislacao';

export interface LibraryItem {
  id: string;
  title: string;
  institution: string;
  author?: string;
  year: string;
  abstract: string;
  category: LibraryCategory;
  speciesRelated: string[];
  subject: string;
  type: MaterialType;
  url: string;
  hasPdf: boolean;
  hasVideo: boolean;
  state?: string;
}

export const libraryCategories: { id: LibraryCategory; name: string }[] = [
  { id: 'aquicultura', name: 'Aquicultura' },
  { id: 'qualidade-agua', name: 'Qualidade da Água' },
  { id: 'alimentacao', name: 'Alimentação' },
  { id: 'sanidade', name: 'Sanidade e Doenças' },
  { id: 'manejo', name: 'Manejo' },
  { id: 'reproducao', name: 'Reprodução' },
  { id: 'construcao-viveiros', name: 'Construção e Preparo de Viveiros' },
  { id: 'especies', name: 'Espécies Cultivadas' },
  { id: 'sustentabilidade', name: 'Sustentabilidade' },
  { id: 'legislacao', name: 'Legislação' },
  { id: 'videos', name: 'Materiais em Vídeo' },
];

export const libraryItems: LibraryItem[] = [
  {
    id: 'lib-001',
    title: 'Cultivo do tambaqui no Amazonas',
    institution: 'Embrapa Amazônia Ocidental',
    author: 'Izel, A.C.U.; Crescencio, R.; O\'Sullivan, F.L.A.; Chagas, E.C.; Boijink, C.L.',
    year: '2014',
    abstract:
      'Livro técnico completo sobre o cultivo de tambaqui, abordando escolha da área, construção de tanques, abastecimento de água, alevinos, recria, engorda, alimentação, qualidade da água, sanidade, despesca, comercialização e licença ambiental.',
    category: 'especies',
    speciesRelated: ['tambaqui'],
    subject: 'Cultivo de tambaqui',
    type: 'manual',
    url: 'https://embrapa.br/busca-de-publicacoes/-/publicacao/1001080/cultivo-do-tambaqui-no-amazonas',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-011',
    title: 'Levantamento da atuação da Embrapa em pesquisa, desenvolvimento e transferência de tecnologia nas áreas de pesca e aquicultura',
    institution: 'Embrapa Pesca e Aquicultura',
    year: '2015',
    abstract:
      'Documento técnico que mapeia as pesquisas da Embrapa em pesca e aquicultura, incluindo as espécies trabalhadas (como tambaqui, pirarucu, tilápia e cachara), as tecnologias desenvolvidas e as unidades envolvidas.',
    category: 'aquicultura',
    speciesRelated: ['pirarucu', 'tambaqui', 'cachara', 'tilapia'],
    subject: 'Pesquisa e desenvolvimento em aquicultura',
    type: 'manual',
    url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1011445/1/SD11.pdf',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-023',
    title: 'Cultivo do pirarucu (Arapaima gigas) em viveiro escavado',
    institution: 'Embrapa Acre',
    author: 'Pereira-Filho, M.; Cavero, B.A.S.; Roubach, R.; Ituassú, D.R.; Gandra, A.L.; Crescencio, R.',
    year: '2003',
    abstract:
      'Avalia o desempenho de juvenis de pirarucu em criação intensiva em viveiros escavados, com dados de crescimento, conversão alimentar e produtividade ao longo de 12 meses de cultivo.',
    category: 'especies',
    speciesRelated: ['pirarucu'],
    subject: 'Cultivo de pirarucu',
    type: 'artigo',
    url: 'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/502635/cultivo-do-pirarucu-arapaima-gigas-em-viveiro-escavado',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-024',
    title: 'Manual de piscicultura familiar em viveiros escavados',
    institution: 'Embrapa Pesca e Aquicultura',
    author: 'Lima, A.F. et al.',
    year: '2024',
    abstract:
      'Manual técnico sobre planejamento inicial de uma piscicultura, construção e preparação de viveiros escavados, produção de peixes, qualidade da água, manejo alimentar, saúde dos peixes, controle de custos e formas associativistas na piscicultura familiar.',
    category: 'construcao-viveiros',
    speciesRelated: [],
    subject: 'Piscicultura familiar em viveiros',
    type: 'manual',
    url: 'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1167143/manual-de-piscicultura-familiar-em-viveiros-escavados',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-025',
    title: 'Manual técnico de manipulação e conservação de pescado',
    institution: 'Embrapa Agroindústria de Alimentos',
    author: 'Cribb, A.Y.; Seixas Filho, J.T.; Mello, S.C.R.P.',
    year: '2018',
    abstract:
      'Manual técnico sobre manipulação, conservação e transporte do pescado, abordando qualidade, segurança alimentar, redução de perdas na cadeia do pescado e derivados comestíveis.',
    category: 'manejo',
    speciesRelated: [],
    subject: 'Manipulação e conservação de pescado',
    type: 'manual',
    url: 'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1110125/manual-tecnico-de-manipulacao-e-conservacao-de-pescado',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-026',
    title: 'Criação de tambaquis',
    institution: 'Embrapa Amazônia Oriental',
    author: 'Corrêa, R.O.; Sousa, A.R.B.; Martins Junior, H.',
    year: '2018',
    abstract:
      'Cartilha com orientações sobre a criação de tambaqui: ciclo de criação, qualidade da água, densidade de estocagem e manejo alimentar, com exemplo de cálculo da ração por faixa de peso.',
    category: 'especies',
    speciesRelated: ['tambaqui'],
    subject: 'Criação de tambaqui',
    type: 'cartilha',
    url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1094579/1/CriacaodeTambaquisAINFO.pdf',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-027',
    title: 'Boas práticas para a produção de tambaqui em tanques-rede: da implantação à despesca',
    institution: 'Embrapa Amapá',
    author: 'Tavares-Dias, M. et al.',
    year: '2018',
    abstract:
      'Folheto sobre a implantação da piscicultura em tanques-rede, qualidade da água, manejo alimentar e sanitário e cuidados na despesca do tambaqui.',
    category: 'manejo',
    speciesRelated: ['tambaqui'],
    subject: 'Cultivo de tambaqui em tanques-rede',
    type: 'cartilha',
    url: 'https://www.embrapa.br/pesca-e-aquicultura/busca-de-publicacoes/-/publicacao/1099117/boas-praticas-para-a-producao-de-tambaqui-em-tanques-rede-da-implantacao-a-despesca',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-028',
    title: 'Caracterização da cadeia produtiva da tilápia nos principais polos de produção do Brasil',
    institution: 'Embrapa Pesca e Aquicultura',
    author: 'Pedroza Filho, M.X.; Ribeiro, V.S.; Rocha, H.S.; Ummus, M.E.; Vale, T.M. do',
    year: '2020',
    abstract:
      'Análise da cadeia produtiva da tilápia nos principais polos de produção do país, com problemas ambientais, canais de comercialização e gargalos do setor.',
    category: 'aquicultura',
    speciesRelated: ['tilapia'],
    subject: 'Cadeia produtiva da tilápia',
    type: 'cartilha',
    url: 'https://www.embrapa.br/busca-de-publicacoes/-/publicacao/1125358/caracterizacao-da-cadeia-produtiva-da-tilapia-nos-principais-polos-de-producao-do-brasil',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-029',
    title: 'Cartilha orientadora da qualidade das formas jovens de tilápia: avaliando alevinos e juvenis para a piscicultura',
    institution: 'Ministério da Pesca e Aquicultura',
    author: 'Superintendência Federal de Pesca e Aquicultura no Rio Grande do Sul (SFPA/RS)',
    year: '2023',
    abstract:
      'Cartilha orientadora para avaliar a qualidade de alevinos e juvenis de tilápia antes da compra e do povoamento dos viveiros, com orientações para o piscicultor.',
    category: 'aquicultura',
    speciesRelated: ['tilapia'],
    subject: 'Qualidade de alevinos e juvenis de tilápia',
    type: 'cartilha',
    url: 'https://www.gov.br/mpa/pt-br/Central_Conteudos/cartilhaorientadoradaqualidadedasformasjovensdatilapia.pdf',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-030',
    title: 'Discussão sobre a regularização da piscicultura brasileira: da produção à comercialização',
    institution: 'Embrapa Pesca e Aquicultura',
    year: '2016',
    abstract:
      'Discussão sobre os passos para regularizar a piscicultura, do licenciamento ambiental à comercialização do pescado, com os entraves enfrentados pelos produtores.',
    category: 'legislacao',
    speciesRelated: [],
    subject: 'Regularização da piscicultura',
    type: 'artigo',
    url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1058730/1/CNPASA2016doc31.pdf',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-031',
    title: 'Boas práticas sanitárias na piscicultura familiar: prevenção de doenças',
    institution: 'Embrapa Pesca e Aquicultura',
    author: 'Silva, W. de S. e; Lima, L. K. F. de; Sousa, D. N. de; Maciel-Honda, P. O.',
    year: '2024',
    abstract:
      'Cartilha sobre boas práticas de manejo e sanidade para prevenir doenças nos peixes da piscicultura familiar.',
    category: 'sanidade',
    speciesRelated: [],
    subject: 'Prevenção de doenças em peixes',
    type: 'cartilha',
    url: 'https://www.infoteca.cnptia.embrapa.br/infoteca/bitstream/doc/1166909/1/Cartilha-boas-praticas-2024.pdf',
    hasPdf: true,
    hasVideo: false,
  },
  {
    id: 'lib-032',
    title: 'Recomendações práticas para avaliação da qualidade da água na produção de tilápia em tanques-redes',
    institution: 'Embrapa Meio Ambiente',
    year: '2021',
    abstract:
      'Circular técnica com boas práticas de manejo para a criação de tilápia em tanques-rede em reservatórios rurais, incluindo a avaliação da qualidade da água.',
    category: 'qualidade-agua',
    speciesRelated: ['tilapia'],
    subject: 'Qualidade da água em tanques-rede',
    type: 'manual',
    url: 'https://www.embrapa.br/en/busca-de-publicacoes/-/publicacao/1131162/recomendacoes-praticas-para-avaliacao-da-qualidade-da-agua-na-producao-de-tilapia-em-tanques-redes',
    hasPdf: true,
    hasVideo: false,
  },
];

export function getLibraryBySpecies(speciesId: string): LibraryItem[] {
  return libraryItems.filter((item) => item.speciesRelated.includes(speciesId));
}

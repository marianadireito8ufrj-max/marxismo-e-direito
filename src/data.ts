export type Bloco =
  | { tipo: "secao" | "subsecao" | "paragrafo"; texto: string }
  | { tipo: "lista"; itens: string[] };

export type Aula = {
  numero: number;
  titulo: string;
  meta: string;
  publicada: boolean;
  blocos: Bloco[];
};

export const aulas: Aula[] = [
  {
    numero: 1,
    titulo: "Introdução à advocacia: natureza, função social e princípios",
    meta: "Prof.ª Thaís Freire de Vasconcellos • 27 de agosto de 2026",
    publicada: true,
    blocos: [
      { tipo: "secao", texto: "Visão geral da aula" },
      { tipo: "paragrafo", texto: "A aula apresenta os fundamentos institucionais da advocacia: sua natureza jurídica, a indispensabilidade à administração da justiça, a função social, o múnus público e os princípios éticos que orientam o exercício profissional." },
      { tipo: "secao", texto: "1. Natureza e função da advocacia" },
      { tipo: "subsecao", texto: "1.1 Base constitucional e legal" },
      { tipo: "paragrafo", texto: "O ponto de partida é o art. 133 da Constituição: o advogado é indispensável à administração da justiça e é inviolável por seus atos e manifestações no exercício da profissão, nos limites da lei. O art. 1º da Lei nº 8.906/1994 define como atividades privativas a postulação perante o Judiciário e os juizados especiais, além da consultoria, assessoria e direção jurídicas." },
      { tipo: "subsecao", texto: "1.2 Indispensabilidade, inviolabilidade e atividade privada" },
      { tipo: "lista", itens: [
        "A indispensabilidade é institucional, não absoluta: existem hipóteses legais de ius postulandi, como o habeas corpus e situações específicas previstas em lei.",
        "A inviolabilidade é relativa, porque o próprio texto constitucional a submete aos limites legais.",
        "O advogado exerce serviço público e função social, embora atue em atividade privada, nos termos do art. 2º, § 1º, do EAOAB."
      ] },
      { tipo: "subsecao", texto: "1.3 Dispensa de advogado: pontos de atenção" },
      { tipo: "paragrafo", texto: "No habeas corpus, a impetração não é atividade privativa de advogado. Nos Juizados Especiais Cíveis estaduais, a dispensa de advogado alcança causas de até 20 salários mínimos apenas em primeiro grau; em recurso para a Turma Recursal, a presença de advogado é obrigatória." },
      { tipo: "subsecao", texto: "1.4 Ausência de hierarquia" },
      { tipo: "paragrafo", texto: "O art. 6º do EAOAB estabelece que não há hierarquia nem subordinação entre advogados, magistrados e membros do Ministério Público. Autoridades, servidores e serventuários da justiça devem dispensar ao advogado tratamento compatível com a dignidade da profissão." },
      { tipo: "secao", texto: "2. Função social e múnus público" },
      { tipo: "subsecao", texto: "2.1 Três dimensões da função social" },
      { tipo: "lista", itens: [
        "Defesa da cidadania: tutela de direitos individuais e coletivos, inclusive contra o próprio Estado.",
        "Pacificação social: atuação na solução adequada dos conflitos, inclusive por mediação, conciliação e arbitragem.",
        "Defesa das instituições: a OAB atua na defesa da Constituição, da ordem jurídica e dos direitos humanos, conforme o art. 44, I, do EAOAB."
      ] },
      { tipo: "subsecao", texto: "2.2 O que significa múnus público" },
      { tipo: "paragrafo", texto: "Múnus público é um encargo ou dever imposto em razão de determinada função. O advogado não se torna servidor público: continua profissional liberal, mas seus atos no processo possuem relevância pública." },
      { tipo: "secao", texto: "3. Princípios fundamentais da advocacia" },
      { tipo: "subsecao", texto: "3.1 Art. 2º do Código de Ética e Disciplina" },
      { tipo: "paragrafo", texto: "O rol é exemplificativo e reúne valores como destemor, independência, competência, honestidade, decoro, veracidade, diligência, estudo e atuação construtiva. O material da aula propõe o mnemônico “DICA HONESTA” como recurso de memorização." },
      { tipo: "secao", texto: "4. Dispositivos essenciais" },
      { tipo: "lista", itens: [
        "Constituição Federal: art. 133.",
        "EAOAB — Lei nº 8.906/1994: arts. 1º, 2º, 6º e 44, I.",
        "Código de Ética e Disciplina: art. 2º.",
        "Lei nº 9.099/1995: regra de dispensa de advogado nos Juizados Especiais Cíveis, dentro dos limites legais."
      ] },
      { tipo: "secao", texto: "Para a próxima aula" },
      { tipo: "paragrafo", texto: "Atividade privativa, mandato e atos nulos: leitura dos arts. 1º a 6º do EAOAB, além da jurisprudência indicada no material da disciplina." }
    ]
  },
  {
    numero: 2,
    titulo: "Atividade privativa, mandato e atos nulos",
    meta: "Prof.ª Thaís Freire de Vasconcellos • 03 de setembro de 2026",
    publicada: true,
    blocos: [
      { tipo: "secao", texto: "Visão geral da aula" },
      { tipo: "paragrafo", texto: "A aula organiza os arts. 1º, 3º, 3º-A, 4º e 5º do EAOAB, com foco nas atividades privativas, na inscrição profissional, na nulidade de atos e no regime do mandato judicial." },
      { tipo: "secao", texto: "1. Atividades privativas de advocacia — art. 1º" },
      { tipo: "paragrafo", texto: "São privativas a postulação perante órgãos do Poder Judiciário e juizados especiais e as atividades de consultoria, assessoria e direção jurídicas. O alcance do inciso I deve ser compreendido à luz da ADI 1.127/DF." },
      { tipo: "subsecao", texto: "1.1 Parágrafos do art. 1º" },
      { tipo: "lista", itens: [
        "§ 1º: a impetração de habeas corpus não integra a atividade privativa de advocacia.",
        "§ 2º: atos e contratos constitutivos de pessoas jurídicas dependem de visto de advogado para registro, sob pena de nulidade.",
        "§ 3º: é vedada a divulgação de advocacia em conjunto com outra atividade."
      ] },
      { tipo: "secao", texto: "2. Exercício da advocacia e inscrição — arts. 3º e 3º-A" },
      { tipo: "paragrafo", texto: "O exercício da advocacia em território brasileiro e a denominação de advogado são privativos dos inscritos na OAB. O estagiário regularmente inscrito pode praticar atos nos limites do Regulamento Geral, em conjunto com advogado e sob responsabilidade deste. Integrantes da advocacia pública também se submetem ao Estatuto. O art. 3º-A qualifica os serviços profissionais de advogado como técnicos e singulares." },
      { tipo: "secao", texto: "3. Atos nulos — art. 4º" },
      { tipo: "paragrafo", texto: "São nulos os atos privativos praticados por pessoa não inscrita na OAB. Também são nulos os atos de advogado suspenso, licenciado ou que exerça atividade incompatível. No caso do advogado impedido, a nulidade se restringe ao âmbito do impedimento; fora dessa esfera, a atuação permanece válida." },
      { tipo: "subsecao", texto: "3.1 Quadro de memorização" },
      { tipo: "lista", itens: [
        "Não inscrito: atos nulos.",
        "Impedido: atos nulos apenas no âmbito do impedimento.",
        "Suspenso ou licenciado: atos nulos.",
        "Atividade incompatível: atos nulos."
      ] },
      { tipo: "secao", texto: "4. Mandato judicial — art. 5º" },
      { tipo: "paragrafo", texto: "O advogado postula em juízo ou fora dele mediante prova do mandato. Em situação urgente, pode atuar sem instrumento de mandato, devendo apresentá-lo no prazo de 15 dias, prorrogável por igual período. A procuração para o foro em geral autoriza os atos ordinários, ressalvados aqueles que exigem poderes especiais. Na renúncia, o advogado permanece representando o mandante por 10 dias após a notificação, salvo substituição anterior." },
      { tipo: "subsecao", texto: "4.1 Prazos essenciais" },
      { tipo: "lista", itens: [
        "Exibição do mandato após atuação urgente: 15 dias, prorrogáveis por mais 15.",
        "Permanência após a renúncia: 10 dias."
      ] },
      { tipo: "paragrafo", texto: "A troca entre os prazos de 15 e 10 dias é uma das pegadinhas mais recorrentes." },
      { tipo: "subsecao", texto: "4.2 Substabelecimento" },
      { tipo: "paragrafo", texto: "No substabelecimento com reserva de poderes, o substabelecente mantém sua atuação. Sem reserva, afasta-se da representação. O tema reaparece no estudo dos honorários e da responsabilidade profissional." },
      { tipo: "secao", texto: "5. Advocacia pública e advocacia pro bono" },
      { tipo: "paragrafo", texto: "A advocacia pública submete-se ao EAOAB e deve observar as regras de incompatibilidades e impedimentos. A advocacia pro bono consiste na prestação gratuita e eventual de serviços a pessoas sem recursos e não pode servir como instrumento de captação de clientela." },
      { tipo: "secao", texto: "6. Pontos de prova e dispositivos essenciais" },
      { tipo: "paragrafo", texto: "Atenção especial à nulidade restrita do advogado impedido, aos prazos de 15 e 10 dias, aos poderes especiais da procuração e à impossibilidade de o estagiário praticar isoladamente atos privativos. Base normativa: EAOAB, arts. 1º, 3º, 3º-A, 4º e 5º; ADI 1.127/DF; Regulamento Geral da OAB." },
      { tipo: "secao", texto: "Para a próxima aula" },
      { tipo: "paragrafo", texto: "Direitos e prerrogativas do advogado, com leitura integral dos dispositivos indicados no material da disciplina." }
    ]
  },
  {
    numero: 3,
    titulo: "Direitos e prerrogativas do advogado",
    meta: "Prof.ª Thaís Freire de Vasconcellos • 10 de setembro de 2026",
    publicada: true,
    blocos: [
      { tipo: "secao", texto: "Visão geral da aula" },
      { tipo: "paragrafo", texto: "A aula trata das prerrogativas profissionais como garantias funcionais ligadas à defesa do cliente e da sociedade, e não como privilégios pessoais do advogado." },
      { tipo: "secao", texto: "1. Prerrogativa não é privilégio" },
      { tipo: "paragrafo", texto: "As prerrogativas existem para viabilizar o exercício independente da defesa. Por isso, não são benefícios pessoais livremente negociáveis ou renunciáveis; integram a proteção institucional da advocacia." },
      { tipo: "secao", texto: "2. Direitos gerais decorrentes da função" },
      { tipo: "paragrafo", texto: "O art. 6º do EAOAB afasta qualquer hierarquia ou subordinação entre advogados, magistrados e membros do Ministério Público. A advocacia também deve receber tratamento compatível com a dignidade da profissão e condições adequadas de trabalho." },
      { tipo: "secao", texto: "3. Inviolabilidade do escritório — art. 7º, II" },
      { tipo: "paragrafo", texto: "A inviolabilidade alcança o local e os instrumentos de trabalho, bem como correspondências escrita, eletrônica, telefônica e telemática relacionadas ao exercício profissional. Não é absoluta: a quebra depende dos requisitos cumulativos do art. 7º, § 6º." },
      { tipo: "subsecao", texto: "3.1 Busca e apreensão: requisitos cumulativos" },
      { tipo: "lista", itens: [
        "Indícios de autoria e materialidade de crime cometido pelo próprio advogado.",
        "Decisão judicial motivada.",
        "Mandado específico e pormenorizado.",
        "Demonstração de que a prova não pode ser obtida por outro meio.",
        "Presença de representante da OAB e proteção dos documentos, mídias e objetos pertencentes aos clientes."
      ] },
      { tipo: "secao", texto: "4. Acesso, ingresso e vista de autos" },
      { tipo: "paragrafo", texto: "O art. 7º assegura ingresso em repartições e órgãos de justiça, acesso a autos e investigações já documentadas e retirada de autos nos limites legais. O defensor pode examinar elementos já documentados em procedimentos investigatórios que interessem à defesa." },
      { tipo: "subsecao", texto: "4.1 Súmula Vinculante 14 do STF" },
      { tipo: "paragrafo", texto: "O direito de acesso alcança os elementos de prova já documentados no procedimento investigatório e relacionados ao exercício da defesa. Não se estende, por essa regra, às diligências ainda em andamento." },
      { tipo: "secao", texto: "5. Prisão do advogado — art. 7º, IV e V" },
      { tipo: "paragrafo", texto: "Antes do trânsito em julgado, a regra legal prevê recolhimento em sala de Estado Maior e, na falta, prisão domiciliar. Em flagrante por motivo ligado ao exercício profissional, a prisão somente é admitida na hipótese legal de crime inafiançável. A ocorrência deve ser comunicada à OAB." },
      { tipo: "secao", texto: "6. Palavra, sustentação oral e comunicação com cliente preso" },
      { tipo: "paragrafo", texto: "O advogado possui prerrogativas de sustentação oral, uso da palavra pela ordem e reclamação contra a inobservância de normas. Pode comunicar-se pessoal e reservadamente com cliente preso, mesmo sem procuração e ainda que o preso seja considerado incomunicável." },
      { tipo: "secao", texto: "7. Imunidade profissional e responsabilidade" },
      { tipo: "paragrafo", texto: "A imunidade do art. 7º, § 2º, alcança injúria e difamação praticadas no exercício da atividade, mas não calúnia. Também não exclui responsabilidade disciplinar. Pelo art. 32, o advogado responde subjetivamente por dolo ou culpa quando excede os limites legais; a obrigação profissional é de meio, e não de resultado." },
      { tipo: "secao", texto: "8. Prerrogativas da advogada — art. 7º-A" },
      { tipo: "paragrafo", texto: "O Estatuto prevê garantias específicas para gestantes, lactantes, adotantes e advogadas que deram à luz, incluindo preferência em sustentações e audiências, condições de acesso e hipóteses legais de suspensão de prazos quando a advogada for a única patrona." },
      { tipo: "secao", texto: "9. Tutela penal e desagravo público" },
      { tipo: "paragrafo", texto: "O art. 7º-B criminaliza a violação de determinadas prerrogativas. O desagravo público é direito do advogado ofendido no exercício profissional e dever institucional da OAB, podendo transcender o interesse individual quando a ofensa atingir a advocacia como instituição." },
      { tipo: "secao", texto: "10. Dispositivos essenciais" },
      { tipo: "paragrafo", texto: "EAOAB: arts. 6º, 7º, 7º-A, 7º-B e 31 a 33. Jurisprudência e legislação de apoio: Súmula Vinculante 14, ADI 1.127 e as alterações legislativas indicadas no material da aula." }
    ]
  },
  {
    numero: 4,
    titulo: "Sociedade de advogados, honorários e sigilo profissional",
    meta: "Prof.ª Thaís Freire de Vasconcellos • 2026.2",
    publicada: true,
    blocos: [
      { tipo: "secao", texto: "Visão geral da aula" },
      { tipo: "paragrafo", texto: "A aula é organizada em três blocos: sociedade de advogados, honorários advocatícios e sigilo profissional. O eixo normativo principal está nos arts. 15 a 17 e 22 a 26 do EAOAB, além dos dispositivos do Código de Ética indicados no material." },
      { tipo: "secao", texto: "1. Sociedade de advogados" },
      { tipo: "subsecao", texto: "1.1 Formas societárias admitidas — art. 15" },
      { tipo: "paragrafo", texto: "O EAOAB admite sociedade simples de prestação de serviços de advocacia e sociedade unipessoal de advocacia. A natureza não mercantil da profissão afasta formas empresárias e tipos incompatíveis com o Estatuto." },
      { tipo: "subsecao", texto: "1.2 Registro e personalidade jurídica" },
      { tipo: "paragrafo", texto: "O registro é feito no Conselho Seccional da OAB da base territorial da sede e possui natureza constitutiva. A personalidade jurídica da sociedade de advogados nasce com esse registro, e não com arquivamento em Junta Comercial ou Registro Civil de Pessoas Jurídicas." },
      { tipo: "subsecao", texto: "1.3 Sociedade e capacidade postulatória" },
      { tipo: "paragrafo", texto: "A sociedade se submete ao Código de Ética no que couber, mas não possui capacidade postulatória própria: o mandato é outorgado ao advogado, pessoa física, ainda que a sociedade seja indicada no instrumento." },
      { tipo: "subsecao", texto: "1.4 Pluralidade societária, filiais e conflitos" },
      { tipo: "paragrafo", texto: "A vedação de integrar mais de uma sociedade, constituir mais de uma unipessoal ou combinar ambas é territorial e se refere à mesma base do Conselho Seccional. Filiais em outras Seccionais são possíveis mediante os registros exigidos. O conflito de interesses de um sócio projeta efeitos sobre os demais integrantes da sociedade." },
      { tipo: "subsecao", texto: "1.5 Nome, composição e responsabilidade" },
      { tipo: "paragrafo", texto: "A sociedade não pode adotar características empresárias, denominação de fantasia, objeto social estranho à advocacia ou sócio não inscrito ou totalmente proibido de advogar. O nome de sócio falecido pode permanecer quando presentes os requisitos legais. Pelo art. 17, a sociedade responde primariamente e o sócio responde subsidiariamente e de forma ilimitada pelos danos profissionais causados a clientes." },
      { tipo: "secao", texto: "2. Honorários advocatícios" },
      { tipo: "subsecao", texto: "2.1 Espécies e cumulação — art. 22" },
      { tipo: "paragrafo", texto: "Há três espécies principais: honorários convencionados, arbitrados judicialmente e sucumbenciais. As espécies podem cumular-se. Os sucumbenciais pertencem ao advogado, que possui direito autônomo de execução, conforme o art. 23 do EAOAB." },
      { tipo: "subsecao", texto: "2.2 Dativos, arbitramento e destaque" },
      { tipo: "paragrafo", texto: "Na falta de Defensoria Pública, o advogado dativo pode ser nomeado e remunerado pelo Estado segundo os parâmetros aplicáveis. Quando não há estipulação adequada, os honorários podem ser arbitrados judicialmente. O contrato juntado antes da expedição de mandado de levantamento ou precatório permite o destaque dos honorários contratuais nos termos legais." },
      { tipo: "subsecao", texto: "2.3 Escalonamento e prazo de cobrança" },
      { tipo: "paragrafo", texto: "O Estatuto prevê, de forma supletiva, pagamento em três parcelas de um terço, salvo estipulação em contrário. A pretensão de cobrança de honorários prescreve em cinco anos, com termo inicial variável conforme a hipótese prevista no art. 25." },
      { tipo: "subsecao", texto: "2.4 Substabelecimento e honorários" },
      { tipo: "paragrafo", texto: "O substabelecido com reserva de poderes não pode cobrar honorários sem a intervenção do substabelecente, ressalvada a hipótese de contrato próprio com o cliente. Sem reserva, a relação de representação é transferida integralmente." },
      { tipo: "subsecao", texto: "2.5 Disciplina ética da fixação" },
      { tipo: "paragrafo", texto: "A fixação deve observar moderação, complexidade, tempo de trabalho, valor da causa, condição econômica do cliente, experiência profissional e demais critérios do Código de Ética. O material destaca a vedação ao aviltamento dos honorários e à captação de clientela por preços incompatíveis com a dignidade profissional." },
      { tipo: "subsecao", texto: "2.6 Quota litis" },
      { tipo: "paragrafo", texto: "A cláusula quota litis é admitida, desde que prevista por escrito e submetida aos limites éticos de moderação. Não pode comprometer a independência profissional nem funcionar como mecanismo de mercantilização da advocacia." },
      { tipo: "secao", texto: "3. Sigilo profissional" },
      { tipo: "subsecao", texto: "3.1 Natureza e abrangência" },
      { tipo: "paragrafo", texto: "O sigilo é simultaneamente direito e dever do advogado. Abrange informações verbais, documentos, mídias, anotações e comunicações obtidas em razão da relação profissional, independentemente de pedido expresso do cliente." },
      { tipo: "subsecao", texto: "3.2 Abrangência temporal e subjetiva" },
      { tipo: "paragrafo", texto: "O dever persiste após o término do contrato e mesmo depois do encerramento da atividade profissional. Também alcança estagiários, secretários e demais colaboradores que tenham acesso às informações em razão do trabalho no escritório." },
      { tipo: "subsecao", texto: "3.3 Sigilo em juízo" },
      { tipo: "paragrafo", texto: "O advogado pode e deve recusar-se a depor como testemunha sobre fatos protegidos pelo sigilo profissional, ainda que intimado. O sigilo é prerrogativa e dever, e não simples faculdade." },
      { tipo: "subsecao", texto: "3.4 Exceções ao dever de sigilo" },
      { tipo: "paragrafo", texto: "O material organiza as exceções em torno de autorização expressa do cliente, uso para pesquisa ou ensino com anonimização efetiva e defesa própria em processo administrativo, criminal ou ético-disciplinar, além da hipótese excepcional do art. 36 do CED. A revelação deve ser sempre restrita ao necessário." },
      { tipo: "subsecao", texto: "3.5 Infração disciplinar" },
      { tipo: "paragrafo", texto: "Violar, sem justa causa, sigilo profissional constitui infração disciplinar. A expressão “sem justa causa” é central: as hipóteses legalmente admitidas funcionam como fundamento para afastar a ilicitude disciplinar da revelação." },
      { tipo: "secao", texto: "4. Síntese para revisão" },
      { tipo: "lista", itens: [
        "Duas formas societárias principais: simples pluripessoal e unipessoal.",
        "Registro na OAB é constitutivo.",
        "A sociedade não possui capacidade postulatória própria.",
        "Responsabilidade do sócio: subsidiária e ilimitada nos termos do art. 17.",
        "Honorários contratuais, arbitrados e sucumbenciais podem cumular-se.",
        "Prescrição da cobrança: cinco anos.",
        "Sigilo profissional persiste após o fim da relação e só admite quebra nas hipóteses excepcionais previstas."
      ] }
    ]
  },
  ...Array.from({ length: 12 }, (_, index) => ({
    numero: index + 5,
    titulo: "Em preparação",
    meta: "",
    publicada: false,
    blocos: [] as Bloco[]
  }))
];

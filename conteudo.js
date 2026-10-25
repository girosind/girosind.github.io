/* Conteúdo público do GIRO SINDEGTUR-SP.
   Edite somente informações destinadas aos visitantes. Nunca inclua
   nomes, telefones particulares ou a escala administrativa neste arquivo. */
window.GIRO_CONTEUDO = {
  valorCaminhada: 50,
  // Único e-mail para consultas e pedidos do projeto.
  contatoEmail: 'giro.sindegtur@gmail.com',
  // Número ilustrativo, intencionalmente inválido para não alcançar terceiros.
  contatoTelefone: '+55 11 9XXXX-XXXX',
  contatoWhatsAppLink: 'https://wa.me/55119XXXXXXXX',
  pontoDeEncontro: 'Galeria R. Monteiro — Rua 24 de Maio, 77, República, São Paulo',
  /* Bloqueios adicionais do projeto, além de domingos e feriados de São Paulo.
     As vésperas de Natal e Ano Novo se repetem em todos os anos. */
  datasSemOperacao: ['2026-12-24', '2026-12-31'],
  // Títulos públicos da aba 4 Escala Oficial (dezembro/2026).
  // Ordem de cada par: manhã 9h40, tarde 14h10. Sem nomes de profissionais.
  programacaoDezembro2026: {
    '01': ['Giro por Sampa', 'Histórias que o Centro Conta'],
    '02': ['Histórias que o Centro Conta', 'Igrejas católicas do Centro Histórico'],
    '03': ['Tour Igrejas Históricas do Centro de SP', 'O Conde do Ipiranga'],
    '04': ['Histórias que o Centro Conta', 'Os Edifícios Contam a História de São Paulo'],
    '05': ['Metrô: a cidade subterrânea', 'Histórias que o Centro Conta'],
    '07': ['Histórias que o Centro Conta', 'Histórias que o Centro Conta'],
    '08': ['Museus e Galerias de São Paulo', 'Histórias que o Centro Conta'],
    '09': ['São Paulo Multicultural', 'Parque do Jaraguá — Trilhas'],
    '10': ['Caminhos, Saberes e Sabores — Liberdade', 'Histórias que o Centro Conta'],
    '11': ['São Paulo em Manchetes', 'Histórias que o Centro Conta'],
    '12': ['Histórias que o Centro Conta', 'Histórias que o Centro Conta'],
    '14': ['Histórias que o Centro Conta', 'Histórias que o Centro Conta'],
    '15': ['Histórias que o Centro Conta', 'Giro por Sampa'],
    '16': ['Igrejas católicas do Centro Histórico', 'Histórias que o Centro Conta'],
    '17': ['O Conde do Ipiranga', 'Tour Igrejas Históricas do Centro de SP'],
    '18': ['Os Edifícios Contam a História de São Paulo', 'Histórias que o Centro Conta'],
    '19': ['Histórias que o Centro Conta', 'Metrô: a cidade subterrânea'],
    '21': ['Histórias que o Centro Conta', 'Histórias que o Centro Conta'],
    '22': ['Histórias que o Centro Conta', 'Museus e Galerias de São Paulo'],
    '23': ['Parque do Jaraguá — Trilhas', 'São Paulo Multicultural'],
    '26': ['Histórias que o Centro Conta', 'Histórias que o Centro Conta'],
    '28': ['Histórias que o Centro Conta', 'Histórias que o Centro Conta'],
    '29': ['Giro por Sampa', 'Histórias que o Centro Conta'],
    '30': ['Histórias que o Centro Conta', 'Igrejas católicas do Centro Histórico']
  },
  fotos: {
    'São Paulo em Manchetes': 'assets/sao-paulo-em-manchetes-ilustracao.png',
    'Caminhos, Saberes e Sabores — Liberdade': 'assets/photo-003.jpg',
    'Parque do Jaraguá — Trilhas': 'assets/photo-009.jpg',
    'Metrô: a cidade subterrânea': 'assets/photo-005.jpg',
    'Os Edifícios Contam a História de São Paulo': 'assets/photo-004.jpg',
    'São Paulo Multicultural': 'assets/photo-003.jpg',
    'Tour Igrejas Históricas do Centro de SP': 'assets/photo-000.jpg',
    'Igrejas católicas do Centro Histórico': 'assets/photo-000.jpg',
    'Histórias que o Centro Conta': 'assets/photo-000.jpg'
  },
  // Códigos públicos das 24 experiências. Nenhum cadastro pessoal é publicado.
  fotosPorCodigo: {
    'e01': 'assets/experiencias/e01.jpg',
    'e02': 'assets/experiencias/e02.jpg',
    'e03': 'assets/experiencias/e03.jpg',
    'e04': 'assets/experiencias/e04.jpg',
    'e05': 'assets/experiencias/e05.jpg',
    'e06': 'assets/experiencias/e06.jpg',
    'e07': 'assets/experiencias/e07.jpg',
    'e08': 'assets/experiencias/e08.png',
    'e09': 'assets/experiencias/e09.jpg',
    'e10': 'assets/experiencias/e10.jpg',
    'e11': 'assets/experiencias/e11.jpg',
    'e12': 'assets/experiencias/e12.jpg',
    'e13': 'assets/experiencias/e13.jpg',
    'e14': 'assets/experiencias/e14.jpg',
    'e15': 'assets/experiencias/e15.jpg',
    'e16': 'assets/experiencias/e16.jpg',
    'e17': 'assets/experiencias/e17.jpg',
    'e18': 'assets/experiencias/e18.jpg',
    'e19': 'assets/experiencias/e19.jpg',
    'e20': 'assets/experiencias/e20.jpg',
    'e21': 'assets/sao-paulo-em-manchetes-ilustracao.png',
    'e22': 'assets/experiencias/e22.jpg',
    'e23': 'assets/experiencias/e23.jpg',
    'e24': 'assets/experiencias/e24.jpg'
  },
  // Enquadramento da fotografia sem alterar o original. Primeiro valor:
  // horizontal (0%=esquerda; 100%=direita). Segundo: vertical (0%=alto; 100%=baixo).
  // Acrescente o caminho de qualquer foto e ajuste os dois percentuais.
  posicoesFotos: {
    'assets/experiencias/e08.png': '50% 52%',
    'assets/experiencias/e07.jpg': '50% 56%',
    'assets/photo-003.jpg': '50% 48%',
    'assets/atrativos/parque-do-jaragua.jpg': '50% 48%'
  },
  descricoes: {
    'São Paulo em Manchetes': 'Entre notícias, personagens e acontecimentos reais, um convite para revisitar o Centro de São Paulo pelas histórias que já foram manchete.',
    'Caminhos, Saberes e Sabores — Liberdade': 'Da memória negra às influências orientais, descubra histórias, tradições, comércio e sabores que convivem na Liberdade.',
    'Parque do Jaraguá — Trilhas': 'Caminhos e paisagens naturais do Parque do Jaraguá. O percurso e o nível de dificuldade serão informados antes da confirmação.',
    'Metrô: a cidade subterrânea': 'Um olhar para São Paulo a partir do metrô, suas estações e das histórias de quem vive a cidade em movimento.',
    'Os Edifícios Contam a História de São Paulo': 'Uma caminhada entre o Centro Histórico e o Centro Novo para observar como os edifícios guardam transformações e curiosidades da cidade.',
    'São Paulo Multicultural': 'Uma experiência pelas influências culturais e histórias de imigração presentes na Liberdade e no Bom Retiro.',
    'Tour Igrejas Históricas do Centro de SP': 'Conheça igrejas históricas do Centro e as histórias que ajudam a compreender a formação de São Paulo.',
    'Igrejas católicas do Centro Histórico': 'Uma caminhada que conecta igrejas católicas e acontecimentos da história do Centro de São Paulo.',
    'Histórias que o Centro Conta': 'O Centro guarda histórias nas ruas, nos edifícios e nos encontros. Venha descobrir a cidade pelo olhar de quem conhece seus caminhos.',
    'Giro por Sampa': 'Um passeio cultural pelo Centro de São Paulo, com descobertas e curiosidades ao longo do caminho.',
    'O Conde do Ipiranga': 'Conheça o legado de José Vicente de Azevedo por meio dos lugares ligados à sua atuação no Ipiranga. Ponto de saída a confirmar.',
    'Museus e Galerias de São Paulo': 'Uma proposta de visita a museus, galerias e espaços culturais, com roteiro ajustado à programação da cidade.'
  },
  sobre: {
    titulo: 'Sobre o GIRO SINDEGTUR-SP',
    paragrafos: [
      'Um passeio pode começar pela vontade de conhecer um lugar e terminar com uma boa história para contar. Entre uma coisa e outra, está o guia de turismo: alguém que pesquisa, cuida dos detalhes e compartilha o prazer de descobrir.',
      'O GIRO SINDEGTUR-SP nasce para valorizar esse trabalho e abrir caminhos para quem vive dele. É um projeto do Sindicato dos Guias de Turismo do Estado de São Paulo que reúne profissionais e aproxima moradores, turistas e parceiros em passeios pela cidade e pelo estado.',
      'Quando essa união acontece, todo mundo ganha, especialmente quem passeia, com mais possibilidades de escolha e gente preparada para receber bem.',
      'Venha passear, indique ou seja parceiro. Faça parte do GIRO SINDEGTUR-SP e ajude a construir novas histórias com a gente.',
      'São Paulo tem muitas histórias. Descubra a sua próxima.'
    ]
  },
  novidades: {
    city: {
      titulo: 'City Tour',
      mensagem: 'Novas voltas por São Paulo estão a caminho! Por enquanto, nosso ônibus está na garagem das boas ideias, enquanto preparamos experiências para descobrir a cidade. Em breve, mais informações.',
      imagem: 'assets/photo-008.jpg',
      /* Para divulgar futuramente: [{ titulo: 'Conheça o circuito', url: 'arquivos/city-tour.pdf' }] */
      links: []
    },
    excursoes: {
      titulo: 'Excursões',
      mensagem: 'Tem passeio que vai mais longe! Estamos preparando novas experiências para quem quer pegar a estrada e descobrir outros destinos conosco. Em breve, mais informações.',
      imagem: 'assets/photo-009.jpg',
      links: []
    },
    eventos: {
      titulo: 'Passeios para sua turma',
      mensagem: 'Já pensou em reunir a família, os amigos ou os colegas para um passeio conosco? Um domingo diferente, uma comemoração ou um passeio em outro horário: sua turma escolhe a ocasião, e nós conversamos sobre as possibilidades de uma experiência especial pela cidade. Entre em contato para combinarmos os detalhes. Propostas sujeitas à disponibilidade e ao agendamento prévio.',
      imagem: 'assets/photo-007.jpg',
      links: []
    }
  }
};

/**
 * Brazilian Portuguese for the site chrome: sidebar, navigation, footers,
 * playground, and the diagram components. Keys are the exact English source
 * strings — see LanguageContext for how the lookup works.
 */
export const ptUi: Record<string, string> = {
    // ── Sidebar / bio ────────────────────────────────────────────────
    'Senior Product Designer working across AI workflows, design systems, and production code.':
        'Senior Product Designer atuando entre workflows de IA, design systems e código em produção.',
    '10+ years of experience.': '10+ anos de experiência.',
    'He/Him.': 'Ele/Dele.',

    // Skill tags and their tooltips
    'Design to Code': 'Design para Código',
    'User Research': 'Pesquisa com Usuários',
    'Fast Prototyping': 'Prototipagem Rápida',
    'Music Production': 'Produção Musical',

    // Contact row
    'Click to copy': 'Clique para copiar',
    'Email': 'E-mail',
    'Copied': 'Copiado',

    // ── Hero ─────────────────────────────────────────────────────────
    'Leading how designers work end to end with AI.':
        'Liderando como designers trabalham de ponta a ponta com IA.',
    // The desktop hero breaks the headline over two lines. Each half is
    // translated on its own so the line break lands somewhere sensible in
    // Portuguese — read the two entries together, not in isolation.
    'Leading how designers work': 'Liderando como designers trabalham',
    'end to end with AI.': 'de ponta a ponta com IA.',
    'From research to prototyping and shipped code, I help teams to use AI effectively, with humans in the loop.':
        'Da pesquisa ao protótipo e ao código em produção, ajudo times a usar IA de forma eficaz, com humanos in the loop.',
    'Currently at @': 'Atualmente na @',

    // ── Navigation ───────────────────────────────────────────────────
    'Back': 'Voltar',
    'Current Role': 'Cargo Atual',
    'Explore other case studies': 'Explore outros cases',
    'Play': 'Reproduzir',
    'Pause': 'Pausar',
    'Previous': 'Anterior',
    'Next': 'Próximo',
    'Restart': 'Recomeçar',
    'Previous slide': 'Slide anterior',
    'Next slide': 'Próximo slide',
    'Hypothesis 1': 'Hipótese 1',
    'Confidence': 'Confiança',
    'Pull request': 'Pull request',
    'Open': 'Aberto',
    'Slide {current} of {total}': 'Slide {current} de {total}',
    'Image {n}': 'Imagem {n}',

    // ── Personal projects cards ──────────────────────────────────────
    'This is where I keep some personal projects.': 'Aqui é onde eu guardo alguns projetos pessoais.',
    'Explore other personal projects.': 'Explore outros projetos pessoais.',
    'Ongoing': 'Em andamento',
    'Speculative Design': 'Design Especulativo',
    'A device for transmitting experiences between people.': 'Um dispositivo para transmitir experiências entre pessoas.',
    'Object Book': 'Livro-objeto',
    'A bilingual object book about memory and the Brazilian Military Dictatorship.':
        'Um livro-objeto bilíngue sobre memória e a ditadura militar brasileira.',
    'Side projects and free explorations.': 'Projetos paralelos e explorações livres.',

    // ── Brand carousel ───────────────────────────────────────────────
    'Some companies I\'ve already worked for': 'Algumas empresas para as quais já trabalhei',

    // ── Playground ───────────────────────────────────────────────────
    'Free explorations and personal interests. No strict brief, no stakeholders, just a mosaic of whatever I was curious about.':
        'Explorações livres e interesses pessoais. Sem briefing rígido, sem stakeholders, só um mosaico do que me deu curiosidade.',
    'Stella Timer, a no-frills meditation app created in React Native.':
        'Stella Timer, um app de meditação sem firulas criado em React Native.',
    'Hackathon 2024: Quizless Funnel, a team concept that replaces the onboarding quiz with a conversation.':
        'Hackathon 2024: Quizless Funnel, um conceito de time que substitui o quiz de onboarding por uma conversa.',
    'An online purchasing app for Renault\'s Kwid release in Brazil.':
        'Um app de compra online para o lançamento do Renault Kwid no Brasil.',
    'A parking payment flow for Brasília\'s international airport, built for the Inframerica app.':
        'Um fluxo de pagamento de estacionamento para o aeroporto internacional de Brasília, feito para o app da Inframerica.',
    'a platform for Latin American events in Europe.': 'uma plataforma de eventos latino-americanos na Europa.',
    'Mute video': 'Silenciar vídeo',
    'Unmute video': 'Ativar som do vídeo',
    'Play video': 'Reproduzir vídeo',
    'Meu KWID app — Histórias screen': 'App Meu KWID — tela de Histórias',
    'Meu KWID app — configurator and checkout flow': 'App Meu KWID — configurador e fluxo de checkout',
    'Inframerica app — QR code scan and parking payment screens':
        'App Inframerica — leitura de QR code e telas de pagamento de estacionamento',

    // ── Language switch ──────────────────────────────────────────────
    'Language': 'Idioma',
    'English': 'Inglês',
    'Portuguese': 'Português',

    // ── Diagram: current design process ──────────────────────────────
    'Current design/development process with AI': 'Processo atual de design/desenvolvimento com IA',
    'Designs + Implements': 'Desenha + Implementa',
    'Designer': 'Designer',
    'The designer owns the full implementation, designing and shipping directly in the codebase. Designers can prioritize and iterate without waiting on a handoff.':
        'O designer é dono da implementação inteira, desenhando e entregando direto no código. Designers conseguem priorizar e iterar sem esperar por um handoff.',
    'Code Review': 'Code Review',
    'Developer': 'Desenvolvedor',
    'A developer reviews the code quality. No design review needed. The designer already owns the intent and the output.':
        'Um desenvolvedor revisa a qualidade do código. Sem necessidade de design review: o designer já é dono da intenção e do resultado.',
    'Merged': 'Mergeado',
    'Designers can iterate freely before code review.': 'Designers podem iterar livremente antes do code review.',
    'No typical design review needed. The designer owns the intent and the output. Developers only review the code.':
        'Sem o design review tradicional. O designer é dono da intenção e do resultado. Desenvolvedores revisam apenas o código.',

    // ── Diagram: test panel (case slides) ────────────────────────────
    'Case walkthrough': 'Passo a passo do case',
    'Before': 'Antes',
    'After': 'Depois',
    'Emulated persona': 'Persona emulada',
    'One customer profile': 'Um perfil de cliente',
    'Expert reviewers': 'Revisores especialistas',
    'Accessibility, brand, content, interaction, UX': 'Acessibilidade, marca, conteúdo, interação, UX',
    'Accessibility': 'Acessibilidade',
    'Brand': 'Marca',
    'Content': 'Conteúdo',
    'Interaction': 'Interação',

    // ── Diagram: command flow ────────────────────────────────────────
    'Discover': 'Descobrir',
    'Define': 'Definir',
    'Prototype': 'Prototipar',
    'Validate': 'Validar',
    'Ship': 'Entregar em produção',
    'Pulls research, prior specs and product context into a synthesised set of insights, so a brief starts from evidence instead of a blank page.':
        'Reúne pesquisas, specs anteriores e contexto de produto num conjunto sintetizado de insights, para que o briefing comece a partir de evidência, e não de uma página em branco.',
    'Turns those insights into a framed design direction, interviewing you along the way to pressure-test whether the problem is worth solving.':
        'Transforma esses insights numa direção de design enquadrada, entrevistando você pelo caminho para testar se o problema vale a pena ser resolvido.',
    'Generates a production-quality prototype in minutes, across all nine brands, at free-form, balanced or strict fidelity.':
        'Gera um protótipo com qualidade de produção em minutos, nas nove marcas, em fidelidade livre, equilibrada ou estrita.',
    'Runs the prototype through emulated personas to surface usability issues before a single test session is scheduled.':
        'Roda o protótipo com personas emuladas para revelar problemas de usabilidade antes de agendar uma única sessão de teste.',
    'Implements the validated design directly in React and React Native production code, and opens the pull request for review.':
        'Implementa o design validado direto no código de produção em React e React Native, e abre o pull request para revisão.',

    // ── Diagram: Spec-Machine ────────────────────────────────────────
    'Spec-Machine · the repository at the center': 'Spec-Machine · o repositório no centro',
    'Spec-Machine as the central repository, connected to UX, Web, Data, and Mobile':
        'Spec-Machine como repositório central, conectado a UX, Web, Dados e Mobile',
    'Data': 'Dados',
    'Spec-Machine is the shared brain, the repository where every discipline contributes commands, skills, and context for AI to use across the company.':
        'A Spec-Machine é o cérebro compartilhado: o repositório onde cada disciplina contribui com comandos, skills e contexto para a IA usar em toda a empresa.',

    // ── Diagram: pet parent lifecycle ────────────────────────────────
    'Where I worked across the pet parent lifecycle': 'Onde atuei ao longo do ciclo de vida do tutor',
    'Growth': 'Aquisição',
    'The acquisition funnel: plans, goals and allergen questions, loading states, and social proof at the moments that decide a signup.':
        'O funil de aquisição: planos, perguntas sobre objetivos e alergias, estados de carregamento e prova social nos momentos que decidem uma assinatura.',
    'Activation': 'Ativação',
    'First delivery and pet profile setup, turning a checkout into a pet parent who understands what they bought.':
        'Primeira entrega e configuração do perfil do pet, transformando um checkout em um tutor que entende o que comprou.',
    'Retention': 'Retenção',
    'The member experience: delivery management, quick actions, pet navigation, and the add-ons store.':
        'A experiência de membro: gestão de entregas, ações rápidas, navegação por pet e a loja de adicionais.',
    'Cancellation': 'Cancelamento',
    'The save flow, offering the right alternative before pet parents leave, within strict compliance rules. Later adopted across brands.':
        'O fluxo de retenção, oferecendo a alternativa certa antes de o tutor sair, dentro de regras rígidas de compliance. Depois adotado por outras marcas.',
    'Reactivation': 'Reativação',
    'Winning back paused and canceled pet parents with reasons to return, offering the flexibility to tweak their plan as much as they need for their return box.':
        'Reconquistando tutores pausados e cancelados com motivos para voltar, oferecendo a flexibilidade de ajustar o plano o quanto for preciso para a caixa de retorno.',
    'Highlights': 'Destaques',
};

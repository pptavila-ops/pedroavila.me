/**
 * Brazilian Portuguese for the site chrome: sidebar, navigation, footers,
 * playground, and the diagram components. Keys are the exact English source
 * strings — see LanguageContext for how the lookup works.
 */
export const ptUi: Record<string, string> = {
    // ── Sidebar / bio ────────────────────────────────────────────────
    'Senior Product Designer working across AI workflows, design tooling, and production code.':
        'Senior Product Designer atuando entre workflows de IA, ferramentas de design e código em produção.',
    '9+ years of experience.': '9+ anos de experiência.',
    'He/Him.': 'Ele/Dele.',
    'He, him': 'Ele, dele',

    // Skill tags and their tooltips
    'Design to Code': 'Design para Código',
    'I close the gap between design and front-end engineering: turning design decisions into production-ready components and features, and enabling designers across the org to work directly in code instead of static tools.':
        'Eu fecho a lacuna entre design e engenharia front-end: transformo decisões de design em componentes e funcionalidades prontos para produção e capacito designers de toda a organização a trabalhar direto no código, em vez de ferramentas estáticas.',
    'I build interfaces and prototypes with Claude as a coding partner, and own the UX space for AI skills at HelloFresh, writing new skills and improving existing ones.':
        'Eu construo interfaces e protótipos com o Claude como parceiro de código e sou responsável pelo espaço de UX das skills de IA na HelloFresh, escrevendo novas skills e melhorando as existentes.',
    'Fast Prototyping': 'Prototipagem Rápida',
    'I help designers prototype in code, test ideas quickly, and share working prototypes in dedicated repositories.':
        'Eu ajudo designers a prototipar em código, testar ideias rapidamente e compartilhar protótipos funcionais em repositórios dedicados.',
    'I build and manage scalable component libraries and design tokens that keep teams aligned.':
        'Eu construo e mantenho bibliotecas de componentes escaláveis e design tokens que mantêm os times alinhados.',
    'I make design system components, prototyping workflows, and code delivery tools available to every designer in the org through guides, 101 sessions, and a culture that fosters curiosity instead of overwhelm.':
        'Eu disponibilizo componentes do design system, fluxos de prototipagem e ferramentas de entrega de código para todos os designers da organização por meio de guias, sessões introdutórias e uma cultura que estimula a curiosidade em vez do excesso.',
    'Music Production': 'Produção Musical',
    'I\'ve also been learning music production and experimenting with sounds and synthesizers I enjoy.':
        'Também venho aprendendo produção musical e experimentando com sons e sintetizadores que eu curto.',

    // Contact row
    'Click to copy': 'Clique para copiar',
    'Email': 'E-mail',
    'Copied': 'Copiado',

    // ── Hero ─────────────────────────────────────────────────────────
    'Leading design workflow transformation with AI':
        'Lidero a transformação do workflow de design com IA',
    // The desktop hero breaks the headline over two lines. Each half is
    // translated on its own so the line break lands somewhere sensible in
    // Portuguese — read the two entries together, not in isolation.
    'Leading design workflow': 'Lidero a transformação do',
    'transformation with AI': 'workflow de design com IA',
    'Currently @': 'Atualmente @',

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
    'Free Exploration': 'Exploração Livre',
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

    // ── Diagram: double diamond ──────────────────────────────────────
    'Where AI enters the design process': 'Onde a IA entra no processo de design',
    'Double diamond diagram showing the Discover, Define, Prototype, and Deliver phases':
        'Diagrama do duplo diamante mostrando as fases Descobrir, Definir, Prototipar e Entregar',
    'Discover': 'Descobrir',
    'Agents pull in prior specs, research, and product context before a brief is written.':
        'Agentes reúnem specs anteriores, pesquisas e contexto de produto antes mesmo de o briefing ser escrito.',
    'Define': 'Definir',
    'Agents help frame the design from research findings, interviewing you to pressure-test whether the idea makes sense.':
        'Agentes ajudam a enquadrar o design a partir dos achados de pesquisa, entrevistando você para testar se a ideia faz sentido.',
    'Prototype': 'Prototipar',
    'Agents generate prototypes and test them against synthetic personas: /create-prototype, /test-prototype.':
        'Agentes geram protótipos e os testam com personas sintéticas: /create-prototype, /test-prototype.',
    'Deliver': 'Entregar',
    'Agents implement designs directly in production code and prep pull requests for review: /design-change-web.':
        'Agentes implementam os designs direto no código de produção e preparam pull requests para revisão: /design-change-web.',
    'THE RIGHT THING': 'A COISA CERTA',
    'THE RIGHT WAY': 'DO JEITO CERTO',
    'AI shows up at every phase, not just at code time. Agents and skills sit inside each diamond, keeping the process divergent where it needs to explore and convergent where it needs to decide.':
        'A IA aparece em todas as fases, não só na hora de escrever código. Agentes e skills vivem dentro de cada diamante, mantendo o processo divergente onde ele precisa explorar e convergente onde precisa decidir.',

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
};

// Gear Assets
import nplay from '@/public/nplay.png';
import Sova from '@/public/sova.png';
import Rapoo from '@/public/rapoo.png';
import Headset from '@/public/headset.png';
import Asus from '@/public/asus.png';
import Arcano from '@/public/arcano.png';
import Chair from '@/public/chair.png';
import Buds from '@/public/xiaomibuds.png';
import Verbatim from '@/public/verbatim.png';
import Seagate from '@/public/seagate.png';
import Coluna from '@/public/coluna.png';

// About Assets
import Avatar from '@/public/avatar4.jpg';

export const gear = [
    {
        id: 1,
        name: 'Computador',
        brand: 'ASUS',
        model: 'x515ja-x515JA',
        image: Asus
    },
    {
        id: 2,
        name: 'Teclado mecânico',
        brand: 'NPlay',
        model: 'Conquer 3.0',
        image: nplay
    },
    {
        id: 3,
        name: 'Gaming Lapboard',
        brand: 'ROCCAT',
        model: 'Sova MK',
        image: Sova
    },
    {
        id: 4,
        name: 'Mouse Ergonômico',
        brand: 'Rapoo',
        model: 'MT705S',
        image: Rapoo
    },
    {
        id: 5,
        name: 'Headset',
        brand: 'AKG',
        model: 'K52',
        image: Headset
    },
    {
        id: 6,
        name: 'Microfone',
        brand: 'Arcano',
        model: 'AM-1',
        image: Arcano
    },
    {
        id: 7,
        name: 'Cadeira',
        brand: 'Alpha Gamer',
        model: 'Vega',
        image: Chair
    },
    {
        id: 8,
        name: 'Fone Auricular',
        brand: 'Xiaomi',
        model: 'Redmi Buds Lite 4',
        image: Buds
    },
    {
        id: 9,
        name: 'HD Externo',
        brand: 'Verbatim',
        model: 'HD External Verbatim 1TB',
        image: Verbatim
    },
    {
        id: 10,
        name: 'HD Externo',
        brand: 'Seagate',
        model: 'External Hard Drive 1TB',
        image: Seagate
    },
    {
        id: 11,
        name: 'Colunas Gaming',
        brand: 'Bazarão',
        model: 'Colunas Gaming USB 5.0 Laranjas',
        image: Coluna
    }
]

export const about = [
    {
        id: 1,
        name: 'Icaro Alves',
        description: (
            <>
                <p>
                    Sou um profissional com experiência em logística, focado em me especializar em Ciência de Dados e desenvolvimento Full Stack Python.
                </p>
                <p>
                    Minha jornada profissional começou com análises simples de recebimento no setor logístico, onde rapidamente evolui para liderar equipes na gestão de insumos.
                </p>
                <p>
                    Durante esse período, desenvolvi estratégias e previsões baseadas em dados de controle de estoque, colaborando com minha equipe para otimizar processos e melhorar a eficiência operacional.
                </p>
                <p>
                    Mais tarde, assumi um papel no setor de Transfer-Out, onde enfrentei o desafio de controlar o atraso dos carregamentos.
                </p>
                <p>
                    Nessa função, desenvolvi gráficos e indicadores para monitorar e antecipar problemas, resultando na capacidade de prever e antecipar em 5 dias os carregamentos posteriores.
                </p>
                <p>
                    Atualmente, estou residindo na cidade do Porto, Portugal, onde estou matriculado na Universidade Unopar, estudando Ciência de Dados.
                </p>
                <p>
                    Paralelamente, estou realizando o curso de desenvolvimento Full Stack Python pela Ebac, buscando aprofundar meu conhecimento em análise de dados e automação de tarefas.
                </p>
                <p>
                    Estou entusiasmado para aplicar essas habilidades em projetos futuros e contribuir para soluções inovadoras no campo da logística e além.
                </p>
            </>
        ),
        image: Avatar
    },
];  

export const stacks = [
    {
        id: 1,
        name: 'Python',
    },
    {
        id: 2,
        name: 'Excel',
    },
    {
        id: 3,
        name: 'Power BI',
    },
]

// Portfolio Assets
import Automation from '@/public/automation.jpg';
import DataViz from '@/public/data-viz.jpg';
import MachineLearning from '@/public/machine-learning.jpg';
import AutomateSystems from '@/public/sistema-gestão.jpg'

export const categories = [
    {
        id: 1,
        label: 'Automação',
        href: '/portfolio/automacao',
        description: 'Categoria de automação',
        image: Automation
    },
    {
        id: 2,
        label: 'Visualização de Dados',
        href: '/portfolio/visualizacao-de-dados',
        description: 'Categoria de visualização de dados',
        image: DataViz
    },
    {
        id: 3,
        label: 'Machine Learning',
        href: '/portfolio/machine-learning',
        description: 'Categoria de Machine Learning',
        image: MachineLearning
    },
    {
        id: 4,
        label: 'Sistema de Gestão de Recursos',
        href: '/portfolio/sistema-de-gestao',
        description: 'Categoria de sistema de gestão de recursos',
        image: AutomateSystems
    }
]

// Projects Assets 
import Converter from '@/public/converter.jpg';
import Organizer from '@/public/organizer.jpg';

export const automationProjects = [
    {
        id: 1,
        name: 'Conversor de imagens',
        description: (
            <>
                <p>Conversor de imagens para todos os formatos desejados.</p>
                <p>Desenvolvido em Python.</p>
                <p>Usando apelas as bibliotecas Pillow e OS nativas do próprio Python.</p>
            </>
        ),
        image: Converter,
        stacks: [
            'Python',
            'VS Code',        
            ],       
        href: 'https://github.com/icaroravelo/automacoes/tree/main/conversor_de_imagens',
    },
    {
        id: 2,
        name: 'Organizador de arquivos',
        description: (
            <>
                <p>Organizador rápido de arquivos dentro do computador.</p>
                <p>Movendo arquivos para dentro de pastas de acordo com a extensão.</p>
                <p>Deixando assim o computador com uma aparência mais clara e concisa de organização.</p>
            </>
        ),
        image: Organizer,
        stacks: [
            'Python',
            'VS Code',        
            ],       
        href: 'https://github.com/icaroravelo/automacoes/tree/main/organizador_de_arquivos',
    },
]

// Education Assets

export const educations = [
    {
        id: 1,
        name: 'Universidade Unopar',
        course: 'Ciência de Dados',
        status: 'Cursando',
        started: '2023',
        image: "",
    },
    {
        id: 2,
        name: 'EBAC',
        course: 'Desenvolvimento Full Stack Python',
        status: 'Cursando',
        started: '2024',
        image: "",
    }
]
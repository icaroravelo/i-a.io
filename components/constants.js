// Gear Assets
import nplay from '@/public/nplay.png';
import Sova from '@/public/sova.png';
import Rapoo from '@/public/rapoo.png';
import Headset from '@/public/headset.png';
import Asus from '@/public/asus.png';
import Arcano from '@/public/arcano.png';
import Chair from '@/public/chair.png';
import Buds from '@/public/xiaomibuds.png';

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
]
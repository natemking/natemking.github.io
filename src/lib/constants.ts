import type { Social, TechType, Work } from '@/lib/types';

export const emailAddress = 'natemking@gmail.com';

export const pageSections = ['about', 'work', 'contact'] as const;

export const focusBadges = [
    'Frontend',
    'React',
    'Next.JS',
    'Typescript',
    'Performance',
    'Architecture',
    'DX',
] as const;

const ioBadges: Record<string, TechType> = {
    aws: {
        name: 'AWS',
        url: 'https://custom-icon-badges.demolab.com/badge/AWS-%23FF9900.svg?logo=aws&logoColor=white',
    },
    azure: {
        name: 'MS Azure',
        url: 'https://img.shields.io/badge/Microsoft%20Azure-0089D6?logo=msazure&logoColor=white',
    },
    contentful: {
        name: 'Contentful',
        url: 'https://img.shields.io/badge/Contentful-2478CC?logo=contentful&logoColor=fff',
    },
    css: {
        name: 'CSS',
        url: 'https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff',
    },
    daisyUi: {
        name: 'DaisyUI',
        url: 'https://img.shields.io/badge/DaisyUI-5A0EF8?logo=daisyui&logoColor=fff',
    },
    html: {
        name: 'HTML',
        url: 'https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white',
    },
    javascript: {
        name: 'Javascript',
        url: 'https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000',
    },
    liferay: {
        name: 'VinU',
        url: 'https://img.shields.io/badge/Liferay-1F5784?style=flat&logoColor=white',
    },
    mui: {
        name: 'MUI',
        url: 'https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white',
    },
    next: {
        name: 'Next.JS',
        url: 'https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white',
    },
    openApi: {
        name: 'Open API',
        url: 'https://img.shields.io/badge/OpenAPI-6BA539?logo=openapiinitiative&logoColor=white',
    },
    prisma: {
        name: 'Prisma',
        url: 'https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white',
    },
    shadCn: {
        name: 'ShadCN',
        url: 'https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff',
    },
    tailwind: {
        name: 'Tailwind',
        url: 'https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white',
    },
    typescript: {
        name: 'Typescript',
        url: 'https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff'
    }
};

const {
    aws,
    azure,
    contentful,
    css,
    daisyUi,
    html,
    javascript,
    liferay,
    mui,
    next,
    openApi,
    prisma,
    shadCn,
    tailwind,
    typescript
} = ioBadges;

export const selectedWork: Work[] = [
    {
        appName: 'SCAG Dealer Portal',
        company: 'Metalcraft of Mayville',
        description:
            'Reengineered and modernized a legacy ASP.NET B2B dealer portal using Next.js, introducing caching layers to improve performance and scalability. Engineered a new commerce engine enabling dealers to order parts and whole goods, and integrated a PNC Bank payment system that doubled average payments within the first month post-launch. Added multiple new features enhancing both dealer and internal user experiences. Deployed on Azure with Entra integration for streamlined authentication and access management.',
        id: 1,
        isInternal: true,
        tech: [next, typescript, tailwind, shadCn, prisma, azure],
        year: 2025,
        url: 'https://www.scagdistributors.com'
    },
    {
        appName: 'ClaimPro',
        company: 'Metalcraft of Mayville',
        description:
            'Reengineered, rebuilt, and modernized legacy internal ASP.net/Java claims portal with Next.js, implementing caching for improved performance and scalability. Used server-side rendering and caching to improve client experience.',
        id: 2,
        isInternal: true,
        tech: [next, typescript, tailwind, shadCn, openApi],
        year: 2024,
    },
    {
        appName: 'MyCITC',
        company: 'Cook Inlet Tribal Council',
        description:
            'Led frontend development of a dual-role community services portal for Cook Inlet Tribal Council, enabling participants to access and manage services while providing staff with administrative tools and operational workflows. Built the application from the ground up using Next.js and Tailwind, developing a fully custom component system and integrating with backend APIs. Implemented secure authentication and role-based access control via Azure cloud services, and served as frontend team lead guiding architecture, standards, and feature delivery.',
        id: 3,
        isInternal: true,
        tech: [next, typescript, tailwind, daisyUi, openApi, azure],
        year: 2023,
        url: 'https://mycitc.com/'
    },
    {
        appName: 'When To Test',
        company: 'NIH RADx',
        description:
            'Led frontend development of a React-based Individual COVID Risk Calculator, translating risk model calculator into TypeScript in collaboration with an MIT scientist. Integrated dynamic content using Contentful CMS.',
        id: 4,
        isSunset: true,
        tech: [next, typescript, tailwind, mui, contentful, aws],
        year: 2022,
        url: 'https://web.archive.org/web/20231211005638/https://whentotest.org/'
    },
    {
        appName: 'VinU',
        company: 'Vincennes University',
        description:
            "Assisted University's web team in developing multiple Liferay fragments, widgets, and client extensions to enhance site functionality and visual appeal.",
        id: 5,
        tech: [html, css, javascript, liferay],
        year: 2021,
        url: 'https://www.vinu.edu/'
    },
];


export const socials: Social[] = [
    {
        handle: 'natemking',
        name: 'LinkedIn', 
        url: 'https://www.linkedin.com/in/natemking'
    },
    {
        handle: '@natemking',
        name: 'GitHub', 
        url: 'https://github.com/natemking'
    },
]
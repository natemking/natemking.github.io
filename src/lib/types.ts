export type TechType = {
    name: string;
    url: string;
};

export type Work = {
    id: number;
    year: number;
    appName: string;
    company: string;
    description: string;
    isInternal?: boolean;
    isSunset?: boolean;
    tech: TechType[];
    url?: string;
};

export type SocialSites = 'LinkedIn' | 'GitHub'

export type Social = { 
    name: SocialSites; 
    handle: string; 
    url: string;
};

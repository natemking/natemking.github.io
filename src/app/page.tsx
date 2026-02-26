'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GithubIcon, LinkedinIcon, LinkIcon, MailIcon, MoonIcon, SunIcon } from 'lucide-react';
import { Nav } from '@/components/Nav';
import { Badge } from '@/components/shadcn/badge';
import { emailAddress, focusBadges, pageSections, selectedWork, socials } from '@/lib/constants';
import type { SocialSites } from '@/lib/types';

const currentYear = new Date().getFullYear();

const getSocialsIcon = (name: SocialSites): React.JSX.Element => {
    const iconClasses = 'group-hover:animate-[ping_1s_linear_1]';
    switch (name) {
        case 'GitHub':
            return <GithubIcon className={iconClasses} />;
        case 'LinkedIn':
            return <LinkedinIcon className={iconClasses} />;

        default:
            throw new Error(`Not a valid social site - ${name satisfies never}`);
    }
};

export default function Home(): React.JSX.Element {
    const [isDark, setIsDark] = useState(true);
    const [activeSection, setActiveSection] = useState('');
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);
    const h1Ref = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in-up');
                        entry.target.classList.remove('opacity-0');
                        setActiveSection(entry.target.id);
                    } else {
                        entry.target.classList.remove('animate-fade-in-up');
                        entry.target.classList.add('opacity-0');
                    }
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -20% 0px' }
        );

        for (const section of sectionsRef.current) {
            if (section) observer.observe(section);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        const h1 = h1Ref.current;
        if (!h1) return;

        const letters = [...h1.querySelectorAll('span')];

        const handleMouseMove = (e: MouseEvent): void => {
            const rect = h1.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            for (const span of letters) {
                const spanRect = span.getBoundingClientRect();
                const x = spanRect.left + spanRect.width / 2 - rect.left;
                const y = spanRect.top + spanRect.height / 2 - rect.top;
                const distance = Math.hypot(mouseX - x, mouseY - y);
                const radius = 120;
                const opacity = Math.max(0, 1 - distance / radius);
                (span as HTMLElement).style.webkitTextFillColor =
                    `color-mix(in oklch, transparent ${Math.round(opacity * 100)}%, var(--foreground))`;
            }
        };

        const handleMouseLeave = (): void => {
            for (const span of letters) {
                (span as HTMLElement).style.webkitTextFillColor = 'var(--foreground)';
            }
        };

        h1.addEventListener('mousemove', handleMouseMove, { signal: controller.signal });
        h1.addEventListener('mouseleave', handleMouseLeave, { signal: controller.signal });

        return () => {
            controller.abort();
        };
    }, []);

    const toggleTheme = (): void => {
        setIsDark(!isDark);
    };

    return (
        <div className='relative min-h-screen bg-background text-foreground'>
            <Nav activeSection={activeSection} />

            <main className='mx-auto max-w-4xl px-6 sm:px-8 lg:px-16'>
                <section
                    className='flex min-h-screen items-center'
                    id={pageSections[0]}
                    ref={el => {
                        sectionsRef.current[0] = el;
                    }}
                >
                    <div className='grid w-full sm:gap-16 lg:grid-cols-5'>
                        <div className='space-y-6 sm:space-y-8 lg:col-span-3'>
                            <div className='space-y-3 sm:space-y-2'>
                                <div className='relative top-10 size-50 overflow-hidden rounded-lg'>
                                    <Image
                                        alt='Nate M King'
                                        className='object-cover'
                                        fill
                                        priority
                                        src='/images/pro-pic.png'
                                    />
                                    <div className='absolute right-0 bottom-0 left-0 h-20 bg-linear-to-t from-background to-transparent' />
                                    {isDark ? (
                                        <div className='absolute -right-10 bottom-0 h-50 w-20 bg-linear-to-l from-background to-transparent' />
                                    ) : null}
                                </div>

                                <div className='relative z-10 pl-1 font-mono text-sm tracking-wider text-foreground'>
                                    {`${currentYear} PORTFOLIO`}
                                </div>
                                <h1
                                    className='text-5xl leading-[1.2] font-light tracking-tight sm:text-6xl lg:text-7xl'
                                    ref={h1Ref}
                                    style={{
                                        backgroundImage: isDark
                                            ? 'radial-gradient(circle at 42% 50%, var(--h1-yellow) 0%, #6b7c3a 35%, var(--h1-green) 60%)'
                                            : 'radial-gradient(circle at 42% 50%, var(--h1-green) 0%, var(--h1-yellow) 15%, #ca8a04 25%)',
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    {[...new Intl.Segmenter().segment('Nate M King')].map(
                                        ({ segment }, i) => {
                                            const key = i.toString();
                                            return (
                                                <span
                                                    className='transition-colors duration-150'
                                                    data-index={i}
                                                    key={key}
                                                    style={{
                                                        WebkitTextFillColor: 'var(--foreground)',
                                                    }}
                                                >
                                                    {segment}
                                                </span>
                                            );
                                        }
                                    )}
                                </h1>
                            </div>

                            <div className='max-w-md space-y-6'>
                                <p className='text-lg leading-relaxed text-muted-foreground sm:text-xl'>
                                    Full Stack Developer with a frontend focus. Experienced in
                                    building fast, scalable apps with
                                    <span className='text-foreground'> React</span>/
                                    <span className='text-foreground'>Next.js</span>, and in shaping
                                    clean, accessible, and responsive interfaces.
                                </p>

                                {/* <div className='flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-4'>
                                    <div className='flex items-center gap-2'>
                                        <div className='size-2 animate-pulse rounded-full bg-green-500' />
                                        Available for work
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className='mt-8 flex flex-col justify-end space-y-6 sm:space-y-8 lg:col-span-2 lg:mt-0'>
                            <div className='space-y-4'>
                                <div className='font-mono text-sm text-muted-foreground'>
                                    CURRENTLY
                                </div>
                                <div className='space-y-2'>
                                    <div className='text-foreground'>Sr UI Developer</div>
                                    <div className='text-muted-foreground'>@ Xtivia</div>
                                    <div className='text-xs text-muted-foreground'>
                                        2021 — Present
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-4'>
                                <div className='font-mono text-sm text-muted-foreground'>FOCUS</div>
                                <div className='flex flex-wrap gap-2'>
                                    {focusBadges.map(focus => (
                                        <div
                                            className='group relative'
                                            key={focus}
                                        >
                                            <div className='absolute inset-0 -z-10 rounded-full bg-primary/50 opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-100' />
                                            <Badge className='relative transition-all duration-200 ease-in group-hover:scale-105 group-hover:text-h1-yellow'>
                                                {focus}
                                            </Badge>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    className='min-h-screen py-8 sm:py-12'
                    id={pageSections[1]}
                    ref={el => {
                        sectionsRef.current[1] = el;
                    }}
                >
                    <div className='space-y-6 sm:space-y-8'>
                        <div className='flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between'>
                            <h2 className='text-3xl font-light sm:text-4xl'>Professional Work</h2>
                            <div className='font-mono text-sm text-muted-foreground'>
                                {`2021 — ${currentYear}`}
                            </div>
                        </div>

                        <div className='text-sm text-muted-foreground'>
                            <p>
                                <span className='font-bold'>Note</span>: Many of the systems
                                I&apos;ve built are internal enterprise platforms and are not
                                publicly accessible due to confidentiality agreements. I&apos;m
                                available to provide deeper technical context around architecture,
                                design decisions, and impact.
                            </p>
                        </div>

                        <div className='space-y-8 sm:space-y-12'>
                            {selectedWork.map(
                                ({
                                    appName,
                                    company,
                                    description,
                                    id,
                                    tech,
                                    year,
                                    isInternal,
                                    isSunset,
                                    url,
                                }) => (
                                    <div
                                        className='grid gap-2 border-b border-border/50 py-3 sm:gap-8 sm:py-6 lg:grid-cols-12'
                                        key={id}
                                    >
                                        <div className='lg:col-span-1'>
                                            <div className='font-light text-muted-foreground'>
                                                {year}
                                            </div>
                                        </div>

                                        <div className='space-y-3 lg:col-span-9'>
                                            <div>
                                                <h3 className='flex flex-row items-center gap-2 text-lg font-medium sm:text-xl'>
                                                    {appName}
                                                    {isInternal || isSunset ? (
                                                        <span className='text-base text-muted-foreground/50'>
                                                            • {isSunset ? 'Sunset' : 'Internal'}
                                                        </span>
                                                    ) : null}
                                                    {url ? (
                                                        <Link
                                                            href={url}
                                                            target='_blank'
                                                        >
                                                            <LinkIcon className='size-4 text-muted-foreground hover:text-foreground' />
                                                        </Link>
                                                    ) : null}
                                                </h3>
                                                <div className='text-muted-foreground'>
                                                    {company}
                                                </div>
                                            </div>
                                            <p className='max-w-lg leading-relaxed text-muted-foreground'>
                                                {description}
                                            </p>
                                        </div>

                                        <div className='mt-2 flex flex-wrap content-start gap-2 lg:col-span-2 lg:mt-0 lg:justify-end'>
                                            {tech.map(({ name, url: badgeUrl }) => (
                                                <Image
                                                    alt={name}
                                                    className='h-5 w-auto rounded-sm border border-foreground/50'
                                                    height={20}
                                                    key={name}
                                                    src={badgeUrl}
                                                    unoptimized
                                                    width={100}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </section>

                <section
                    className='py-20 sm:py-32'
                    id={pageSections[2]}
                    ref={el => {
                        sectionsRef.current[2] = el;
                    }}
                >
                    <div className='grid gap-12 sm:gap-16 lg:grid-cols-2'>
                        <div className='space-y-6 sm:space-y-8'>
                            <h2 className='text-3xl font-light sm:text-4xl'>Contact Me</h2>

                            <div className='space-y-6'>
                                <div className='space-y-4'>
                                    <Link
                                        className='group flex w-fit items-center gap-2 text-foreground transition-colors duration-300 hover:text-h1-yellow'
                                        href={`mailto:${emailAddress}`}
                                    >
                                        <MailIcon className='relative top-px size-4 group-hover:animate-[ping_1s_linear_1]' />
                                        <span className='text-base sm:text-lg'>{emailAddress}</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-6 sm:space-y-8'>
                            <div className='font-mono text-sm text-muted-foreground'>BEYOND</div>

                            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                                {socials.map(({ handle, name, url }) => (
                                    <Link
                                        className='group rounded-lg border border-border p-4 transition-all duration-300 hover:border-muted-foreground/50 hover:shadow-sm'
                                        href={url}
                                        key={name}
                                        target='_blank'
                                    >
                                        <div className='space-y-2'>
                                            <div className='text-foreground transition-colors group-hover:text-h1-yellow'>
                                                {getSocialsIcon(name)}
                                            </div>
                                            <div className='text-sm text-muted-foreground group-hover:text-h1-yellow'>
                                                {handle}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <footer className='border-t border-border py-6'>
                    <div className='flex flex-row items-start justify-between'>
                        <p className='text-sm text-muted-foreground'>Thanks for visiting</p>

                        <div className='flex items-center gap-4'>
                            <button
                                aria-label='Toggle theme'
                                className='group rounded-lg border border-border p-3 transition-all hover:border-muted-foreground/50'
                                onClick={toggleTheme}
                                type='button'
                            >
                                {isDark ? (
                                    <SunIcon />
                                ) : (
                                    <MoonIcon />
                                )}
                            </button>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}

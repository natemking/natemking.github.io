import { pageSections } from '@/lib/constants';

export function Nav({ activeSection }: { activeSection: string }): React.JSX.Element {
    return (
        <nav className='fixed top-1/2 left-8 z-10 hidden -translate-y-1/2 lg:block'>
            <div className='flex flex-col gap-4'>
                {pageSections.map(section => (
                    <button
                        aria-label={`Navigate to ${section}`}
                        className={`h-8 w-2 rounded-full transition-all duration-500 cursor-pointer ${
                            activeSection === section
                                ? 'bg-foreground'
                                : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                        }`}
                        key={section}
                        onClick={() =>
                            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
                        }
                        type='button'
                    />
                ))}
            </div>
        </nav>
    );
}

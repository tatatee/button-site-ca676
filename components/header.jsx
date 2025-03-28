import Image from 'next/image';
import Link from 'next/link';
import siteLogo from 'public/site-logo.png';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'About', href: '/about' },
    { linkText: 'Button Registry', href: '/buttons' },
    { linkText: 'Genetics', href: '/genetics' },
    { linkText: 'Resources', href: '/resources' },
    { linkText: 'Button Cam', href: '/live' },    
    { linkText: 'Contact', href: '/contact' },
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-12 sm:pt-12 md:pb-24">
            <Link href="/">
                <Image src={siteLogo} alt="site logo" />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <div className="flex-grow justify-end hidden lg:flex lg:mr-1">
                <Link
                    href="https://github.com/netlify-templates/next-platform-starter"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src={githubLogo} alt="GitHub logo" className="w-7" />
                </Link>
            </div>
        </nav>
    );
}

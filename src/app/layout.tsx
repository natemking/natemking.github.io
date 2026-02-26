import type React from 'react';
import type { Metadata } from 'next';
import { M_PLUS_1p as mPlus1p } from 'next/font/google';
import './globals.css';

const mPlus1 = mPlus1p({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-mPlus1',
    weight: ['300', '400', '500', '700']
});

export const metadata: Metadata = {
    title: 'Nate M King - FullStack Web Developer',
    description: 'Fullstack web developer with a focus on frontend.',
    icons: {
        apple: '/icons/apple-touch-icon.png',
        icon: '/icons/icon.png'
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): React.JSX.Element {
    return (
        <html
            className='dark'
            lang='en'
        >
            <body className={`${mPlus1.variable} font-sans antialiased`}>{children}</body>
        </html>
    );
}

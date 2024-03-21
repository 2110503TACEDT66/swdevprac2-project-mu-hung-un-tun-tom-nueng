import './globals.css';
import TopMenu from '@/components/TopMenu';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="{raleway.className}">
      <body>
        <TopMenu />
        {children}
      </body>
    </html>
  );
}

import './globals.css';
import TopMenu from '@/components/TopMenu';
import NextAuthProvider from '@/providers/NextAuthProvider';
import { getServerSession } from 'next-auth';
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
  const session = getServerSession();

  return (
    <html lang="en" className="{raleway.className}">
      <body>
        <NextAuthProvider session={session}>
          <TopMenu />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}

import './globals.css';
import TopMenu from '@/components/TopMenu';
import NextAuthProvider from '@/providers/NextAuthProvider';
import { getServerSession } from 'next-auth';
import { Raleway } from 'next/font/google';
import { authOptions } from './auth/[...nextauth]/route';

const raleway = Raleway({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nextAuthSession = await getServerSession(authOptions);

  return (
    <html lang="en" className="{raleway.className}">
      <body>
        <NextAuthProvider session={nextAuthSession}>
          <TopMenu />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}

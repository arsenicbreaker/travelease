import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/app/globals.css';
import { Toaster } from '@/components/atomics/toaster';
import ReduxProvider from '@/providers/redux';


const inter = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Travel Ease',
  description: 'Find Glorious Trip And Loving Space',
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
        <Toaster />
        {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

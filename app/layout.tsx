import type { Metadata } from 'next';
import '@/style/globals.scss';
import NextAuthProvider from '@/component/layout/NextAuthProvider';
import RecoilRootProvider from '@/component/layout/RecoilRootProvider';
import ReactQueryProvider from '@/component/layout/ReactQueryProvider';
import Header from '@/component/header/Header';
import localFont from 'next/font/local';

// font
const pretendard = localFont({
  src: [
    {
      path: '../fonts/Pretendard/Pretendard-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--pretendard',
  display: 'fallback',
});
const Gmarket = localFont({
  src: [
    {
      path: '../fonts/Gmarket/GmarketSansLight.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/Gmarket/GmarketSansMedium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Gmarket/GmarketSansBold.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--Gmarket',
  display: 'fallback',
});

export const metadata: Metadata = {
  title: 'thunhye',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} ${Gmarket.variable}`}>
        <NextAuthProvider>
          <RecoilRootProvider>
            <Header />

            <ReactQueryProvider>{children}</ReactQueryProvider>
          </RecoilRootProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: '아쿠아리움 - 육지와 바다의 신비로운 만남',
  description: '아쿠아리움에서 육지 친구들과 바다 친구들을 만나보세요',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

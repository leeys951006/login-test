// 위치: app/layout.tsx

'use client'; // 이 지시문을 추가하여 클라이언트 컴포넌트로 만듭니다

import { SessionProvider } from 'next-auth/react';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}

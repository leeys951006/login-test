'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthComponent() {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <>
          <button onClick={() => signIn('naver')}>네이버 로그인</button>
        </>
      ) : (
        <>
          <p>로그인 완료: {session.user?.name}</p>
          <button onClick={() => signOut()}>로그아웃</button>
        </>
      )}
    </div>
  );
}

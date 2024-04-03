'use client';

import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { authInstance } from '@/src/lib/axiosInstance';

export default function CheckValidAuth() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    const checkTokenValidity = async () => {
      try {
        if (pathname === '/' || pathname === '/curation/season') {
          return true;
        } else if (accessToken && refreshToken) {
          const res = await authInstance.get('/user/profile');
          return true;
        } else {
          return router.push('/signin');
        }
      } catch (e) {
        return router.push('/signin');
      }
    };

    checkTokenValidity();
  }, [pathname, searchParams]);

  return null;
}

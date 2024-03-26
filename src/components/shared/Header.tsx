'use client';

import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 82%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 2rem 0rem 3.75rem 0rem;
  align-items: center;

  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
  }
`;

const LogoContainer = styled.div`
  display: flex;
`;

const IconGap = styled.div`
  display: flex;
  gap: 1.25rem;
`;

// 추후 popover 컴포넌트 edit icon에 연결 필요
export default function Header() {
  return (
    <HeaderBox>
      <LogoContainer>
        <Link href="/" passHref>
          <Image
            src="/logo.svg"
            alt="logo icon"
            width={105.625}
            height={35.505}
            priority
          />
        </Link>
      </LogoContainer>
      <IconGap>
        <Image
          src="/edit.svg"
          alt="edit icon"
          width={24}
          height={24}
          priority
        />
        <Image
          src="/bell.svg"
          alt="bell icon"
          width={24}
          height={24}
          priority
        />
        <Link href="/mypage">
          <Image
            src="/user.svg"
            alt="user icon"
            width={24}
            height={24}
            priority
          />
        </Link>
      </IconGap>
    </HeaderBox>
  );
}

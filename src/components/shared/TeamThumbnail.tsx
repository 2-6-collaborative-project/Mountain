'use client';

import styled from 'styled-components';
import typography from '@/app/styles/typography';
import { colors } from '@/app/styles/colors';
import { IBM } from '@/app/styles/.fonts';

interface TeamFeedType {
  teamId: number;
  mountain: string;
  title: string;
  departureDay: string;
  ageRange: string[];
  gender: string;
}

const TeamBox = styled.div`
  display: flex;
  width: 100%;
  padding: 1.125rem 0.9375rem;
  align-items: center;
  gap: 1.875rem;
  box-sizing: border-box;

  &:hover {
    border-radius: 0.1875rem;
    box-shadow: 0 0 0 1px ${colors.Primary[500]} inset;
  }
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 12rem;
  border-radius: 100%;
  background: ${colors.Primary[500]};
  color: ${colors.Grayscale[1]};
  font-size: 2rem;
  line-height: 1.75rem;

  @media (max-width: 768px) {
    width: 7.5rem;
    height: 7.5rem;
    flex-shrink: 0;
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    width: 6.875rem;
    height: 6.875rem;
    font-size: 1.5rem;
  }
`;

const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: ${colors.Grayscale[7]};
  ${typography.Body16}
`;

const Title = styled.div`
  color: ${colors.Grayscale[13]};
  ${typography.Heading20};
  padding-bottom: 0.31rem;
`;

const TeamCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6875rem;
  flex-shrink: 0;
`;

const TeamChips = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6875rem;
  flex-shrink: 0;
`;

const TeamRange = styled.div`
  display: flex;
  padding: 0.1875rem 0.4375rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.1875rem;
  background: ${colors.Primary[50]};
  color: ${colors.Primary[500]};
  text-align: center;
  ${typography.Footnote14};
`;

// 클릭 시 상세페이지로 이동하는 기능 추가 필요

export default function TeamThumbnail({ team }: { team: TeamFeedType }) {
  const formatDate = (dateStr: any) => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const date = new Date(dateStr);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours();
    const formattedDate = `${month}.${day}(${dayOfWeek})`;
    const formattedTime = `${hours > 12 ? '오후' : '오전'} ${hours > 12 ? hours - 12 : hours}시`;

    return { formattedDate, formattedTime };
  };

  const { formattedDate, formattedTime } = formatDate(team.departureDay);

  const renderGenderText = () => {
    switch (team.gender) {
      case 'male':
        return '남성만';
      case 'female':
        return '여성만';
      case 'all':
        return '성별무관';
      default:
        return '';
    }
  };

  const renderAgeRangeText = () => {
    const ageRanges = Array.isArray(team.ageRange)
      ? team.ageRange
      : [team.ageRange];
    return ageRanges
      .map((age) => {
        switch (age) {
          case 'teenager':
            return '10대';
          case 'twenties':
            return '20대';
          case 'thirties':
            return '30대';
          case 'fourties':
            return '40대';
          case 'fifties':
            return '50대';
          case 'sixties':
            return '60대 이상';
          default:
            return '';
        }
      })
      .join(', ');
  };

  return (
    <TeamBox>
      <ImageSection className={IBM.className}>{team.mountain}</ImageSection>
      <TeamCol>
        <TeamInfo>
          <Title>{team.title}</Title>
          <p>{`${team.mountain} | ${formattedDate} | ${formattedTime}`}</p>
        </TeamInfo>
        <TeamChips>
          <TeamRange>
            <p>{renderGenderText()}</p>
          </TeamRange>
          <TeamRange>
            <p>{renderAgeRangeText()}</p>
          </TeamRange>
        </TeamChips>
      </TeamCol>
    </TeamBox>
  );
}

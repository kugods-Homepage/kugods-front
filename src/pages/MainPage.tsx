import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';
import { ReactComponent as LeftArrow } from '../Assets/icons/LeftArrow.svg';
import { ReactComponent as RightArrow } from '../Assets/icons/RightArrow.svg';
import { ReactComponent as BottomArrow } from '../Assets/icons/BottomArrow.svg';
import { colors, color_type } from '../styles/theme';
import Logo from '../components/Common/Logo';
import { Circle, Rectangle } from '../components/Shape';
import StyledInput from '../components/Common/StyledInput';

const Container = styled.div`
  width: 128rem;

  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span<{ color?: color_type; fs?: number }>`
  color: ${({ color }) => (color ? colors[color] : colors.white)};
  font-size: ${({ fs }) => (fs ? fs + 'rem' : '1.4rem')};
`;

const TopNav = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: flex-end;
  width: 100%;

  .split {
    margin: 0 18px;
    border: 0.5px solid ${colors.gray};
  }
`;

const LogoPosition = styled.div`
  width: 20rem;
  height: 16rem;
  margin-bottom: 60px;

  ${Text} {
    display: block;
    text-align: center;
    margin-top: 1rem;
  }
`;

const Contents = styled.div`
  display: grid;
  grid-template-columns: 30rem 64rem 30rem;
  grid-column-gap: 40px;
`;

const ProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CenterBlock = styled.div`
  position: absolute;
  left: 4.5rem;

  ${Circle} {
    background-color: ${colors.gray};
  }
`;

const TransparentBlock = styled.div`
  position: relative;
  width: 20.5rem;
`;

const ProfileBox = styled(Rectangle)`
  position: absolute;
  height: 32rem;
  top: 5rem;

  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);
  border-radius: 2rem;
  z-index: 0;
`;

const ProfileNav = styled.nav`
  margin-top: 42px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const PostsBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const AnnounceBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ArrowBlock = styled.button<{ left?: number; right?: number; top?: number; bottom?: number }>`
  position: absolute;
  ${({ left }) => left && `left: ${left}rem;`}
  ${({ right }) => right && `right: ${right}rem;`}
  ${({ top }) => top && `top: ${top}rem;`}
  ${({ bottom }) => bottom && `bottom: ${bottom}rem;`}

  width: 2.3rem;
  height: 4.6rem;

  color: ${colors.google_blue};
`;

const AnnounceItem = styled(Rectangle)<{ checked?: boolean }>`
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);

  ${({ checked }) =>
    checked &&
    css`
      border: 1px solid ${colors.google_blue};
    `}
`;

const Announces = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  height: 30rem;

  &::-webkit-scrollbar {
    display: none;
  }

  ${AnnounceItem} {
    flex: 0 0 auto;
  }

  ${AnnounceItem} + ${AnnounceItem} {
    margin-left: 15px;
  }
`;

const ArchiveBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const ArchiveNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

const Archives = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 18px;
  grid-row-gap: 14px;
  height: 57rem;
  overflow-y: hidden;
`;

const ArchiveItem = styled(Rectangle)<{ checked?: boolean }>`
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);

  ${({ checked }) =>
    checked &&
    css`
      border: 1px solid ${colors.google_blue};
    `}
`;

const DownArrowBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

const QNABlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
`;

const QNANav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QNADropdown = styled.div`
  display: flex;
  font-size: 1.6rem;

  ${Text} {
    margin-right: 5px;
  }
`;

const QNAItem = styled(Rectangle)`
  padding: 25px;
  display: flex;
  align-items: center;
  line-height: 2.25rem;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);

  ${Text} + ${Text} {
    margin-left: 20px;
  }
`;

const QNAList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;

  ${QNAItem} + ${QNAItem} {
    margin-top: 15px;
  }
`;

const MemberButton = styled(Rectangle)``;

const MemberBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  ${MemberButton} + ${MemberButton} {
    margin-left: 40px;
  }
`;

const MainPage: React.FC = () => {
  return (
    <Rectangle isTop>
      <Container>
        <TopNav>
          <Text color="gray">회원 정보 수정</Text>
          <div className="split" />
          <Text color="google_blue">로그아웃</Text>
        </TopNav>
        <LogoPosition>
          <Logo width={20} height={10} />
          <Text color="black" fs={4}>
            KUGODS
          </Text>
        </LogoPosition>
        <Contents>
          <ProfileBlock>
            <TransparentBlock>
              <CenterBlock>
                <Circle radius={20} />
                <ProfileNav>
                  <Rectangle width={6} height={4} br={2} bc="google_blue" center>
                    코어
                  </Rectangle>
                  <Rectangle width={4.5} height={4} br={2} bc="gray" center>
                    D
                  </Rectangle>
                  <Text color="black" fs={2}>
                    이성진 님
                  </Text>
                </ProfileNav>
              </CenterBlock>
              <ProfileBox width={29} height={32} />
            </TransparentBlock>
          </ProfileBlock>
          <PostsBlock>
            <AnnounceBlock>
              <Text as={'div'} color="google_blue" fs={2}>
                공지사항
              </Text>
              <Announces>
                <ArrowBlock left={2} top={15}>
                  <LeftArrow width={23} height={46} />
                </ArrowBlock>
                <AnnounceItem width={22} height={27} br={2} checked />
                <AnnounceItem width={22} height={27} br={2} />
                <AnnounceItem width={22} height={27} br={2} />
                <AnnounceItem width={22} height={27} br={2} />
                <ArrowBlock right={2} top={15}>
                  <RightArrow width={23} height={46} />
                </ArrowBlock>
              </Announces>
            </AnnounceBlock>
            <ArchiveBlock>
              <ArchiveNav>
                <Text color="google_blue" fs={2}>
                  프로젝트 아카이빙
                </Text>
                <StyledInput type="text" width={24} height={3} fs={1.6} />
              </ArchiveNav>
              <Archives>
                <ArchiveItem width={30} height={27} br={2} checked />
                <ArchiveItem width={30} height={27} br={2} />
                <ArchiveItem width={30} height={27} br={2} />
                <ArchiveItem width={30} height={27} br={2} />
                <ArchiveItem width={30} height={27} br={2} />
              </Archives>
              <DownArrowBlock>
                <BottomArrow width={40} height={20} />
              </DownArrowBlock>
            </ArchiveBlock>
          </PostsBlock>
          <QNABlock>
            <QNANav>
              <StyledInput width={22} height={3} type="text" fs={1.6} />
              <QNADropdown>
                <Text color="google_blue" fs={1.6}>
                  최신순
                </Text>
                <BottomArrow width={7} height={10} />
              </QNADropdown>
            </QNANav>
            <QNAList>
              <QNAItem width={29} height={9} br={2} bc="google_blue">
                <Text color="white" fs={4}>
                  Q
                </Text>
                <Text color="white" fs={1.4}>
                  이펙트 어떻게 넣나요? <br />
                  피그마 너무 어렵네요.
                </Text>
              </QNAItem>
              <QNAItem width={29} height={9} br={2} bc="google_blue">
                <Text color="white" fs={4}>
                  Q
                </Text>
                <Text color="white" fs={1.4}>
                  이펙트 어떻게 넣나요? <br />
                  피그마 너무 어렵네요.
                </Text>
              </QNAItem>
              <QNAItem width={29} height={9} br={2} bc="google_blue">
                <Text color="white" fs={4}>
                  Q
                </Text>
                <Text color="white" fs={1.4}>
                  이펙트 어떻게 넣나요? <br />
                  피그마 너무 어렵네요.
                </Text>
              </QNAItem>
              <QNAItem width={29} height={9} br={2} bc="google_blue">
                <Text color="white" fs={4}>
                  Q
                </Text>
                <Text color="white" fs={1.4}>
                  이펙트 어떻게 넣나요? <br />
                  피그마 너무 어렵네요.
                </Text>
              </QNAItem>
            </QNAList>
          </QNABlock>
        </Contents>
        <MemberBlock>
          <MemberButton width={29} height={5.4} br={4.5} bc="google_blue" center>
            <Text color="white" fs={2}>
              멤버 등록하기
            </Text>
          </MemberButton>
          <MemberButton width={29} height={5.4} br={4.5} bc="gray" center>
            <Text color="white" fs={2}>
              멤버 목록보기
            </Text>
          </MemberButton>
        </MemberBlock>
      </Container>
    </Rectangle>
  );
};

export default MainPage;

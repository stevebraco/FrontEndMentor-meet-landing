import "./App.css";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Header>
        <Logo src="./images/logo.svg" alt="logo" />
      </Header>
      <GroupChat>
        <PictureLeft>
          <source media='(max-width: 1000px)' srcSet='./images/image-hero-tablet.png' />
          <ImageLeft src="./images/image-hero-left.png" />
        </PictureLeft>
        <Wrapper>
          <Title>Group Chat for Everyone</Title>
          <Text>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.{" "}
          </Text>
          <WrapperBtn>
            <BtnDownload href="#">
              Download <span>v1.3</span>
            </BtnDownload>
            <BtnWhatIsIt href="#">What is it ?</BtnWhatIsIt>
          </WrapperBtn>
        </Wrapper>
        <PictureRight>
          <ImageRight src="./images/image-hero-right.png" />
        </PictureRight>
      </GroupChat>
      <ContainerNumber>
        <Number>01</Number>
      </ContainerNumber>
      <SmarterMeeting>
        <ContainerImg>
          <ImgContainer>
            <ImgSmarter src="./images/image-woman-in-videocall.jpg" />
          </ImgContainer>
          <ImgContainer>
            <ImgSmarter src="./images/image-women-videochatting.jpg" />
          </ImgContainer>
          <ImgContainer>
            <ImgSmarter src="./images/image-men-in-meeting.jpg" />
          </ImgContainer>
          <ImgContainer>
            <ImgSmarter src="./images/image-man-texting.jpg" />
          </ImgContainer>
        </ContainerImg>
        <WrapperSmarter>
          <StrongSmarter> Built for modern use </StrongSmarter>
          <TitleSmarter>Smarter meetings, all in one place</TitleSmarter>
          <Text>
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </Text>
        </WrapperSmarter>
        <ContainerNumber>
          <Number>02</Number>
        </ContainerNumber>
      </SmarterMeeting>
      <Footer>
        <ContainerFooter>
          <TitleFooter>Experience more together</TitleFooter>
          <FooterText>
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </FooterText>
          <BtnWhatIsIt href="#">
            Download <span>v1.3</span>{" "}
          </BtnWhatIsIt>
        </ContainerFooter>
      </Footer>
    </div>
  );
}

export default App;

const Header = styled.header`
  text-align: center;
  height: 16.9rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  @media screen and (max-width: 1000px) {
  height: 14rem;
  }
  @media screen and (max-width: 375px) {
  height: 13rem;

  }

`;
const Logo = styled.img`
  width: 119px;
  object-fit: contain;
`;
const GroupChat = styled.div`
  position: relative;
  padding-top: 4.7rem;
  overflow: hidden;
  margin-bottom: 19.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
flex-direction: column;
align-items: center;  
  }
`;
const Wrapper = styled.div`
  max-width: 54rem;
  text-align: center;
  padding-top: 4.7rem;
  @media screen and (max-width: 760px) {
    max-width: 32.7rem
  }

`;

const Title = styled.h1`
  font-weight: 900;
  font-size: 6.4rem;
  line-height: 6.4rem;
  color: #28283d;
  max-width: 44.5rem;
  margin: 0 auto;
  padding-bottom: 3.4rem;
  @media screen and (max-width: 760px) {
    font-size: 40px;
line-height: 44px;
  }

`;

const Text = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: #87879d;
  padding-bottom: 3.2rem;
  @media screen and (max-width: 760px) {
    font-size: 16px;
line-height: 26px;
  }

`;
const PictureLeft = styled.picture`
position: relative;
align-self: center;
transform: translateX(-3.2rem);
align-self: flex-start;
@media screen and (max-width: 1000px) {
transform: translateX(0);
align-self: auto;
padding-bottom: 7.2rem;

}


`;
const PictureRight = styled.picture`
position: relative;
align-self: flex-start;
transform: translateX(3.2rem);
align-self: flex-end;
@media screen and (max-width: 1000px) {
    display: none;
  }


`;

const ImageLeft = styled.img`

  
`;
const ImageRight = styled.img`

`;
const WrapperBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.6rem;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: center;

  }

`;
const BtnDownload = styled.a`
  display: inline-block;
  background-color: #4d96a9;
  padding: 1.85rem 4.1rem;
  border-radius: 2.9rem;
  font-weight: 900;
  font-size: 1.6rem;
  margin-bottom: 0.7rem;
  color: #fafafa;
  transition: 0.3s;

  &:hover {
    background-color: rgba(113, 192, 212, 1);
  }

  span {
    color: rgba(143, 227, 249, 1);
    font-weight: 900;
    font-size: 1.6rem;
  }
`;
const BtnWhatIsIt = styled.a`
  background-color: rgba(133, 95, 177, 1);
  padding: 1.85rem 4.1rem;
  border-radius: 2.9rem;
  font-weight: 900;
  font-size: 1.6rem;
  margin-bottom: 0.7rem;
  color: #fafafa;
  transition: 0.3s;
  span {
    color: rgba(217, 184, 255, 1);
    font-weight: 900;
    font-size: 1.6rem;
  }

  &:hover {
    background-color: rgba(177, 139, 221, 1);
  }
  @media screen and (max-width: 760px) {
  padding: 1.85rem 4.1rem;

  }

`;
const ContainerNumber = styled.div`
  text-align: center;
`;
const Number = styled.span`
  position: relative;
  font-weight: 900;
  font-size: 1.6rem;
  color: #87879d;
  padding: 2.8rem;
  border: 1px solid #87879d;
  border-radius: 100%;
  z-index: 2;
  background: #fafafa;

  &::after {
    content: "";
    width: 0.1rem;
    height: 8rem;
    background-color: #87879d;
    display: block;
    position: absolute;
    left: 50%;
    top: -8rem;
  }
`;

const SmarterMeeting = styled.div`
  margin-top: 7.9rem;
`;
const ContainerImg = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between; */
  gap: 1.1rem; 
  @media screen and (max-width: 760px) {
  grid-template-columns: repeat(2, minmax(0, 1fr));

  }

`;
const ImgContainer = styled.div`
text-align: center;
`

const ImgSmarter = styled.img`
  width: 255px;
  border-radius: 10px;
  @media screen and (max-width: 760px) {
    width: 100%
  }
`;

const WrapperSmarter = styled.div`
  max-width: 52rem;
  margin: 0 auto;
  text-align: center;
  margin: 8rem auto 17.1rem;
  @media screen and (max-width: 1000px) {
    margin: 8rem auto 17.9rem;

  }
`;
const TitleSmarter = styled.h2`
  font-size: 4rem;
  font-weight: 900;
  line-height: 4.4rem;
  text-align: center;
  color: #28283d;
  padding-bottom: 3.2rem;
  max-width: 44.5rem;
  margin: 0 auto;
`;
const StrongSmarter = styled.strong`
  display: inline-block;
  font-weight: 900;
  font-size: 1.6rem;
  letter-spacing: 4px;
  color: #4d96a9;
  text-transform: uppercase;
  padding-bottom: 1.6rem;
  @media screen and (max-width: 760px) {
    font-size: 16px;
line-height: 26px;
  }

`;

const Footer = styled.footer`
  /* transform: translateY(-10.2rem); */
  position: relative;
  background: url("./images/image-footer.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;
  padding: 11.6rem 0 10.4rem; 

  @media screen and (max-width: 1000px) {
    background: url("./images/image-footer-tablet.jpg") no-repeat;
    background-position: center;
    background-size: cover;
  }
`;
const ContainerFooter = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 760px) {
    max-width: 32.7rem;
  }


  &::after {
    content: "";
    background-color: rgba(77, 150, 169, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TitleFooter = styled.h2`
  font-weight: 900;
  font-size: 40px;
  line-height: 44px;
  color: #fafafa;
  max-width: 35rem;
  @media screen and (max-width: 1000px) {
    max-width: 45.7rem;
    text-align: center;
    padding-bottom: 3.2rem;
  }
`;

const FooterText = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  color: #fafafa;
  line-height: 26px;
  font-weight: 500;
  max-width: 35rem;;
  @media screen and (max-width: 1000px) {
    max-width: 57.3rem;
    text-align: center;
    padding-bottom: 4rem;
  }
`;

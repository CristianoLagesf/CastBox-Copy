import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';

import logo from '../assets/img/castbox_logo-text.png'
import AppleLogo from '../assets/Logo Companys/apple.png'
import GoogleLogo from '../assets/Logo Companys/google.png'
import AmazonLogo from '../assets/Logo Companys/amazon.png'
import styled from 'styled-components';
import { FacebookLogo, InstagramLogo, TelegramLogo, TwitterLogo } from 'phosphor-react';

const ContainerLink = styled(Container)`
    background-color:#061f33;
    color: #ffffff;
    height: 340px;
`;
const MainRow = styled(Row)`
    padding: 40px;
    font-size: 12px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 1.5px
`;

const ImageLogo = styled.img`
    width:150px;
    margin-bottom: 20px;
`;
const ImageLogoStores = styled.img`
    width:120px;
    
`
const LinkDownload = styled(ListGroup)`
    gap:6px ;
    padding-top: 30px;
    
`;

const RightSide = styled(Col)`

`

const NavAboutMenu = styled(Nav)`
width:130px;
`

const AboutMenu = styled(Nav.Link)`
padding:5px;
&:link, &:visited {
  text-decoration: none;
  color: #ffffff; 
  font-size: 14px;
  font-weight: 300;
}
`

const SocialMedia = styled(Col)`
margin-left: 35px;
font-size: 12px;


.text{
    font-size: 12px;
}
`
const Footer = () => {
    return (
        <>
            <ContainerLink fluid fixed="bottom" >
                <MainRow xs={2} className="justify-content-center" >
                    <Col>
                        <div><ImageLogo src={logo} alt="logo" /></div>
                        <p>
                            Castbox is the best free podcast app with over 95 million volumes of content on Android,
                            Apple iPhone, Amazon Alexa, Google Home, Carplay and Android Auto.
                        </p>
                        <LinkDownload horizontal>
                            <a href="https://apps.apple.com/app/castbox-radio/id1243410543">
                                <ImageLogoStores src={AppleLogo} alt="Apple Logo" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=fm.castbox.audiobook.radio.podcast&referrer=utm_source%3Dcastbox_web%26utm_medium%3Dlink%26utm_campaign%3Dweb_index_page%26utm_content%3D">
                                <ImageLogoStores src={GoogleLogo} alt="Apple Logo" />
                            </a>
                            <a href="https://www.amazon.com/GURU-NETWORK-LIMITED-CastBox/dp/B0721XC8FT">
                                <ImageLogoStores src={AmazonLogo} alt="Apple Logo" />
                            </a>
                        </LinkDownload>
                    </Col>
                    <RightSide>
                        <Row xs={4} className="justify-content-center" >
                            <Col>
                                <NavAboutMenu >
                                    <AboutMenu href="#home">About</AboutMenu>
                                    <AboutMenu href="#link">About Castbox</AboutMenu>
                                    <AboutMenu href="#home">Newroom</AboutMenu>
                                    <AboutMenu href="#link">FAQs</AboutMenu>
                                </NavAboutMenu>
                            </Col>
                            <SocialMedia>
                                <h4 className="text">Connect</h4>
                                <ListGroup horizontal>
                                    <a href='https://telegram.org/'>
                                        <TelegramLogo size={32} color="#f6f4f4" weight="duotone" />
                                    </a>
                                    <a href='https://pt-br.facebook.com/'>
                                        <FacebookLogo size={32} color="#f6f4f4" weight="duotone" />
                                    </a>
                                    <a href='https://twitter.com/instagram'>
                                        <TwitterLogo size={32} color="#f6f4f4" weight="duotone" />
                                    </a>
                                    <a href='/'>
                                        <InstagramLogo size={32} color="#f6f4f4" weight="duotone" />
                                    </a>
                                </ListGroup>
                                <Container>
                                    <h4 className="text">Mail</h4>
                                    <a href='/'>contact@castbox.fm</a>
                                </Container>
                            </SocialMedia>
                        </Row>
                    </RightSide>
                </MainRow>
            </ContainerLink>
        </>
    )
}

export default Footer
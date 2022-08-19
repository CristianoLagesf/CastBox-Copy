import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import logo from '../assets/img/castbox_logo-text.png'
import AppleLogo from '../assets/Logo Companys/apple.png'
import GoogleLogo from '../assets/Logo Companys/google.png'
import AmazonLogo from '../assets/Logo Companys/amazon.png'
import styled from 'styled-components';

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
const LinkTab = styled(ListGroup)`
    gap:40px ;
    padding-top: 30px;
    
`;
const Footer = () => {
    return (
        <>
            <ContainerLink fluid fixed="bottom" >
                <MainRow xs={4} className="justify-content-center" >
                    <Col>
                        <div><ImageLogo src={logo} alt="logo" /></div>
                        <p>
                            Castbox is the best free podcast app with over 95 million volumes of content on Android,
                            Apple iPhone, Amazon Alexa, Google Home, Carplay and Android Auto.
                        </p>
                        <LinkTab horizontal>
                            <a href="https://apps.apple.com/app/castbox-radio/id1243410543">
                                <ImageLogoStores src={AppleLogo} alt="Apple Logo" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=fm.castbox.audiobook.radio.podcast&referrer=utm_source%3Dcastbox_web%26utm_medium%3Dlink%26utm_campaign%3Dweb_index_page%26utm_content%3D">
                                <ImageLogoStores src={GoogleLogo} alt="Apple Logo" />
                            </a>
                            <a href="https://www.amazon.com/GURU-NETWORK-LIMITED-CastBox/dp/B0721XC8FT">
                                <ImageLogoStores src={AmazonLogo} alt="Apple Logo" />
                            </a>
                        </LinkTab>
                    </Col>
                    <Col></Col>
                </MainRow>
            </ContainerLink>

        </>
    )
}

export default Footer
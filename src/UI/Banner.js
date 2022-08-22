import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import logo from '../assets/img/index_bg_phone.862bc5ea.png'
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'
import '../App.css';


const ColText = styled.h1`
color: #ffffff;
line-height:24px;
font-size:36px;
font-weight:300;
margin-top:50px;
width: 400px;
`;
const Row1 = styled(Row)`
padding-top:60px;
`;
const Col1 = styled(Col)`
width: 400px
`;
const ColImg = styled(Col)`
    width: 500px;
`;
const BannerImg = styled.img`
 height: 500px;
  width: 471px;
  margin-left: 50px;
`;
const DivBt = styled(Stack)`

`
const Bt = styled(Button)`
    background-color:#fff4ef ;
    color:#f56029;
    border-radius:24px;
    width:200px;
    height:50px;
    border-color:#fff4ef ;
    margin-top: 30px;
   
    &:hover{
        background-color: #fa784b;
        border-color:#fa784b ; 
    }   
`;

const Banner = () => {
    return (
        <Container fluid className="bg1">
            <Row1 xs={6} className="justify-content-center">
                <Col1>
                    <ColText>
                        <p>Over 259,000,000</p>
                        <p>Volumes of Audio Content</p>
                        <p>Listen Free,</p>
                        <p>Download Free.</p>
                    </ColText>
                    <DivBt>
                        <Bt>Listen Now</Bt>
                        <Bt>Get the App</Bt>
                    </DivBt>
                </Col1>
                <ColImg><BannerImg src={logo} alt="logo" /></ColImg>
            </Row1>
        </Container>
    )
}

export default Banner
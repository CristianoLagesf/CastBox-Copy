import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

import Banner from "../UI/Banner"
import NavTop from "../UI/NavTop"

import styled from 'styled-components';
import Footer from '../UI/Footer';

const ContainerLink = styled(Container)`
    background-color:#f3f3f3 ;
    height: 80px;
`;

const LinkTab = styled(ListGroup)`
    gap:40px ;
    padding-top: 30px;
    
`
const Link = styled.a`
&:link, &:visited {
  text-decoration: none;
  color: #3e3e3e; 
  font-size: 16px;
  font-weight: 500;
}
`


const MainPage = () => {
    return (
        <>
            <NavTop />
            <Banner />
            <ContainerLink fluid >
                <LinkTab horizontal className=" justify-content-center ">
                    <Link href="/">Top Search</Link>
                    <Link href="/">Featured</Link>
                    <Link href="/">Summertime Happiness❤️‍🔥</Link>
                    <Link href="/">True Crime</Link>
                    <Link href="/">Society & Culture</Link>
                    <Link href="/">Top Shows</Link>
                    <Link href="/">News</Link>
                </LinkTab>
            </ContainerLink>
            <Footer />
        </>
    )
}

export default MainPage
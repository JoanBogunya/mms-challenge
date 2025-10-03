import type { ReactNode } from "react"
import { Footer } from "./Footer"
import styled from "styled-components"
import { Header } from "./Header";
import { Title, Link, Typography } from "../common";

const LayoutContent = styled.section`
min-height: 100vh;
width:100%;
padding: 16px;
box-sizing: border-box;
color: black;
position: relative;
z-index: 0;

 &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 50vh;
    width: 100%;
    background: linear-gradient(
      180deg,
      ${props => props.theme.palette.white} 0%,
      ${props => props.theme.palette.primary.light} 100%
    );
    z-index: -1;
  }

  background-color: ${props => props.theme.palette.primary.light};
`

const Layout = ({ children }: { children: ReactNode }) => {
    return <>
        <Header>
            <Title>MediaMarktSaturn Tech Challenge</Title>
        </Header>
        <LayoutContent>
            {children}
        </LayoutContent>
        <Footer >
            <Typography>This application was done as a tech challenge for MediaMarktSaturn by <Link href="mailto:joanbogunya98@gmail.com">Joan Bogunyà i Salvans</Link></Typography>
        </Footer>
    </>
};

export default Layout
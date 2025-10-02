import type { ReactNode } from "react"
import { Footer } from "./Footer"
import styled from "styled-components"
import { Header } from "./Header";
import { Title, Link, Typography } from "../common";

const LayoutContent = styled.section`
min-height: 100vh;
background: linear-gradient(180deg, ${props => props.theme.palette.white} 0%, ${props => props.theme.palette.primary.light} 100%);
width:100%;
padding: 16px;
box-sizing: border-box;
color: black;
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
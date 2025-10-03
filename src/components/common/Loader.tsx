import styled from "styled-components"

const LoaderContainer = styled.div`
display: flex;
align-items: center;
width: 100%;
padding: 8px 0;
justify-content: center;
height: 24px;
`

const LoaderBar = styled.div<{ $delay: number }>`
background-color: ${props => props.theme.palette.primary.main};
animation: loading-animation 1s linear infinite;
width: 8px;
margin: 0 5px;
border-radius: 4px;
animation-delay: -${props => props.$delay}s;

@keyframes loading-animation {
  0% {
    height: 8px;
    background-color:  ${props => props.theme.palette.primary.light};
  }
  50% {
    height: 24px;
    background-color:  ${props => props.theme.palette.primary.main};
  }
  100% {
    height: 8px;
    background-color:  ${props => props.theme.palette.primary.light};
  }
}
`

export const Loader = () => <LoaderContainer>
  <LoaderBar $delay={0.5} />
  <LoaderBar $delay={1} />
  <LoaderBar $delay={0.5} />
</LoaderContainer>
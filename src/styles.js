import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor};
}
`;

export const Mainimag = styled.img`
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 70%;
`

export const ItemWrapper = styled.div`
img{
  width: 50%;
}
h4{
  &.itemPrice{
    color: ${(props) => props.theme.blue};
  }
}
`;
export const ProductWrapper = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    text-align: center;
`
export const HomeWrapper = styled.div`
h1{
  text-align: center;
}
h2 {
  text-align: center;
}
img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
`;



import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor};
}
`;

export const DeleteButtonStyled = styled.button`
font-size: 1em;
margin: 1.25em;
padding: 0.25em 1em;
border-radius: 3px;
background-color: ${(props) => props.theme.mainColor};
color: ${(props) => props.theme.backgroundColor};
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 20%;
    float: left;
  }
  p {
    vertical-align: middle;
    margin-left: 320px;
  }
  button {
    margin-left: 10px;
  }
`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
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
export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;



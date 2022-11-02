import styled from "styled-components";

const ImageSSS = styled.img`
  width: 350px;
  @media (max-width: ${({theme})=>theme.responsive}) {
    flex-direction: column;
  }
`;

export const LogoSSS = styled.img`
  background-color: ${({theme})=>theme.colors.logo};
  width: 300px;
  padding: 2rem 0;
  @media (max-width: ${({theme})=>theme.responsive}) {
    flex-direction: column;
  }
`;
export default ImageSSS;

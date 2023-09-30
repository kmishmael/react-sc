import styled from "styled-components";

export const DefaultButton = styled.button`
background-color: ${({red}: any) => (red && 'red') || '#645cfc'};
border: none;
padding: 10px;
color: white;
`
export const ExtendedButton = styled(DefaultButton)`
display: block;
width: 100vw;
`
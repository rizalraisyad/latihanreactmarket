import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
color: var(--lightBlue);
border: 0.08rem solid var(--lightBlue);
border-color: var(--lightBlue);
border-radius:0.5rem;
padding: 0.2rem 0.5rem;
margin: 0.2rem 0.5rem 0.2rem 0;
cursor: pointer;
transition:all 0.5 ease-in-out;
&:hover{
  background: var(--lightBlue);
  color: var(--mainBlue);
}
&:focus{
  outline: none;
}
`;
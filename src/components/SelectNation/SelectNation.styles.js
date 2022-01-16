import styled from "styled-components";

export const Container = styled.div``

export const Button = styled.button`
  cursor: pointer;
  width: 13rem;
  height: 5rem;
  margin: 1rem 0.2rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  color: ${props => props.selected ? "black" : "white"};
  background-color: ${props => props.selected ? "#86EFAC" : "#F43F5E"}
`

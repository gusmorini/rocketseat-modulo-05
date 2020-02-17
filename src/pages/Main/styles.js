import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(({ loading }) => ({
  type: 'submit',
  disabled: loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 20px;
  margin-left: 10px;
  border-radius: 4px;

  svg {
    margin-right: 0px;
    outline: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${({ loading }) =>
    loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;

    flex-direction: now;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }
  }
`;

/*

  attrs() passa propriedades pro component

  & + li aplica a estilização à partir do segundo elemento da lista, no caso li

  if ternário
  com else: variavel ? (condicao) : (condicao)
  sem else: variavel &&


*/

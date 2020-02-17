import styled, { keyframes, css } from 'styled-components';

export const Title = styled.h1`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

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

  ${({ error }) =>
    error &&
    css`
      input {
        border: 1px solid #f74f4f;
      }
    `}
`;

export const MsgError = styled.div`
  display: flex;
  align-items: center;

  color: #f74f4f;
  padding: 15px 0px;
  font-weight: 600;
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
  border: none;
  margin-left: 10px;
  border-radius: 4px;
  padding: 0px 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  svg {
    color: #fff;
    font-size: 16px;
    outline: 0;
  }

  & [disabled] {
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

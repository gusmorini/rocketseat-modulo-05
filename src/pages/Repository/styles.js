import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  svg {
    animation: ${rotate} 2s linear infinite;
    margin-left: 5px;
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    font-weight: bold;
    font-size: 16px;

    display: flex;
    align-items: center;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    font-size: 14px;
    margin-top: 5px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;

  display: flex;
  flex-direction: column;
  justify-content: center;

  min-height: 300px;

  h1 {
    font-size: 16px;
    color: #7159c1;
    text-align: center;
  }

  li {
    display: flex;
    padding: 15px 10px;
    border-radius: 4px;
    border: 1px solid #eee;

    & + li {
      margin-top: 10px;
    }
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }
    }

    span {
      background: #eee;
      color: #333;
      border-radius: 2px;
      font-size: 12px;
      font-weight: 600;
      height: 20px;
      padding: 3px 4px;
      margin-left: 10px;
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  span {
    padding: 0 30px;
    color: #7159c1;
    font-weight: bold;
  }

  button {
    padding: 10px 15px;
    background: ##eee;
    border: none;
    border-radius: 4px;
    color: #999;
    margin: 0px 2px;
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    &:hover {
      color: #fff;
      background: #7159c1;
    }
  }
`;

export const Filters = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FilterButton = styled.button`
  padding: 10px 15px;
  background: ##eee;
  border: none;
  border-radius: 4px;
  color: #999;
  margin: 0px 2px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ active }) =>
    active &&
    css`
      color: #fff;
      background: #7159c1;
    `}

  svg {
    font-size: 16px;
    margin-right: 10px;
  }
`;

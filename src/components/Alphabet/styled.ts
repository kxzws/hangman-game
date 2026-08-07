import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const Key = styled.button`
  width: 38px;
  height: 38px;
  border: 2px solid #171717;
  background: #fff;
  border-radius: 46% 54% 49% 51% / 47% 44% 56% 53%;
  color: #171717;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  transition:
    background-color 120ms ease,
    color 120ms ease,
    transform 120ms ease;

  &:nth-child(odd) {
    transform: rotate(-1deg);
  }

  &:nth-child(even) {
    transform: rotate(0.75deg);
  }

  &:hover:not(:disabled) {
    background: #171717;
    color: #fff;
    transform: rotate(0deg) translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: rotate(0deg) translateY(1px);
  }

  &:disabled {
    cursor: not-allowed;
    border-color: #8a8a8a;
    color: #8a8a8a;
    opacity: 1;
  }
`;

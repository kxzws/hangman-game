import styled from 'styled-components';

import { COLORS } from '../shared';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  @media (max-width: 320px) {
    display: grid;
    grid-template-columns: repeat(7, 32px);
    gap: 8px 6px;
    width: 260px;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;

  @media (max-width: 320px) {
    display: contents;
  }
`;

export const Key = styled.button`
  width: 38px;
  height: 38px;
  border: 2px solid ${COLORS.ink};
  background: ${COLORS.paper};
  border-radius: 46% 54% 49% 51% / 47% 44% 56% 53%;
  color: ${COLORS.ink};
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
    background: ${COLORS.ink};
    color: ${COLORS.paper};
    transform: rotate(0deg) translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: rotate(0deg) translateY(1px);
  }

  &:disabled {
    cursor: not-allowed;
    border-color: ${COLORS.disabled};
    color: ${COLORS.disabled};
    opacity: 1;
  }

  @media (max-width: 320px) {
    width: 32px;
    height: 32px;
    font-size: 0.875rem;
  }
`;

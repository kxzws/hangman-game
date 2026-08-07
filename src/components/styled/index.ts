import { css } from 'styled-components';

export const COLORS = {
  ink: '#171717',
  paper: '#fff',
  disabled: '#8a8a8a',
} as const;

export const handDrawnButton = css`
  min-height: 44px;
  border: 2px solid ${COLORS.ink};
  border-radius: 48% 52% 49% 51% / 50% 47% 53% 50%;
  background: ${COLORS.paper};
  color: ${COLORS.ink};
  font-weight: 700;
  transition:
    background-color 220ms ease,
    color 220ms ease,
    transform 220ms ease;

  &:hover:not(:disabled) {
    background: ${COLORS.ink};
    color: ${COLORS.paper};
    transform: translateY(-2px) rotate(-0.5deg);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }
`;

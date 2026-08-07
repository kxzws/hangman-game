import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { MAX_WORD_LENGTH, MIN_WORD_LENGTH } from '../../constants/words';

import { StartMenu } from './StartMenu';

describe('StartMenu', () => {
  it('shows validation feedback instead of starting an invalid custom-word game', async () => {
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <StartMenu />
      </MemoryRouter>
    );

    const user = userEvent.setup();

    await user.click(screen.getByRole('radio', { name: 'word' }));
    await user.type(screen.getByRole('textbox', { name: 'Word to guess' }), 'not valid');
    await user.click(screen.getByRole('button', { name: 'Start' }));

    expect(screen.getByRole('alert')).toHaveTextContent(
      `Enter ${MIN_WORD_LENGTH}-${MAX_WORD_LENGTH} Latin letters without spaces.`
    );
    expect(screen.getByRole('textbox', { name: 'Word to guess' })).toHaveAttribute(
      'aria-invalid',
      'true'
    );
  });
});

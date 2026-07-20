import '@testing-library/jest-dom/jest-globals';
import { describe, test, expect } from '@jest/globals';
import { render, screen } from '@testing-library/angular';
import { ButtonComponent } from './button.component';
import { ButtonModule } from 'primeng/button';
import { ButtonConfig } from './button.config';

const renderButton = (button: Partial<ButtonConfig> = {}) =>
  render(ButtonComponent, {
    imports: [ButtonModule],
    componentInputs: {
      button: {
        label: 'Salvar',
        type: 'button',
        ...button,
      },
    },
  });

describe('ButtonComponent', () => {
  test('render the button', async () => {
    await renderButton();

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('text content', async () => {
    await renderButton();

    expect(screen.getByRole('button')).toHaveTextContent('Salvar');
  });

  test('disabled button', async () => {
    await renderButton({ disabled: true });

    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('severity', async () => {
    await renderButton({ severity: 'danger' });

    expect(screen.getByRole('button')).toHaveClass('p-button-danger');
  });
});

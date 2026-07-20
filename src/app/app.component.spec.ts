import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { describe, test, expect } from '@jest/globals';

describe('AppComponent', () => {
  test('render component', async () => {
    await render(AppComponent);

    expect(screen.getByRole('heading')).toBeTruthy();
  });
});

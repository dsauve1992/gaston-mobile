import React from 'react';
import {render, queries, RenderOptions} from '@testing-library/react-native';
import AllTheProviders from './AllTheProviders';

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, {
    wrapper: AllTheProviders,
    queries,
    ...options,
  });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};

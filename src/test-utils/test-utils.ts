import React from 'react';
import {render, RenderOptions} from 'react-native-testing-library';
import AllTheProviders from './AllTheProviders';

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });

// re-export everything
export * from 'react-native-testing-library';

// override render method
export {customRender as render};

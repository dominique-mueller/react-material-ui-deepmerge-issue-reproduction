import { Tooltip } from '@material-ui/core';
import React, { FunctionComponent, ReactElement } from 'react';

/**
 * App
 */
const App: FunctionComponent = (): ReactElement => {
  // Render
  return (
    <>
      <main style={{ margin: 64, display: 'flex' }}>
        <div style={{ width: 256 }}>
          <strong style={{ display: 'block', marginBottom: 8 }}>Work as expected</strong>
          <Tooltip
            title="This is a tooltip"
            arrow
            PopperProps={{
              popperOptions: {
                strategy: 'fixed',
              },
            }}
          >
            <button type="button">Hover me</button>
          </Tooltip>
        </div>
        <div style={{ width: 256 }}>
          <strong style={{ display: 'block', marginBottom: 8 }}>Does not work as expected</strong>
          <Tooltip
            title="This is a tooltip"
            arrow
            PopperProps={{
              popperOptions: {
                strategy: 'fixed',
                modifiers: [
                  {
                    name: 'computeStyle',
                    options: {
                      gpuAcceleration: false,
                    },
                  },
                  {
                    name: 'offset',
                    options: {
                      offset: [0, 3],
                    },
                  },
                ],
              },
            }}
          >
            <button type="button">Hover me</button>
          </Tooltip>
        </div>
      </main>
    </>
  );
};

export default App;

// Test away!
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Controls from './Controls';

describe('<Controls />', () => {
  it('component renders', () => {
    render(<Controls />);
  });
  describe('Gate', () => {
    it('defaults to unlocked and open', () => {
      const { getByText } = render(<Controls />);
      getByText(/close gate/i);
    });
    it('cannot be closed or opened if it is locked', () => {
      const { getByText, queryByText } = render(
        <Controls closed={true} locked={true} />
      );
      getByText(/unlock gate/i);
      getByText(/open gate/i);
      expect(queryByText(/close gate/i)).toBeNull();
    });
  });
});

// Test away
import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('component renders', () => {
    render(<Dashboard />);
  });
  describe('<Display />', () => {
    it('Display is rendered', () => {
      const { queryByText } = render(<Dashboard />);
      expect(queryByText(/unlocked/i)).not.toBeNull();
      expect(queryByText(/open/i)).not.toBeNull();
    });
  });
  describe('<Control />', () => {
    it('Control is rendered', () => {
      const { queryByText } = render(<Dashboard />);
      expect(queryByText(/close gate/i)).not.toBeNull();
      expect(queryByText(/lock gate/i)).not.toBeNull();
    });
    // it('displays closed if the closed prop is true and open if otherwise', () => {
    //   const { queryByText } = render(<Dashboard closed={true} />);
    //   expect(queryByText(/closed/i)).not.toBeNull();
    // });
  });
});

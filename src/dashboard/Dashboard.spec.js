// Test away
import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('component renders', () => {
    render(<Dashboard />);
  });
  describe('<Display />', () => {
    it('Display is rendered', () => {
      const { getByText } = render(<Dashboard />);
      expect(getByText(/unlocked/i)).not.toBeNull();
      expect(getByText(/open/i)).not.toBeNull();
    });
  });
  describe('<Control />', () => {
    it('Control is rendered', () => {
      const { getByText } = render(<Dashboard />);
      expect(getByText(/close gate/i)).not.toBeNull();
      expect(getByText(/lock gate/i)).not.toBeNull();
    });
    // it('displays closed if the closed prop is true and open if otherwise', () => {
    //   const { queryByText } = render(<Dashboard closed={true} />);
    //   expect(queryByText(/closed/i)).not.toBeNull();
    // });
  });
});

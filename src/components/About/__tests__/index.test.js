import React from 'react';
import {render, cleanup} from '@testing-library/react';
// jest-dom offers access to custom matchers that are used to test DOM elements. 
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

describe('About component', () => {
    // First Test
    // we use the it function. In the first argument, a string declares what is being tested. In the second argument, a callback function runs the test.
    it('renders', () => {
      render(<About />);
    });
  
    // Second Test
    it('matches snapshot DOM node structure', () => {
      // render About
      const { asFragment } = render(<About />);
      expect(asFragment()).toMatchSnapshot();

    });
    
  });
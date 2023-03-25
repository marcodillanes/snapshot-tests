 import { render, screen } from '@testing-library/react';
 import App from './App';
 import renderer from 'react-test-renderer'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
// delete the test that is written in app.test.js and add the following

test('renders a snapshot', () => {
    const tree = renderer.create(<App/>).toJSON()
    expect(tree).toMatchSnapshot()
  })



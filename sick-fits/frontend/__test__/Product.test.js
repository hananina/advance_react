import { MockedProvider } from '@apollo/react-testing';
// screen
import { render, screen } from '@testing-library/react';
import Product from '../components/Product';
import { fakeItem } from '../lib/testUtils';

// モック用のデータ
const product = fakeItem();

// one test file for each of the components
describe('<Product/>', () => {
  it('renderes out the price tag and title', () => {
    // renderで返ってくるdebug methodとcontainer オブジェクト
    const { container, debug } = render(
      // mockデータをcontextに入れてくれる
      <MockedProvider>
        <Product product={product} />
      </MockedProvider>
    );
    debug(container);

    const priceTag = screen.getByText('$50');
    expect(priceTag).toBeInTheDocument();

    const link = container.querySelector('a');
    debug(link);
    expect(link).toHaveAttribute('href', '/product/abc123');
    expect(link).toHaveTextContent(product.name);
  });

  it('Renders and matches the snapshot', () => {
    const { container, debug } = render(
      <MockedProvider>
        <Product product={product} />
      </MockedProvider>
    );
    expect(container).toMatchSnapshot();
  });
});

import { fireEvent, render, screen } from '@testing-library/vue';
import Rating from '@/components/rating/Rating.vue';

const renderRating = () => {
  render(Rating);
  const paragraph = screen.getByText('0');
  const decrementButton = screen.getByText('-');
  const incrementButton = screen.getByText('+');

  const getRatingValue = () => paragraph.textContent;
  const decrement = () => fireEvent.click(decrementButton);
  const increment = () => fireEvent.click(incrementButton);

  return {
    decrement,
    increment,
    getRatingValue
  };
};

describe('Rating using AHA programming', () => {
  describe('render', () => {
    test('should render component', () => {
      render(Rating);
    });

    test('should render two buttons', () => {
      render(Rating);

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(2);
    });

    test('should render a paragraph with default value', () => {
      render(Rating);

      const paragraph = screen.getByText('0');
      expect(paragraph).toBeInTheDocument();
    });
  });

  describe('when the user clicks on the decrement button', () => {
    test('should decrement the value at one', async () => {
      const { decrement, getRatingValue } = renderRating();

      await decrement();

      expect(getRatingValue()).toBe('-1');
    });

    test('should not reach the lower limit', async () => {
      const { decrement, getRatingValue } = renderRating();

      await decrement();
      await decrement();
      await decrement();
      await decrement();
      await decrement();
      await decrement();

      expect(getRatingValue()).toBe('-5');
    });
  });

  describe('when the user clicks on the increment button', () => {
    test('should increment the value at one', async () => {
      const { increment, getRatingValue } = renderRating();

      await increment();

      expect(getRatingValue()).toBe('1');
    });

    test('should not reach the upper limit', async () => {
      const { increment, getRatingValue } = renderRating();

      await increment();
      await increment();
      await increment();
      await increment();
      await increment();
      await increment();

      expect(getRatingValue()).toBe('5');
    });
  });
});

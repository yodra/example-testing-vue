import { mount } from '@vue/test-utils';
import Counter from '@/components/counter/Counter.vue';
import { fireEvent } from '@testing-library/dom';
import { render, screen } from '@testing-library/vue';

describe('Counter vue-test-utils', () => {
  test('should render component', () => {
    const wrapper = mount(Counter);

    const paragraph = wrapper.find('.counter');
    expect(paragraph.text()).toBe('You clicked 0 times');
  });

  test('should render component and increment counter', async () => {
    const wrapper = mount(Counter);
    const button = wrapper.find('button');

    await button.trigger('click');
    await button.trigger('click');

    const paragraph = wrapper.find('.counter');
    expect(paragraph.text()).toBe('You clicked 2 times');
  });
});

describe('Counter', () => {
  test('should render component', () => {
    render(Counter);

    const paragraph = screen.getByText('You clicked 0 times');
    expect(paragraph).toBeInTheDocument();
  });

  test('should render component and increment counter', async () => {
    render(Counter);
    const button = screen.getByText('increment');

    await fireEvent.click(button);
    await fireEvent.click(button);

    const paragraph = screen.queryByText('You clicked 2 times');
    expect(paragraph).toBeInTheDocument();
  });
});

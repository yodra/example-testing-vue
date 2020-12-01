import { mount } from '@vue/test-utils';
import Counter from '@/components/counter/Counter.vue';

describe('Counter.vue', () => {
  test('render component', () => {
    const wrapper = mount(Counter);

    const paragraph = wrapper.find('.counter');

    expect(paragraph.text()).toBe('You clicked 0 times');
  });

  test('render component and increment counter', async () => {
    const wrapper = mount(Counter);
    const button = wrapper.find('button');

    const paragraph = wrapper.find('.counter');

    await button.trigger('click');
    await button.trigger('click');

    expect(paragraph.text()).toBe('You clicked 2 times');
  });
});

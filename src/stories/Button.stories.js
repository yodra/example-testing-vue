import MyButton from './Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: '<my-button @onClick="onClick" v-bind="$props" />'
});

const defaultArgs = {
  label: 'Button'
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  primary: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
  size: 'large'
};

export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  size: 'small'
};

export const NoAccessible = Template.bind({});
NoAccessible.args = {
  ...defaultArgs,
  backgroundColor: '#535758'
};

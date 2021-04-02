import Rating from '@/components/rating/Rating';

export default {
  title: 'Rating',
  component: Rating,
  argTypes: {}
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Rating },
  template: '<Rating />'
});

export const ByDefault = Template.bind({});
ByDefault.args = {};

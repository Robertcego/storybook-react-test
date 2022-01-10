import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  color: '#00ff7b',
  backgroundColor: '#000000',
  label: 'Button',
  size: 'md',
};

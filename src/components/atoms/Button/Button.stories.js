import AppButton from './Button';
const meta = {
    title: 'Atoms/Button',
    component: AppButton,
    parameters: {
        controls: { expanded: true }
    }
};
export default meta;
export const Primary = {
    args: {
        label: 'Click Me',
        onClick: () => alert('Button clicked!')
    }
};

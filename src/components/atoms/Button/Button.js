import { jsx as _jsx } from "react/jsx-runtime";
import { Button as MUIButton } from '@mui/material';
const AppButton = ({ label, ...props }) => {
    return _jsx(MUIButton, { ...props, children: label });
};
export default AppButton;

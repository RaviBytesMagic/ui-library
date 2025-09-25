// src/components/atoms/Button/index.tsx
import React from 'react'
import { Button as MUIButton, ButtonProps } from '@mui/material'

export interface AppButtonProps extends ButtonProps {
  label: string
}

const AppButton: React.FC<AppButtonProps> = ({ label, ...props }) => {
  return <MUIButton {...props}>{label}</MUIButton>
}

export default AppButton

import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';

type CustomInputProps = {
  label: string;
  errorMessage?: string;
  helperText?: string;
  helperTextClassName?: string;
  onChange: any;
  required?: boolean;
  value: string;
  inputType?: string;
};

export default function CustomInput({
  label,
  helperText,
  helperTextClassName,
  onChange,
  value,
  required = false,
  errorMessage,
  inputType = 'text',
}: CustomInputProps) {
  return (
    <FormControl variant='floating' id='first-name' isRequired isInvalid>
      <Input
        type={inputType}
        placeholder=' '
        value={value}
        onChange={onChange}
        required={required}
        size='lg'
      />
      <FormLabel>{label || ''}</FormLabel>
      <FormHelperText className={helperTextClassName || ''}>
        {helperText || ''}
      </FormHelperText>
      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
}

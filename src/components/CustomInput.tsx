import React from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';

export default function CustomInput({
  label,
  helperText,
  helperTextClassName,
  onChange,
  required,
}: any) {
  return (
    <FormControl variant='floating' id='first-name' isRequired isInvalid>
      <Input placeholder=' ' onChange={onChange} required={required} />
      <FormLabel>{label || ''}</FormLabel>
      <FormHelperText className={helperTextClassName || ''}>
        {helperText || ''}
      </FormHelperText>
      {/* <FormErrorMessage>Your First name is invalid</FormErrorMessage> */}
    </FormControl>
  );
}

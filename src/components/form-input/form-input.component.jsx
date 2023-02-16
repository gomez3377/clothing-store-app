import {FormInputLabel, Input, Group} from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  const {inputOptions} = otherProps
  
  return (
    <Group>
        <Input {...otherProps} />
      {label && (
      <FormInputLabel
        shrink={inputOptions.value.length}
      >
        {label}
      </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;

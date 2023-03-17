import React from "react";
import {
  Base,
  Title,
  Container,
  Input,
  Submit,
  Text,
  Link,
  Error,
  Span,
  Bottom,
  BottomUp,
  Label,
  Field,
} from "./styles/Form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Container = function FormContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Span = function FormSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};
Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Bottom = function FormBottom({ children, ...restProps }) {
  return <Bottom {...restProps}>{children}</Bottom>;
};
Form.BottomUp = function FormBottomUp({ children, ...restProps }) {
  return <BottomUp {...restProps}>{children}</BottomUp>;
};

Form.Label = function FormLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};

Form.Field = function FormField({ children, ...restProps }) {
  return <Field {...restProps}>{children}</Field>;
};

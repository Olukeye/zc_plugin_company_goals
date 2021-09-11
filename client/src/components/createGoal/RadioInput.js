import { LabelBody, LabelTitle, RadioLabel, PriorityTitle } from './RadioInput.style';

// eslint-disable-next-line import/prefer-default-export
export const firstLabel = () => {
  return (
    <RadioLabel>
      <LabelTitle>Number</LabelTitle>
      <LabelBody>Any number</LabelBody>
      <LabelBody>Like 1-4</LabelBody>
    </RadioLabel>
  );
};
export const secondLabel = () => {
  return (
    <RadioLabel>
      <LabelTitle>Yes/No</LabelTitle>
      <LabelBody>Done or not</LabelBody>
    </RadioLabel>
  );
};
export const thirdLabel = () => {
  return (
    <RadioLabel>
      <LabelTitle>Currency</LabelTitle>
      <LabelBody>Like &#8358;10,000</LabelBody>
    </RadioLabel>
  );
};
export const PriorityLabel = (label) => {
  return <PriorityTitle>{label}</PriorityTitle>;
};

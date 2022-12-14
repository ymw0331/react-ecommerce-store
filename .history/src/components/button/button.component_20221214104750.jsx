import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
  ButtonSpinner
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
  switch (buttonType) {
    case BUTTON_TYPE_CLASSES.google:
      return (
        <GoogleSignInButton  {...otherProps}>{children}</GoogleSignInButton>
      );
    case BUTTON_TYPE_CLASSES.inverted:
      return <InvertedButton disabled={isLoading} {...otherProps}>
        {isLoading ? <Button children}
      </InvertedButton>;
    default:
      return <BaseButton  {...otherProps}>{children}</BaseButton>;
  }
};

// const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
//   ({
//     [BUTTON_TYPE_CLASSES.base]: BaseButton,
//     [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
//     [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
//   }[buttonType]);

// const Button = ({ children, buttonType, ...otherProps }) => {
//   const CustomButton = getButton(buttonType);
//   return <CustomButton {...otherProps}>{children}</CustomButton>;
// };

// const getButton = (buttonType = "base") =>
//   ({
//     base: BaseButton,
//     google: GoogleSignInButton,
//     inverted: InvertedButton,
//   }[buttonType]);

// const Button = ({ children, buttonType, ...otherProps }) => {
//   const CustomButton = getButton(buttonType);
//   return <CustomButton {...otherProps}>{children}</CustomButton>;
// };

export default Button;

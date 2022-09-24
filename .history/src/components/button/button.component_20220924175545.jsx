import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = "base") =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {

  swtich(buttonType){
    case BUTTON_TYPE_CLASSES.google:
      return (
        <GoogleSignInButton {...otherProps}>{children}</GoogleSignInButton>;
      )
    case BUTTON_TYPE_CLASSES.inverted:
      return <InvertedButton {...otherProps}>{children}</InvertedButton>;
    default:
        return <BaseButton {...otherProps}>{children}</BaseButton>;
  
  }
}

export default Button;
import "./form-input.styles.jsx";
import { Group } from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;

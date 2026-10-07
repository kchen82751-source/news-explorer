import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({
  onSignIn,
  isOpen,
  onClose,
  secondaryButtonAction,
  authError,
}) => {
  const defaultValue = {
    email: "",
    password: "",
  };
  const { values, handleChange } = useForm(defaultValue);
  const [validationError, setValidationError] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    const email = values.email.trim();
    if (!email) {
      setValidationError("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setValidationError("Please enter a valid email address.");
      return;
    }
    if (!values.password.trim()) {
      setValidationError("Please enter your password.");
      return;
    }
    if (values.password.trim().length < 8) {
      setValidationError("Your password must be at least 8 characters.");
      return;
    }
    setValidationError("");
    onSignIn({ email, password: values.password });
  }

  return (
    <ModalWithForm
      title="Sign in"
      name="new-card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Log In"
      secondButton="or Sign Up"
      secondaryButtonAction={secondaryButtonAction}
    >
      <label className="modal__label">
        Email{" "}
        <input
          type="email"
          name="email"
          className="modal__input"
          id="login-email"
          placeholder="Enter email"
          value={values.email}
          onChange={(evt) => {
            handleChange(evt);
            if (evt.target.value.trim()) setValidationError("");
          }}
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          id="login-password"
          placeholder="Enter password"
          value={values.password}
          onChange={(evt) => {
            handleChange(evt);
            if (evt.target.value.trim()) setValidationError("");
          }}
          required
        />
      </label>
      {(validationError || authError) && (
        <p className="modal__error" role="alert">
          {validationError || authError}
        </p>
      )}
    </ModalWithForm>
  );
};

export default LoginModal;

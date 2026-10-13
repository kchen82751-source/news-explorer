import { useForm } from "../../hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const RegisterModal = ({
  onSignUp,
  isOpen,
  onClose,
  secondaryButtonAction,
  authError,
}) => {
  const defaultValue = {
    name: "",
    password: "",
    email: "",
    avatar: "",
  };
  const { values, handleChange } = useForm(defaultValue);
  const [validationError, setValidationError] = useState("");

  function handleFieldChange(evt) {
    handleChange(evt);
    setValidationError("");
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const name = values.name.trim();
    const email = values.email.trim();
    const password = values.password.trim();

    if (!email) return setValidationError("Please enter your email address.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return setValidationError("Please enter a valid email address.");
    }
    if (password.length < 8) {
      return setValidationError("Your password must be at least 8 characters.");
    }
    if (!name) return setValidationError("Please enter your name.");
    setValidationError("");
    onSignUp({ name, email, password, avatar: "" });
  }

  return (
    <ModalWithForm
      title="Sign Up"
      name="new-card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Sign Up"
      secondButton="or Login"
      secondaryButtonAction={secondaryButtonAction}
    >
      <label className="modal__label">
        Email{" "}
        <input
          type="email"
          name="email"
          className="modal__input"
          id="register-email"
          placeholder="Email"
          value={values.email}
          onChange={handleFieldChange}
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          id="register-password"
          placeholder="Password"
          value={values.password}
          onChange={handleFieldChange}
          minLength={8}
          required
        />
      </label>
      <label className="modal__label">
        Username
        <input
          type="text"
          name="name"
          className="modal__input"
          id="register-name"
          placeholder="Name"
          value={values.name}
          onChange={handleFieldChange}
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

export default RegisterModal;

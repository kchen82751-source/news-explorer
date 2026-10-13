import "./RegistrationSuccessModal.css";

export default function RegistrationSuccessModal({ isOpen, onClose, onSignIn }) {
  if (!isOpen) return null;

  return (
    <div className="registration-success" onMouseDown={onClose}>
      <div className="registration-success__position">
        <button
          className="registration-success__close"
          type="button"
          onClick={onClose}
          aria-label="Close registration confirmation"
        >
          ×
        </button>
        <section
          className="registration-success__dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="registration-success-title"
          onMouseDown={(event) => event.stopPropagation()}
        >
          <h2 id="registration-success-title">
            Registration successfully completed!
          </h2>
          <button
            className="registration-success__sign-in"
            type="button"
            onClick={onSignIn}
          >
            Sign in
          </button>
        </section>
      </div>
    </div>
  );
}

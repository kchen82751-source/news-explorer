import "./ModalWithForm.css";
import closeIcon from "../../assets/closebutton.svg";
import { useEffect } from "react";

function ModalWithForm({
  buttonText,
  title,
  onClose,
  isOpen,
  children,
  onSubmit,
  secondButton,
  secondaryButtonAction,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });
  return (
    <div
      className={`modal${isOpen ? " modal__opened" : ""}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="modal__frame"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="modal__mobile-header" aria-hidden="true">
          NewsExplorer
        </div>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
          aria-label="Close dialog"
        >
          <img alt="close Icon" src={closeIcon} />
        </button>
        <div className="modal__content">
          <h2 className="modal__title" id="modal-title">
            {title}
          </h2>
          <form onSubmit={onSubmit} className="modal__form" noValidate>
            {children}

            <div className="modal__log-in">
              <button type="submit" className="modal__submit">
                {buttonText}
              </button>
            </div>
            <div className="modal__log-out">
              <button
                type="button"
                className="modal__second-submit"
                onClick={secondaryButtonAction}
              >
                {secondButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalWithForm;

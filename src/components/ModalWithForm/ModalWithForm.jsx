import "./ModalWithForm.css";

function ModalWithForm({
  buttonText,
  title,
  activeModal,
  handleCloseClick,
  onClose,
  isOpen,
  children,
  onSubmit,
  secondButton,
  secondaryButtonAction,
}) {
  return (
    <div className={`modal ${isOpen && "modal_opened"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close"
        ></button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}

          <div className="log-in-out">
            {" "}
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
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
  );
}

export default ModalWithForm;

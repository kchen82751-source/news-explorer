import "./ModalWithForm.css";
import closeIcon from "../../assets/closebutton.svg";

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
  return (
    <div
      className={`modal${isOpen ? " modal_opened" : ""}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal__content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <h2 className="modal__title" id="modal-title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close" aria-label="Close dialog">
          <img alt="" src={closeIcon} />
        </button>
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
  );
}

export default ModalWithForm;

import "./ModalWithForm.css";
import closeIcon from "../../assets/closebutton.svg";

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
        <button onClick={onClose} type="button" className="modal__close">
          <img src="../../assets/closebutton.svg" alt=""></img>
          <img alt="Close" src={closeIcon} />
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}

          <div className="modal__log-in">
            {" "}
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

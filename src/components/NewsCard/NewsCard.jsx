// import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import bookmarkIcon from "../../assets/bookmarkicon.svg";
import markedIcon from "../../assets/markedicon.svg";

function NewsCard({ item, onCardClick, handleCardLike }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
  const isLiked = item?.likes.some((id) => id === currentUser?._id);

  return (
    <li className="card">
      {/* TODO - Make image appear again in preview modal */}
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
      <div className="card__title-and-like">
        <p className="card__title">{item.name}</p>
        {isLoggedIn && (
          <button
            onClick={() => handleCardLike({ id: item._id, isLiked })}
            className="card__like-button"
          >
            <img
              src={isLiked ? markedIcon : bookmarkIcon}
              alt="Clickable Icon"
            />
          </button>
        )}
      </div>
    </li>
  );
}

export default NewsCard;

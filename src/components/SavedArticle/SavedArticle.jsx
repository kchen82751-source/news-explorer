import "../../components/SavedArticle/SavedArticle.css";

export default function SavedArticle({
  articleItems,
  onArticleClick,
  handleAddClick,
  onSignOut,
  onEditPlaceholderImage,
  handleBookmark,
}) {
  return (
    <section className="SavedArticle">
      {/* <SideBar onSignOut={onSignOut} onEditProfile={onEditPlaceholderImage} /> */}
      <ClothesSection
        onArticleClick={onArticleClick}
        articleItems={articleItems}
        handleAddClick={handleAddClick}
        handleBookmark={handleBookmark}
      />
    </section>
  );
}

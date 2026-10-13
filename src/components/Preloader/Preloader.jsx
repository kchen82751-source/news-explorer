import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader__square" role="status" aria-live="polite">
      <div className="circle-preloader" aria-hidden="true" />
      <p>Searching for news...</p>
    </div>
  );
}

export default Preloader;

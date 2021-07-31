import "./portfolio.css";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>portfolio</h1>
      <div className="portfolioHr"></div>
      <div className="container">
        <div className="portfolioItem">
          <div className="portfolioImg">
            <img src="img/portfolio/cabin.png" alt="" />
          </div>
          <div className="portfolioImg">
            <img src="img/portfolio/cake.png" alt="" />
          </div>
          <div className="portfolioImg">
            <img src="img/portfolio/circus.png" alt="" />
          </div>
        </div>
        <div className="portfolioItem">
          <div className="portfolioImg">
            <img src="img/portfolio/game.png" alt="" />
          </div>
          <div className="portfolioImg">
            <img src="img/portfolio/safe.png" alt="" />
          </div>
          <div className="portfolioImg">
            <img src="img/portfolio/submarine.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

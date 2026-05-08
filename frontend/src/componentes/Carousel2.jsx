import { useRef } from "react";
import "./carousel2.css";

export default function Carousel2({ itens }) {
  const containerRef = useRef();

  const scroll = (direction) => {
    const scrollAmount = 320;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="carousel-wrapper">
      <button className="nav left" onClick={() => scroll("left")}>
        ◀
      </button>

      <div className="carousel" ref={containerRef}>
        {itens.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <h2>{item.title}</h2>
            </div>
          </div>
        ))}
      </div>

      <button className="nav right" onClick={() => scroll("right")}>
        ▶
      </button>
    </div>
  );
}
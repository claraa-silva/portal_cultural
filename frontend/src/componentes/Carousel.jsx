import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Carousel = ({ items, autoPlay = true, interval = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hover, setHover] = useState(false);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!autoPlay || paused) return;

    const slideInterval = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(slideInterval);
  }, [index, paused]);

  return (
    <div style={styles.carousel}>
      <button onClick={prevSlide} style={styles.button}>n</button>

      <Link
        to={items[index].link}
        style={{ textDecoration: "none" }}
      >
        <div
          style={styles.slideContainer}
          onMouseEnter={() => {
            setPaused(true);
            setHover(true);
          }}
          onMouseLeave={() => {
            setPaused(false);
            setHover(false);
          }}
        >
          <img
            src={items[index].image}
            alt={items[index].title}
            style={styles.image}
          />

          <div
            style={{
              ...styles.overlay,
              opacity: hover ? 1 : 0
            }}
          >
            <h2 style={styles.country}>
              {items[index].title}
            </h2>
          </div>
        </div>
      </Link>

      <button onClick={nextSlide} style={styles.button}>m</button>
    </div>
  );
};

const styles = {
  carousel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    maxWidth: "700px",
    margin: "auto"
  },

  slideContainer: {
    position: "relative",
    width: "500px",
    height: "300px",
    overflow: "hidden",
    borderRadius: "12px"
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    transition: "opacity 0.3s ease"
  },

  country: {
    fontSize: "2rem",
    fontWeight: "bold",
    letterSpacing: "2px"
  },

  button: {
    fontSize: "22px",
    padding: "10px 15px",
    cursor: "pointer"
  }
};

export default Carousel;
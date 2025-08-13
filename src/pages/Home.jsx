import React, { useState, useEffect } from "react";

// Sample images for the slider
const slides = [
  { id: 1, image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80", caption: "Connect with the best candidates in your industry!" },
  { id: 2, image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1200&q=80", caption: "Your gateway to meaningful employment." },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Slider */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              display: index === currentSlide ? "block" : "none",
              width: "100%",
              height: "400px",
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#fff",
              textAlign: "center",
              lineHeight: "400px",
              fontSize: "2rem",
              fontWeight: "bold",
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              transition: "all 0.5s ease-in-out",
            }}
          >
            {slide.caption}
          </div>
        ))}
      </div>

      {/* Welcome Section */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h1>Welcome to Akazi - Job Board</h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "20px auto" }}>
          Akazi connects job seekers with employers across multiple industries. Explore opportunities, 
          find your next career move, or recruit top talent effortlessly.
        </p>
      </section>
    </div>
  );
};

export default Home;

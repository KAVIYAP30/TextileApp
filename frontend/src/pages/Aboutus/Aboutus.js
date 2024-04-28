import React, { useState, useEffect } from "react";

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1616756141603-6d37d5cde2a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNhcmVlfGVufDB8fDB8fHww',
    'https://media.istockphoto.com/id/1355125086/photo/indian-handloom-sarees-with-vibrant-colours-and-beautiful-designs.jpg?s=612x612&w=0&k=20&c=zoF_CAMr-eijNWjVvDp2nzTZ4m13yP9t3YDgn5rbH6w=',
    'https://media.istockphoto.com/id/93355119/photo/indian-saris.jpg?s=612x612&w=0&k=20&c=afmfiTJg0VAmIY6P_TJ_JYsTfGhUdevv18WXQRUZ8NQ=',
    'https://media.istockphoto.com/id/153515439/photo/pink-indian-fabric.jpg?s=612x612&w=0&k=20&c=9XSa_ZRdM8B1M_jKgTMNFS2xuer7ayiDBjzZ-ZqMUJ0='
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1000); // Change interval time (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [currentImageIndex]); // Restart interval on slide change

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <>
      <div className="about">
        <div className="slider">
          <button className="prev" onClick={prevSlide}>Previous</button>
          <img src={images[currentImageIndex]} alt="Gift box" />
          <button className="next" onClick={nextSlide}>Next</button>
        </div>
        <div className="text">
          <h2>About Us</h2>
          <p> Niranjan Textile is your go-to destination for premium fabrics and stylish apparel. With a rich history of quality and excellence, we offer a curated collection that blends traditional charm with contemporary trends. Step into our showroom and experience the elegance of Niranjan Textile today.</p>
        </div>
        {/* <div className="vision-mission-container">
          <h2>Vision & Mission</h2>
          <p><strong>Vision:</strong> To be the leading provider of unique and heartfelt gifts that bring joy to people's lives.</p>
          <p><strong>Mission:</strong> We are committed to curating a diverse selection of high-quality gifts, providing exceptional customer service, and fostering meaningful connections with our community.</p>
        </div> */}
      </div>

      <style>{`
        .about {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .slider {
          position: relative;
          width: 500px; /* Adjust width as needed */
          margin-bottom: 20px;
        }

        .slider img {
          width: 100%;
          height: auto;
        }

        .prev,
        .next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          color: #fff;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
        }

        .prev {
          left: 0;
        }

        .next {
          right: 0;
        }

        .vision-mission-container {
          margin-top: 20px;
          padding: 20px;
          background-color: lightseagreen
          ;
          border-radius: 8px;
          text-align: center;
        }

        .vision-mission-container h2 {
          margin-bottom: 10px;
        }

        .vision-mission-container p {
          margin-bottom: 5px;
        }
      `}</style>
    </>
  );
};

export default About;

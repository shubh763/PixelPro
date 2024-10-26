import React, { useState } from "react";
import InnerBanner from "../Components/InnerBanner";

const Portfolio = () => {
  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  // Images for the projects
  const projects = [
    { id: 1, title: "Project 1", imgSrc: "/images/1.jpg" },
    { id: 2, title: "Project 2", imgSrc:"/images/2.jpg" },
    { id: 3, title: "Project 3", imgSrc: "/images/3.jpg" },
    { id: 4, title: "Project 4", imgSrc: "/images/4.jpg" },
    { id: 5, title: "Project 5", imgSrc: "/images/5.jpg" },
    { id: 6, title: "Project 6", imgSrc: "/images/6.jpg" },
    { id: 7, title: "Project 7", imgSrc: "/images/7.jpg" },
    { id: 8, title: "Project 8", imgSrc: "/images/8.jpg" },
    { id: 9, title: "Project 9", imgSrc: "/images/9.jpg" },
    { id: 10, title: "Project 10", imgSrc: "/images/10.jpg"},
    { id: 11, title: "Project 11", imgSrc: "/images/11.jpg" },
    { id: 12, title: "Project 12", imgSrc: "/images/12.jpg" },
    { id: 13, title: "Project 13", imgSrc: "/images/13.jpg" },
    { id: 14, title: "Project 14", imgSrc: "/images/14.jpg" },
    { id: 15, title: "Project 15", imgSrc: "/images/15.jpg" },
    { id: 16, title: "Project 16", imgSrc: "/images/16.jpg" },
    { id: 17, title: "Project 17", imgSrc: "/images/17.jpg" },
    { id: 18, title: "Project 18", imgSrc: "/images/18.jpg" },
    { id: 19, title: "Project 19", imgSrc: "/images/19.jpg" },
    { id: 20, title: "Project 20", imgSrc: "/images/20.jpg" },
    { id: 21, title: "Project 21", imgSrc: "/images/21.jpg" },
    { id: 22, title: "Project 22", imgSrc: "/images/22.jpg" },
    { id: 23, title: "Project 23", imgSrc: "/images/project2.png" },
    { id: 24, title: "Project 24", imgSrc: "/images/project3.png" },

  ];

  // Function to open lightbox with the selected image
  const openLightbox = (imgSrc) => {
    setActiveImage(imgSrc);
    setLightboxOpen(true);
  };

  // Function to close the lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveImage(null);
  };

  return (
    <>
      <InnerBanner title={"Portfolio"} />
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Our Amazing Works</h1>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div className="portfolio-card" key={project.id}>
              <img
                src={project.imgSrc}
                alt={project.title}
                className="portfolio-image"
                onClick={() => openLightbox(project.imgSrc)}
              />
              <h3>{project.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="lightbox">
          <span className="close-lightbox" onClick={closeLightbox}>
            &times;
          </span>
          <img className="lightbox-content" src={activeImage} alt={activeImage ? "Project" : "Image"} />
        </div>
      )}
    </>
  );
};

export default Portfolio;

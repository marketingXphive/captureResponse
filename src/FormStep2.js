// FormStep2.js

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Form.css";

const FormStep2 = ({ selectedImages, setSelectedImages, name, email }) => {
  const imagesData = [
    {
      id: "13",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "14",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "15",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "16",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "17",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "18",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "19",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "20",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "21",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "22",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "23",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "24",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    // ... more objects
  ];
  // Your images data here

  useEffect(() => {
    const nextButton = document.getElementById("nextButton");
    nextButton.disabled = selectedImages.length !== 6;
  }, [selectedImages]);

  const handleImageClick = (imageId) => {
    setSelectedImages((prevSelected) => {
      if (prevSelected.includes(imageId)) {
        return prevSelected.filter((id) => id !== imageId);
      } else {
        return [...prevSelected, imageId];
      }
    });
  };

  return (
    <div className="form-container">
      <h2>Step 2: Select 6 Images</h2>
      <div className="image-grid">
        {imagesData.map((image) => (
          <div
            key={image.id}
            className={`image-tile ${
              selectedImages.includes(image.id) ? "selected" : ""
            }`}
            onClick={() => handleImageClick(image.id)}
          >
            <img src={image.src} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
      <br />
      <Link to="/step3">
        <button
          id="nextButton"
          type="button"
          className="next-button"
          onClick={() => {
            console.log({ selectedImages });
          }}
        >
          Next
        </button>
      </Link>
    </div>
  );
};

export default FormStep2;

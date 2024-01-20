// FormStep3.js

import React, { useEffect, useState } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import axios from "axios";

const FormStep3 = ({ selectedImages, setSelectedImages, name, email }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const imagesData = [
    {
      id: "25",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "26",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "27",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "28",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "29",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "30",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "31",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "32",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "33",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "34",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "35",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    {
      id: "36",
      src: "https://www.shutterstock.com/image-photo/howling-chimpanzee-pan-troglodytes-tropical-260nw-2171613551.jpg",
    },
    // ... more objects
  ];
  // Your images data here
  useEffect(() => {
    console.log({ selectedImages });
  }, []);
  useEffect(() => {
    const submitButton = document.getElementById("submitButton");
    submitButton.disabled = selectedImages.length !== 12;
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

  const postToGoogleSheets = async (jsonData) => {
    const spreadsheetId = "YOUR_SPREADSHEET_ID";
    const sheetName = "Sheet1"; // Change to your sheet name
    const apiKey = "YOUR_API_KEY";

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

    try {
      const response = await axios.post(url, {
        values: [Object.values(jsonData)], // Assumes jsonData is a simple object
      });

      console.log("Data posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleSubmit = async () => {
    console.log("submitted");
    const formData = {
      name,
      email,
      selectedImages,
    };
    setIsSubmitted(true);
    console.log("Submitting Form Data:", formData);
    try {
      const response = await axios.post(
        "https://script.google.com/macros/s/AKfycbwC0SB1vAxQph15UC0cLLZ5aXnhNf7ckG9CNUw3fgDH61hC-6vkR7vWgIjEK_fg6spV/exec",
        formData, {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log("Data posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
    //postToGoogleSheets(formData);
    // You can make an API call to send formData to your backend or Google Form
  };

  return (
    <div className="form-container">
      <h2>Step 3: Select 6 More Images</h2>
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
      <button
        id="submitButton"
        type="button"
        onClick={handleSubmit}
        className="next-button"
      >
        Submit
      </button>
      <br />
      {isSubmitted && (
        <h2 style={{ color: "green" }}> Thanks for your response!</h2>
      )}
    </div>
  );
};

export default FormStep3;

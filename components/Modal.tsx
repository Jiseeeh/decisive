import React, { useState, useEffect } from "react";

interface ModalProps {
  content: string;
}

const Modal: React.FC<ModalProps> = ({ content }) => {
  const randomHeadings = [
    "Everything happens for a reason.",
    "Go for it!",
    "That's the best choice!",
    "Just do it!",
    "That's the best ngl.",
    "The soul becomes dyed with the color of its thoughts.",
    "Everything happens when it's supposed to.",
    "Everything comes gradually at its appointed hour.",
    "What's meant to be will always find a way.",
    "Once you make a decision, the universe conspires to make it happen.",
  ];
  const [randomHeading, setRandomHeading] = useState("");
  const hasError = content.includes("Error");

  useEffect(() => {
    setRandomHeading(
      randomHeadings[Math.floor(Math.random() * randomHeadings.length)]
    );
  }, [content]);

  return (
    <>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {hasError ? "Please follow instructions!" : randomHeading}
          </h3>
          <p className="py-4 ">
            {hasError ? "You got an" : "You got"}{" "}
            <span className="font-bold">{content}!</span>
          </p>
          <div className="modal-action">
            <label htmlFor="modal" className="btn">
              Thanks!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

import React, { useState, useEffect } from "react";

interface ModalProps {
  content: string;
  choices: string;
}

const Modal: React.FC<ModalProps> = ({ content, choices }) => {
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
    "Some things are destined to be -- it just takes us a couple of tries to get there.",
    "Listen to the advice of your own destiny! All is a given!",
    "A person often meets his destiny on the road he took to avoid it.",
    "A man does not make his destiny: he accepts it or denies it.",
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
      <label htmlFor="modal" className="hidden"></label>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <section className="modal modal-bottom dark:text-white sm:modal-middle">
        <section className="modal-box">
          <h3 className="text-lg">
            {hasError ? "Please follow instructions!" : randomHeading}
          </h3>
          <section className="py-4">
            <p data-testid="modal-content" className="font-bold">
              {hasError ? "You got an " : "You got "}
              {content}!
            </p>
            <section className="break-words">
              The choices were{" "}
              <span className="text-error">[{choices.toUpperCase()}]</span>
            </section>
          </section>
          <section className="modal-action">
            <label htmlFor="modal" className="btn">
              Thanks!
            </label>
          </section>
        </section>
      </section>
    </>
  );
};

export default Modal;

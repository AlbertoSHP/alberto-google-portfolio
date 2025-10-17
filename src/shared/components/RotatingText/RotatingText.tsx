import React, { useEffect, useState } from "react";
import "./RotatingText.css";
import { Typography } from "@mui/material";

interface RotatingTextProps {
    preText?: string;
    words: string[];
    interval?: number;
}

export const RotatingText: React.FC<RotatingTextProps> = ({
  preText,
  words,
  interval = 2000,
}) => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 400);
    }, interval);

    return () => clearInterval(fadeTimeout);
  }, [words, interval]);

  return (
    <Typography variant="body2" className={`rotating-text ${visible ? "fade-in" : "fade-out"}`}>
      {preText} {words[index]}
    </Typography>
  );
};
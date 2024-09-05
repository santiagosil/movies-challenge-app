"use client";
import { calculateColorRating } from "@/utils";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface RatingProps {
  percent: number;
  className?: string;
}

export const Rating = ({ percent, className = "" }: RatingProps) => {
  return (
    <CircularProgressbar
      value={percent}
      text={`${percent.toFixed(0)}%`}
      className={`${className} font-bold`}
      styles={buildStyles({
        textSize: "28px",
        pathColor: `${calculateColorRating(percent)}`,
        trailColor: `${calculateColorRating(percent, 0.2)}`,
        textColor: `#FFF`,
      })}
    />
  );
};

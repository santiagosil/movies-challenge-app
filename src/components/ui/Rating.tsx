"use client";
import React from "react";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";

import {calculateColorRating} from "@/utils";
import "react-circular-progressbar/dist/styles.css";

interface RatingProps {
  percent: number;
  className?: string;
}

export function Rating({percent, className = ""}: RatingProps) {
  return (
    <CircularProgressbar
      className={`${className} font-bold`}
      styles={buildStyles({
        textSize: "28px",
        pathColor: calculateColorRating(percent),
        trailColor: calculateColorRating(percent, 0.2),
        textColor: `#FFF`,
      })}
      text={`${percent.toFixed(0)}%`}
      value={percent}
    />
  );
}

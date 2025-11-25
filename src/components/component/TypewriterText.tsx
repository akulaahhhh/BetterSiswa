"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = { className?: string };

export default function TypewriterText({ className = "" }: Props) {
  return (
    <span className={className}>
      <Typewriter
        options={{
          strings: [
            "INFORMATIVE FORUM 💬",
            "USEFUL TOOLS ✨",
            "STUDY HACKS 💡",
            "SCHOLARSHIP TIPS 🎓",
          ],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 50,
          cursor: "|",
        }}
      />
    </span>
  );
}
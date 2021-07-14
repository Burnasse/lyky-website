import * as React from "react";
import { mix } from "@popmotion/popcorn";
import { motion } from "framer-motion";

export const ContentPlaceholder = (props) => {
  const randomInt = (min, max) => Math.round(mix(min, max, Math.random()));
  const generateParagraphLength = () => randomInt(2, 4);
  const generateWordLength = () => randomInt(10, 80);

  // Randomly generate some paragraphs of word lengths
  const paragraphs = [...Array(1)].map(() => {
    return [...Array(generateParagraphLength())].map(generateWordLength);
  });

  const Word = ({ width }) => (
    <div
      className="word text-white bg-white h-2 m-2 rounded-sm relative"
      style={{ width }}
    />
  );

  const Paragraph = ({ words }) => (
    <div className="paragraph">
      {words.map((width) => (
        <Word width={width} />
      ))}
    </div>
  );

  return (
    <motion.div className="content-placeholder bg-indigo-500 rounded-md " whileHover={{ scale: 1.1 }}>
      <motion.div
        
        animate={{ scale: [0, 1] }}
        transition={{ duration: Math.random() + 1 }}
      >
        {paragraphs.map((words) => (
          <Paragraph words={words} />
        ))}
      </motion.div>
    </motion.div>
  );
};

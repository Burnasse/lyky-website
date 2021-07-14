import { motion } from "framer-motion";
import * as React from "react";

const ContentCard = ({ title, description }) => {
  return (
    <motion.div className="relative m-4" whileHover={{ scale: 1.1 }}>
      <div className="bg-white text-black relative box-border p-4 border-4 rounded-lg shadow-lg">
        <h1 className="my-4 text-2xl font-bold leading-tight text-indigo-600">
          {title}
        </h1>
        <p className="leading-normal text-1xl mb-8">{description}</p>
      </div>
    </motion.div>
  );
};

export default ContentCard;

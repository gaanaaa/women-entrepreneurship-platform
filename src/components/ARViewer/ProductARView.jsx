import React, { useState } from "react";
import { FiMaximize, FiRotateCw } from "react-icons/fi";
import "./ProductARView.css";

const ProductARView = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`ar-container ${isExpanded ? "expanded" : ""}`}>
      <div className="ar-toolbar">
        <button onClick={() => setIsExpanded(!isExpanded)}>
          <FiMaximize />
        </button>
        <button>
          <FiRotateCw />
        </button>
      </div>

      <div className="ar-placeholder">
        {/* In a real app, this would be your AR viewer component */}
        <img
          src="/images/ar-placeholder.jpg"
          alt="AR product preview"
          className="ar-product"
        />
        <div className="ar-marker"></div>
      </div>
    </div>
  );
};

export default ProductARView;

import React from "react";

const OptionTree = ({ node, onSelect }) => {
  return (
    <div className="option-tree">
      <ul>
        {node.children.map((child) => (
          <li key={child.id}>
            <button
              className="option-btn"
              onClick={() => onSelect(child)}
            >
              {child.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionTree;

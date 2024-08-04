import React from "react";
import Tree from "react-d3-tree";

const MatchTree = () => {
  const orgChart = {
    name: "CEO",
    children: [
      {
        name: "Manager",
        attributes: {
          department: "Production",
        }
      }
    ],
  };
  return (
    <div id="treeWrapper" style={{ width: "50em", height: "20em" }}>
      <Tree data={orgChart} />
    </div>
  );
};

export default MatchTree;

import React from "react";

const FurnitureProject = () => {
  return (
    <div>
      <h2>Watch Our Introduction Video</h2>
      <video controls>
        <source src="/videos/furnitureking.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FurnitureProject;

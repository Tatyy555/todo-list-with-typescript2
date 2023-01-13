import React from "react";

type CancelProps = {
  onCancel: () => void;
};

function BlackDrop(props: CancelProps) {
  return (
    <div
      className="fixed bg-gray-700/50 w-screen h-screen top-0 left-0 z-10"
      onClick={props.onCancel}
    />
  );
}

export default BlackDrop;

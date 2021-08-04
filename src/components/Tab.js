import React, { useState } from "react";

export default function Tab({ children }) {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  function moveHightLight(e) {
    //update hightlightStyle to move the highlight
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
    });
  }

  function hideHighlight(e) {
    setHighlightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    });
  }
  return (
    <div
      className="tab"
      onMouseOut={hideHighlight}
      onMouseMove={moveHightLight}
    >
      <div className="highlight" style={highlightStyle} />
      {children}
    </div>
  );
}

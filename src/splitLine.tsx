import React from "react";

const splitLine = (paragraph: string) => {
  const paragraphs = paragraph.split(/\r\n|\r|\n/g);
  return paragraphs.map((line, i) => (
    <React.Fragment key={i}>
      {line}
      <br />
    </React.Fragment>
  ));
};

export default splitLine;

import React from "react";

export const JobAccordionContainer = ({
  children,
}: {
  children: Array<React.ReactElement>;
}): React.ReactElement => {
  return (
    <div className="w-full bg-gray grid grid-flow-row gap-4">
      {children.map((child: React.ReactElement) => {
        return <div>{child}</div>;
      })}
    </div>
  );
};

export default JobAccordionContainer;

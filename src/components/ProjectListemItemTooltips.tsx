"use client";

import { Tooltip } from "react-tooltip";

export const ProjectListItemTooltips: React.FC = () => {
  return (
    <>
      <Tooltip anchorSelect=".anchor-website" place="top">
        Visit website
      </Tooltip>
      <Tooltip anchorSelect=".anchor-repo" place="top">
        View source code
      </Tooltip>
    </>
  );
};

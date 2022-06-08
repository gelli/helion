import * as React from "react";
import { useStoryDetail } from "../selectors";

import { useParams } from "react-router";

export const StoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  console.log(useStoryDetail(parseInt(id, 10)));

  return <div>hello world</div>;
};

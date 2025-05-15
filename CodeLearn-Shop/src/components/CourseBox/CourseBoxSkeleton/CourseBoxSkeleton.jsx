import React from "react";
import { Skeleton } from "@mui/material";

export default function CourseBoxSkeleton() {
  return (
    <div style={{ padding: "20px" }}>
      <Skeleton variant="rounded" height={210} />
      <Skeleton variant="text" width={150} sx={{ fontSize: "2rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
    </div>
  );
}

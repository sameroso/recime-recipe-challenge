import { Skeleton } from "@/components";
import { ImageWrapper, StyledCard } from "../shared/styles";
import { SkeletonImage, SkeletontTitle } from "./styles";

export function generateRandomString() {
  return Math.random().toString(36).substring(2, 9);
}

interface RecipeCardSkeletonProps {
  repeatTimes: number;
}
export function RecipeCardSkeleton(props: RecipeCardSkeletonProps) {
  const array = Array(props.repeatTimes);
  return array.fill(
    <StyledCard key={generateRandomString()}>
      <ImageWrapper>
        <SkeletonImage $height="100%" $width="100%" />
      </ImageWrapper>
      <SkeletontTitle $height="12px" $width="100px" />
      <SkeletontTitle $height="8px" $width="70px" />
    </StyledCard>,
    0,
    props.repeatTimes
  );
}

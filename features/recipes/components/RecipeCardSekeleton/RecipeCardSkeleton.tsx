import { generateRandomString } from "@/utils/string";
import { ImageWrapper, StyledCard } from "../shared/styles";
import { SkeletonImage, SkeletontTitle } from "./styles";

interface RecipeCardSkeletonProps {
  repeatTimes: number;
}
export function RecipeCardSkeleton(props: RecipeCardSkeletonProps) {
  const array = Array(props.repeatTimes).fill(null);
  return array.map((val, index) => {
    return (
      <StyledCard key={generateRandomString()} data-testid={index}>
        <ImageWrapper>
          <SkeletonImage $height="100%" $width="100%" />
        </ImageWrapper>
        <SkeletontTitle $height="12px" $width="100px" />
        <SkeletontTitle $height="8px" $width="70px" />
      </StyledCard>
    );
  });
}

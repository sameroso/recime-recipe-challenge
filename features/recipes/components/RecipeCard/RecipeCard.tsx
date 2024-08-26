"use client";
import { ImageWrapper, StyledCard, StyledCardProps } from "../shared/styles";
import { SubTitle, Title } from "./styles";
import Image from "next/image";

interface RecipeCardProps extends StyledCardProps {
  name: string;
  imageSrc: string;
  difficulty: string;
}
export function RecipeCard(props: RecipeCardProps) {
  return (
    <StyledCard $active={props.$active}>
      <ImageWrapper>
        <Image alt={props.name} src={props.imageSrc} fill sizes="100%" />
      </ImageWrapper>
      <Title $active={props.$active}>{props.name}</Title>
      <SubTitle>{props.difficulty}</SubTitle>
    </StyledCard>
  );
}

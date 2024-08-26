"use client"
import { keyframes, styled } from "@/libs/styled-components";

const sekletonAnimation = keyframes`
 0% {
    background-position: -100px;
   }
   20%{
    background-position: 20px;
   }

   30%{
    background-position: 60px;
   }
   40%,100% {
     background-position: 270px;
   }
`;

export const Skeleton = styled.div<{
  $height: string;
  $width: string;
  $boderRadius: string;
}>`
  background: linear-gradient(90deg, #e8e8e8 0px, #f8f8f8 40px, #e8e8e8 80px);
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  border-radius: ${(props) => props.$boderRadius};
  margin-top: 1.5rem;
  animation: ${sekletonAnimation} 2s infinite;
`;

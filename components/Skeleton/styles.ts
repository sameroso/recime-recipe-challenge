// .skeleton-placeholder {
//     background: linear-gradient(90deg, #e8e8e8 0px, #f8f8f8 40px, #e8e8e8 80px);
//     background-size: 350px;
//     width: 100%;
//     height: 1.45rem;
//     border-radius: 3px;
//     margin-top: 1.5rem;
//     animation: animation 2.5s infinite;
//   }
// }

// @keyframes animation {
//   0% {
//     background-position: -100px;
//   }
//   40%,
//   100% {
//     background-position: 270px;
//   }
// }

import { keyframes, styled } from "@/libs/styled-components";

const sekletonAnimation = keyframes`
 0% {
    background-position: -100px;
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
  animation: ${sekletonAnimation} 2.5s infinite;
`;

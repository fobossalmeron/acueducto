import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonWrapper = styled.div`
  background: #2a2a2a;
  background-image: linear-gradient(
    to right,
    #2a2a2a 0%,
    #3a3a3a 20%,
    #2a2a2a 40%,
    #2a2a2a 100%
  );
  background-repeat: no-repeat;
  background-size: 200% 100%;
  display: inline-block;
  position: relative;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${shimmer};
  animation-timing-function: linear;
`;

const SkeletonContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  border-radius: 20px;
  max-width: 800px;

  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 20%;
  }
`;

const ImageSkeleton = styled(SkeletonWrapper)`
  width: 180px;
  height: 180px;
  border-radius: 20px;
  margin-right: 5%;

  @media (max-width: 900px) {
    max-width: 150px;
    margin-bottom: 2rem;
  }
`;

const ContentSkeleton = styled.div`
  flex-grow: 1;
`;

const TitleSkeleton = styled(SkeletonWrapper)`
  height: 30px;
  width: 70%;
  margin-bottom: 12px;
`;

const GuestSkeleton = styled(SkeletonWrapper)`
  height: 24px;
  width: 60%;
  margin-bottom: 10px;
`;

const DateCatSkeleton = styled(SkeletonWrapper)`
  height: 20px;
  width: 40%;
  margin-bottom: 15px;
`;

const DescriptionSkeleton = styled(SkeletonWrapper)`
  height: 16px;
  width: 100%;
  margin-bottom: 8px;
`;

const ButtonSkeleton = styled(SkeletonWrapper)`
  height: 40px;
  width: 180px;
  border-radius: 20px;
  margin-top: 15px;
`;

const EpisodePreviewSkeleton: React.FC = () => {
  return (
    <SkeletonContainer>
      <ImageSkeleton />
      <ContentSkeleton>
        <TitleSkeleton />
        <DescriptionSkeleton />
        <DescriptionSkeleton style={{ width: "90%" }} />
        <DescriptionSkeleton style={{ width: "80%" }} />
        <ButtonSkeleton />
      </ContentSkeleton>
    </SkeletonContainer>
  );
};

export default EpisodePreviewSkeleton;

"use client";
import Image from "next/image";
import styled from "styled-components";

interface ProfileProps {
  $center?: string;
  status?: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 6px;
  background-color: #d5d3d3;
  width: 15rem;
  padding: 0.4rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const Img = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

export const Name = styled.span`
  font-size: 12px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Span = styled.span`
  margin: 0.2rem;
  font-size: 12px;
`;

export const Status = styled.span<ProfileProps>`
  color: ${(props) => (props.status === 1 ? "green" : "red")};
`;

export const Box = styled.div<ProfileProps>`
  width: 100%;
  white-space: nowrap;
  text-align: ${(props) => (props.$center ? "center" : "left")};
`;

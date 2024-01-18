import React from "react";
import styled from "styled-components";
import imageData from "../../../assets/imageData";

export default function AddFolderListBox({
  name,
  count,
  folderChecked,
  onClick,
}) {
  const checked = name === folderChecked;
  const handleClick = () => {
    onClick(name);
  };
  return (
    <>
      <Box onClick={handleClick}>
        <Name>{name}</Name> <Count>{count}개 링크</Count>
        {checked && (
          <Image src={imageData.modalCheckedIcon} alt={name + "체크됨"} />
        )}
      </Box>
    </>
  );
}

const Box = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  width: 264px;
  align-items: center;
  gap: 8px;
  padding: 8px;
`;

const Name = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #373740;
`;

const Count = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #9fa6b2;
`;

const Image = styled.img`
  margin-left: auto;
`;

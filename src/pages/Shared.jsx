import React, { useEffect, useState } from "react";
import "../styles/Shared.css";
import codeitLogo from "../assets/images/shared-white.svg";
import CardList from "../Components/CardList";
import { getShredCardList } from "../apis/api";
import searchIcon from "../assets/images/shared-search.svg";

export default function Shared() {
  const [cardListItem, setCardListItem] = useState(null);
  const [folderOwner, setFolderOwner] = useState(null);
  const [folderName, setFolderName] = useState("");
  const handleGetCardList = async () => {
    let result;
    try {
      result = await getShredCardList();
    } catch (error) {
      console.log(error);
      return;
    }
    const { folder } = result;
    const { links, owner, name } = folder;
    setCardListItem(links);
    setFolderOwner(owner);
    setFolderName(name);
  };

  useEffect(() => {
    handleGetCardList();
  }, []);

  return (
    <main>
      {folderOwner ? (
        <SharedHeader folderName={folderName} folderOwner={folderOwner} />
      ) : (
        ""
      )}

      <div className="shared-card-board">
        <form className="shared-search-form">
          <img src={searchIcon} alt="돋보기 아이콘" />
          <input name="search" placeholder="링크를 검색해보세요." />
        </form>
        {cardListItem ? <CardList itemList={cardListItem} /> : ""}
      </div>
    </main>
  );
}

function SharedHeader({ folderOwner, folderName }) {
  const ownerName = folderOwner.name ? folderOwner.name : null;
  const source = folderOwner.profileImageSource
    ? folderOwner.profileImageSource
    : null;
  return (
    <div className="shared-header">
      {source ? (
        <img className="user-profile-img" src={source} alt="유저이미지" />
      ) : (
        <div className="codeit-img-background">
          <img src={codeitLogo} alt="코드잇 로고 이미지" />
        </div>
      )}

      <span>{ownerName}</span>
      <h2>{folderName}</h2>
    </div>
  );
}

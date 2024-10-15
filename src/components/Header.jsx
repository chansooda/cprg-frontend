import React from 'react';
import '../styles/Header.css';  // styles 폴더에서 CSS를 가져옴
import menuIcon from '../assets/icons/menu.png'; // 이미지 불러오기

const Header = () => {
  return (
    <header className="header">
      <h1>MBTI P인 내가 J가 된 이유</h1>
      <img src={menuIcon} alt="Menu" className="menu-icon" />
    </header>
  );
};

export default Header;



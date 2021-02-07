import React from 'react';
import SearchInput from './SearchInput';
import iconSet from '../svg/selection.json';
import IcomoonReact from 'icomoon-react';

const Header = (props) => {
  return (
    <header id="main-header">
      <IcomoonReact id="logo" iconSet={iconSet} icon="leaf" />
      <SearchInput />
      <button className="button button--login">
        <IcomoonReact
          className="icon icon--login"
          iconSet={iconSet}
          icon="user"
        />
      </button>
    </header>
  );
};

export default Header;

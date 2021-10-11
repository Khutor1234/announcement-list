import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import { onSearch, modalOpen} from '../../actions';

const Header = ({onSearch, modalOpen}) => {
  return (
    <header className="header">
      <div className="header-title">Announcements</div>
      <div>
        <input className="header-search" type="search" placeholder="Search" onChange={e => onSearch(e)}/> 
        <button className="header-btn" onClick={() => modalOpen()}>Add an announcement</button>
      </div>
    </header>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
      onSearch: (e) => dispatch(onSearch(e.target.value)),
      modalOpen: () => dispatch(modalOpen())
  }
}

export default connect(null, mapDispatchToProps)(Header);;

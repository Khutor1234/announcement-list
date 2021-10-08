import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import { onSearch, modalOpen} from '../../actions';

const Header = ({onSearch, modalOpen}) => {

  return (
    <header className="header">
      <div className="header-title">События во Львове 2020</div>
      <div>
        <input className="header-search" type="search" placeholder="Поиск по сайту" onChange={e => onSearch(e)}/> 
        <button className="header-btn" onClick={() => modalOpen()}>Добавить событие</button>
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

import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUser } from '@fortawesome/free-regular-svg-icons';
//import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('header')}>
      <div className={cx('wrap')}>
        <div className={cx('header__logo')}>
          <img src={images.logo} alt="Pet" />
        </div>
        <div className={cx('header__action')}>
          <button className={cx('header__signin')}>Đăng kí</button>
          <button className={cx('header__login')}>Đăng nhập</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

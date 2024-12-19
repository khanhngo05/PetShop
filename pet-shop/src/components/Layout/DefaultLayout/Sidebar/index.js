import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx('category__wrap')}>
      <div className={cx('grid', 'wide')}>
        <div className={cx('row')}>
          <div className={cx('col c-12')}>
            <div className={cx('row')}>
              <div className={cx('col c-12', 'category__title')}>DANH MỤC</div>
              <div className={cx('col c-3', 'category__item')}>
                <button className={cx('category__item-link')}>
                  <div className={cx('category__item-img')}></div>
                  <h4>Thú cưng</h4>
                </button>
              </div>
              <div className={cx('col c-3', 'category__item')}>
                <button className={cx('category__item-link')}>
                  <div className={cx('category__item-img')}></div>
                  <h4>Thú cưng</h4>
                </button>
              </div>
              <div className={cx('col c-3', 'category__item')}>
                <button className={cx('category__item-link')}>
                  <div className={cx('category__item-img')}></div>
                  <h4>Thú cưng</h4>
                </button>
              </div>
              <div className={cx('col c-3', 'category__item')}>
                <button className={cx('category__item-link')}>
                  <div className={cx('category__item-img')}></div>
                  <h4>Thú cưng</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

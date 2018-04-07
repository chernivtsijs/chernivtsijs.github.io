import React from 'react'
import Link from 'gatsby-link'
import styles from './Header.module.styl';

const Header = () => (
  <div className={styles.header}>
    <div className="header-wrapper">
      <div className="row header-title">
        <img src="./images/logo.svg" alt="" className="header-logo"/>
        <div>
          <h1>Title</h1>
          <p className="desc">Description</p>
        </div>
      </div>
      <div className="row date">Date</div>
      <div className="row">
        <a className="action-btn" href="title">Check out!</a>
      </div>
      <div className="row questions">
        <a href="">Any questions?</a>
      </div>
      <div className="scroll">
        <img src="./images/icons/scroll.png" alt=""/>
      </div>
    </div>
  </div>
)

export default Header

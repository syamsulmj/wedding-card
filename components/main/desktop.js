import React, {useState, useEffect} from 'react';
import Style from '/styles/main/MainDesktop.module.scss';
import Loader from '/components/common/Loader';

const MainDesktop = () => {

  return (
    <div className={Style.main}>
      <div className={Style.content}>
        HEY! I'M REALLY SORRY, BUT THIS SITES
        <br/>
        THIS HASN'T SUPPORT DESKTOP VIEW YET
        <br/>
        PLEASE REFRESH IN MOBILE VIEW. THANK YOU!
        <div>
          <div className={Style.ldsHourglass}></div>
          <div className={Style.ldsGrid}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={Style.ldsCircle}><div></div></div>
        </div>
      </div>
    </div>
  );
}

export default MainDesktop;

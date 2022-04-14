import React, {useState, useEffect} from 'react';
import Style from '/styles/main/MainMobile.module.scss';
import Loader from '/components/common/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWaze,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import { isAndroid } from 'mobile-device-detect';


const MainMobile = () => {
  const [renderState, setRenderState] = useState(false);
  const [android, setAndroid] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAndroid(isAndroid);
      setRenderState(true);
    }, 3000)
  }, [])

  const renderContent = () => {
    return (
      <React.Fragment>
        <div className={Style.main}>
          <div className={Style.content}>
            <div className={Style.title}>Walimatul Urus</div>
            <div className={Style.botTitle}>UNDANGAN MAJLIS PERKAHWINAN </div>
            <img className={Style.coupleImage} src="/images/cartoon-malay-wedding.png" />
            <div className={Style.names}>
              <div className={Style.groom}>Syamsul</div>
              <div className={Style.middle}><div className={`${android ? Style.isAndroid : ''}`}>&</div></div>
              <div className={Style.bride}>Alya</div>
            </div>
            <div className={Style.infos}>
              <div className={Style.dateDiv}>SABTU | 11 JUNE | 2022</div>
              <hr style={{width: '50%', borderColor: '#db3060'}} />
              <div className={Style.timeDiv}>12:00 TGH HARI - 4:00 PTG</div>
            </div>
          </div>
        </div>
        <div className={Style.secondMain}>
          <img src="/images/bismillah-text.png" style={{width: '8em', height: '3.5em'}} />
          <div className={Style.normalText}>Dengan nama Allah yang Maha Pemurah lagi Maha Penyayang</div>
          <br />
          <div className={Style.parentsName}>
            <div>HAJI MOHD JAFRI BIN AB RASHID</div>
            <div>&</div>
            <div>HAJAH NORAINI BT ISMAIL</div>
          </div>
          <div className={Style.normalText}>
            Dengan segala hormatnya menjemput Dato/Datuk/Datin/Tuan/Puan ke
            Majlis Perkahwinan anak kami dan pasangannya
          </div>
          <div className={Style.groomBrideNames}>
            <div>SYAMSUL BIN MOHD JAFRI</div>
            <div>&</div>
            <div>ALYA NUR ATHIRAH BT KAMARUZZAMAN</div>
          </div>
          <div className={Style.normalText}>
            <div>
              Bertempat di
              <br/>
              <br/>
              No.18, Lorong Bandar Putra 3/8,
              Bandar Putra, 26060, Kuantan, Pahang
            </div>
          </div>
          <div className={Style.mapDiv}>
            <div className={Style.btnLink}>
              <a href="https://waze.com/ul/hw29mrne4z" target="_blank">
                <FontAwesomeIcon icon={faWaze} style={{color: '#ffffff' }} />
                <span>Get here with Waze!</span>
              </a>
            </div>
            <div className={Style.btnLink}>
              <a href="https://goo.gl/maps/A68x9M14wVZbYEQN9" target="_blank">
                <FontAwesomeIcon icon={faGooglePlus} style={{color: '#ffffff' }} />
                <span>Get here with Google Map!</span>
              </a>
            </div>
            <div className={Style.mapImg}>
              <img src="/images/syamsul-map.png" />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  const renderDecision = () => {
    if (renderState) {
      return renderContent();
    }
    else {
      return (
        <div className={Style.loadingPage}>
          <Loader />
        </div>
      )
    }
  }

  return renderDecision();
}

export default MainMobile;

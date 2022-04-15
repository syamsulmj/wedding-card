import React, {useState, useEffect} from 'react';
import Style from '/styles/main/MainMobile.module.scss';
import Loader from '/components/common/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWaze,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import { isAndroid, isIOS } from 'mobile-device-detect';


const MainMobile = () => {
  const [renderState, setRenderState] = useState(false);
  const [android, setAndroid] = useState(false);
  const [ios, setIos, deviceType] = useState(false);

  const iosBg = {
    backgroundPositionX: '50%',
    backgroundPositionY: '0%',
    WebkitBackgroundSize: '100% 50%'
  }

  const iosContentTitle = {
    paddingTop: '3em',
  }

  useEffect(() => {
    setTimeout(() => {
      setAndroid(isAndroid);
      setIos(isIOS);
      setRenderState(true);
    }, 3000)
  }, [])

  const renderContent = () => {
    return (
      <React.Fragment>
        <div className={Style.main} style={ios ? iosBg : {}}>
          <div className={Style.content}>
            <div className={Style.title} style={ios ? iosContentTitle : {}}>Walimatul Urus</div>
            <div className={Style.botTitle}>UNDANGAN MAJLIS PERKAHWINAN </div>
            <img className={Style.coupleImage} src="/images/cartoon-malay-wedding.png" />
            <div className={Style.names}>
              <div className={Style.groom}>Alya</div>
              <div className={Style.middle}><div className={`${android ? Style.isAndroid : ''}`}>&</div></div>
              <div className={Style.bride}>Syamsul</div>
            </div>
            <div className={Style.infos}>
              <div className={Style.dateDiv}>SABTU | 4 JUNE | 2022</div>
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
            <div>KAMARUZZAMAN BIN KALIB</div>
            <div>&</div>
            <div>ALIA BINTI OMAR</div>
          </div>
          <div className={Style.normalText}>
            Dengan segala hormatnya menjemput Dato/Datuk/Datin/Tuan/Puan ke
            Majlis Perkahwinan Puteri kesayangan kami dan pasangannya
          </div>
          <div className={Style.groomBrideNames}>
            <div>ALYA NUR ATHIRAH BT KAMARUZZAMAN</div>
            <div>&</div>
            <div>SYAMSUL BIN MOHD JAFRI</div>
          </div>
          <div className={Style.normalText}>
            <div>
              Bertempat di
              <br/>
              <br/>
              NO. 11, LORONG BUKIT SETONGKOL 57,
              TAMAN BUKIT SETONGKOL
            </div>
          </div>
          <div className={Style.mapDiv}>
            <div className={Style.btnLink}>
              <a href="https://waze.com/ul/hw29mwsrpf" target="_blank">
                <FontAwesomeIcon icon={faWaze} style={{color: '#ffffff' }} />
                <span>Get here with Waze!</span>
              </a>
            </div>
            <div className={Style.btnLink}>
              <a href="https://maps.app.goo.gl/AwAJCv89buMzNPHu8" target="_blank">
                <FontAwesomeIcon icon={faGooglePlus} style={{color: '#ffffff' }} />
                <span>Get here with Google Map!</span>
              </a>
            </div>
            <div className={Style.mapImg}>
              <img src="/images/alya-map.png" />
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

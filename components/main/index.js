import React, {useState, useEffect} from 'react';
import MoS from '/styles/main/MainMobile.module.scss';
import DeS from '/styles/main/MainDesktop.module.scss';
import { isMobile } from 'mobile-device-detect';
import Loader from '/components/common/Loader';

const Main = () => {
  const [renderState, setRenderState] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setRenderState(isMobile ? "mobile" : "desktop");
    }, 3000)
  }, [])

  const renderMobile = () => {
    return (
      <div className={MoS.main}>
        <div className={MoS.content}>
          <img className={MoS.coupleImage} src="/images/cartoon-malay-wedding.png" />
        </div>
      </div>
    )
  }

  const renderDesktop = () => {
    return (
      <div className={DeS.main}>
        <div>Something in here</div>
      </div>
    )
  }

  const renderDecision = () => {
    if (renderState == null) {
      return (
        <div className={MoS.loadingPage}>
          <Loader />
        </div>
      )
    }

    return renderState === "mobile" ? renderMobile() : renderDesktop();
  }

  return renderDecision();
}

export default Main;

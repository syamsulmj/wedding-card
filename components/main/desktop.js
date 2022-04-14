import React, {useState, useEffect} from 'react';
import Style from '/styles/main/MainDesktop.module.scss';
import Loader from '/components/common/Loader';

const MainDesktop = () => {
  const [renderState, setRenderState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setRenderState(true);
    }, 3000)
  }, [])

  const renderContent = () => {
    return (
      <div className={Style.main}>
        <div className={Style.content}>
          <img className={Style.coupleImage} src="/images/cartoon-malay-wedding.png" />
        </div>
      </div>
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

export default MainDesktop;

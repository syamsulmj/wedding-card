import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import MainMobile from '/components/main/mobileSyamsul';
import MainDesktop from '/components/main/desktop';
import { isMobile } from 'mobile-device-detect';

const SyamsulWedding = () => {
  const [renderState, setRenderState] = useState(null);

  useEffect(() => {
    setRenderState(isMobile ? "mobile" : "desktop");
  }, [])

  const renderContent = () => {
    if (renderState === null) {
      return (
        <div></div>
      )
    }
    else {
      return renderState === "mobile" ? (<MainMobile />) : (<MainDesktop />);
    }
  }

  return (
    <React.Fragment>
      <Head>
        <title>Syamsul & Alya</title>
        <meta name="description" content="Anda Di Jemput! Raikan Cinta Majlis Perkahwinan Syamsul Dan Alya." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/raikan-cinta.jpeg" />
      </Head>
      {renderContent()}
    </React.Fragment>
  )
}

export default SyamsulWedding;

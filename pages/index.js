import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import Style from '/styles/main/MainPage.module.scss';

const App = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Wedding Syamsul & Alya</title>
        <meta name="description" content="Anda Di Jemput! Raikan Cinta Majlis Perkahwinan Syamsul Dan Alya." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/raikan-cinta.jpeg" />
      </Head>
      <div className={Style.main}>
        <div className={Style.content}>
          <div className={Style.selectionText}>Who's wedding event are you attending?</div>
          <div className={Style.btnSelection}>
            <div><a href="/alya-wedding">Alya's Wedding</a></div>
            <div><a href="/syamsul-wedding">Syamsul's Wedding</a></div>
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}

export default App;

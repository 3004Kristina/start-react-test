import Head from 'next/head';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import style from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useViewportScroll();

  const btnTopOutputRange = isMobile ? [1000, 600, 470] : [1200, 830, 800];
  const btnTopSecondaryOutputRange = isMobile ? [1100, 700, 570] : [1200, 830, 800];

  const logoTop = useTransform(scrollY, [0, 200], ['50%', '0%']);
  const logoTranslateY = useTransform(scrollY, [0, 200, 300], ['-50%', '-25%', '-27.5%']);
  const contentBgScale = useTransform(scrollY, [300, 500, 700], [0, 0.1, 1]);
  const contentScale = useTransform(scrollY, [700, 900, 1100], [0, 0.1, 1]);
  const btnTop = useTransform(scrollY, [1200, 1300, 1400], btnTopOutputRange);
  const btnSecondaryTop = useTransform(scrollY, [1200, 1300, 1400], btnTopSecondaryOutputRange);
  const btnTextScale = useTransform(scrollY, [1500, 1700, 1900], [0, 0.1, 1]);

  useEffect(() => {
    window.addEventListener('resize', handleDeviceSpot);

    return () => {
      window.removeEventListener('resize', handleDeviceSpot);
    }
  }, [])

  function handleDeviceSpot() {
      setIsMobile(window.innerWidth < 900);
  }

  return (
    <>
      <Head>
        <title>Start.ru - тест</title>
        <meta name="description" content="test app" />
      </Head>
      <div className={style.main}>
        <div className="logo_wrapper">
          <motion.img
            src="/logo.png"
            alt="logo"
            className={style.logo}
            style={{
              top: logoTop,
              translateX: '-50%',
              translateY: logoTranslateY,
            }}
          />
        </div>

        <div className="content_wrapper">
          <motion.img
            src="/cloud.png"
            alt="content_background"
            className={style.content_bg}
            style={{
              translateX: '-50%',
              scaleX: contentBgScale,
              scaleY: contentBgScale,
            }}
          />
          <motion.img
            src="/text.png"
            alt="content"
            className={style.content}
            style={{
              translateX: '-50%',
              scaleX: contentScale,
              scaleY: contentScale,
            }}
          />
        </div>

        <div className="btn_wrapper">
          <motion.img
            src="/button1.png"
            alt="btn"
            className={style.btn}
            style={{
              top: btnTop,
            }}
          />
          <motion.img
            src="/button2.png"
            alt="btn"
            className={`${style.btn} ${style.secondary}`}
            style={{
              top: btnSecondaryTop,
            }}
          />
          <motion.img
            src="/text1.png"
            alt="btn_text"
            className={style.btn_text}
            style={{
              scaleX: btnTextScale,
              scaleY: btnTextScale,
            }}
          />
          <motion.img
            src="/text2.png"
            alt="btn_text"
            className={`${style.btn_text} ${style.secondary}`}
            style={{
              scaleX: btnTextScale,
              scaleY: btnTextScale,
            }}
          />
        </div>
      </div>
    </>
  );
}

import Head from 'next/head';
import Link from 'next/link';
import styles from '../introduce/introduce.page.module.css';

export default function IntroduceScreen() {

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.parallaxTop}>
        <div className={styles.parallaxImage1}></div>
        <div className={styles.content}>Hey there!</div>
        <div className={styles.wavesContent}>
          <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className={styles.parallax}>
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
        </div>
      </div>
      <div className={styles.static}>
        <div className={styles.subContent}>Pure CSS Parallax Scrolling Effect</div>
      </div>
      <div className={styles.parallax}>
        <div className={styles.wavesTop}>
            <svg className={styles.wavesReverse} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                  <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className={styles.parallax}>
                  <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                  <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                  <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                  <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
              </svg>
          </div>
        <div className={styles.parallaxImage2}></div>
        <div className={styles.content}>I'm Trungquandev!</div>
        <div className={styles.wavesBot}>
          <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className={styles.parallax}>
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
        </div>
      </div>
      <div className={styles.static}>
        <div className={styles.subContent}>Pure CSS Parallax Scrolling Effect</div>
      </div>
      <div className={styles.parallax}>
      <div className={styles.wavesTop}>
            <svg className={styles.wavesReverse} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                  <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className={styles.parallax}>
                  <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                  <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                  <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                  <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
              </svg>
          </div>
        <div className={styles.parallaxImage3}></div>
        <div className={styles.content}>From the Earth!</div>
        <div className={styles.wavesBot}>
          <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
              <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
              </defs>
              <g className={styles.parallax}>
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
        </div>
      </div>
      <div className={styles.static}>
        <div className={styles.subContent}>
          <div>Thank you!</div>
          <div><a href="https://trungquandev.com" target="_blank" rel="noopener noreferrer">Blog: https://trungquandev.com</a></div>
          <div><a href="https://cv.trungquandev.com" target="_blank" rel="noopener noreferrer">CV: https://cv.trungquandev.com</a></div>
          <div><a href="https://www.youtube.com/c/TrungquandevOfficial" target="_blank" rel="noopener noreferrer">YouTube: Trungquandev Official</a></div>
          <div><a href="https://www.vecteezy.com/" target="_blank" rel="noopener noreferrer">Credit to the images from: https://www.vecteezy.com/</a></div>
        </div>
      </div>
    </div>
  );
}

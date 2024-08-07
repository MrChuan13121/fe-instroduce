'use client';

import React, { useEffect, useRef } from 'react';
import styles from './feedback.module.css';
import { TweenMax, Power3 } from 'gsap';

const Feedback: React.FC = () => {
    const cardSliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cards = cardSliderRef.current?.querySelectorAll(`.${styles.slider_item}`);
        if (cards) {
            startAnim(Array.from(cards));
        }
    }, []);

    function startAnim(array: Element[]) {
        if (array.length >= 4) {
            // Đặt vị trí ban đầu cho các thẻ
            TweenMax.set(array[0], { x: 0, y: 0, opacity: 0.75, zIndex: 0 });
            TweenMax.set(array[1], { x: 79, y: 125, opacity: 1, zIndex: 1 });
            TweenMax.set(array[2], { x: 0, y: 250, opacity: 0.75, zIndex: 0 });

            // Bắt đầu hiệu ứng chuyển động
            TweenMax.fromTo(
                array[0],
                0.5,
                { x: 0, y: 0, opacity: 0.75 },
                {
                    x: 0,
                    y: -120,
                    opacity: 0,
                    zIndex: 0,
                    delay: 0.03,
                    ease: Power3.easeInOut,
                    onComplete: () => sortArray(array),
                }
            );

            TweenMax.fromTo(
                array[1],
                0.5,
                { x: 79, y: 125, opacity: 1, zIndex: 1 },
                {
                    x: 0,
                    y: 0,
                    opacity: 0.75,
                    zIndex: 0,
                    boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)',
                    ease: Power3.easeInOut,
                }
            );

            TweenMax.to(array[2], 0.5, {
                bezier: [{ x: 0, y: 250 }, { x: 65, y: 200 }, { x: 79, y: 125 }],
                boxShadow: '-5px 8px 8px 0 rgba(82,89,129,0.05)',
                zIndex: 1,
                opacity: 1,
                ease: Power3.easeInOut,
            });
        } else {
            const cardSlider = document.getElementById('card_slider');
            if (cardSlider) {
                cardSlider.innerHTML += '<p>Sorry, carousel should contain more than 3 slides</p>';
            }
        }
    }

    function sortArray(array: Element[]) {
        setTimeout(() => {
            const firstElem = array.shift();
            if (firstElem) {
                array.push(firstElem);
                startAnim(array);
            }
        }, 3000);
    }

    return (
        <div className={styles.slider_wrap}>
            <div id="card_slider" className={styles.slider} ref={cardSliderRef}>
                <div className={styles.slider_item}>
                    <div className={styles.animation_card_image}>
                        <img
                            src="https://m.media_amazon.com/images/M/MV5BMTk5Mzc4ODU0Ml5BMl5BanBnXkFtZTcwNjU1NTI0Mw@@._V1_UY317_CR12,0,214,317_AL_.jpg"
                            alt=""
                        />
                    </div>
                    <div className={styles.animation_card_content}>
                        <h4 className={styles.animation_card_content_title}>
                            Charlize Theron 1
                        </h4>
                        <p className={styles.animation_card_content_description}>
                            With no contractual commitments comes the freedom of having top
                            notch content created whenever.
                        </p>
                        <p className={styles.animation_card_content_city}>New York, NY</p>
                    </div>
                </div>
                <div className={styles.slider_item}>
                    <div className={styles.animation_card_image}>
                        <img
                            src="https://m.media_amazon.com/images/M/MV5BMTk5Mzc4ODU0Ml5BMl5BanBnXkFtZTcwNjU1NTI0Mw@@._V1_UY317_CR12,0,214,317_AL_.jpg"
                            alt=""
                        />
                    </div>
                    <div className={styles.animation_card_content}>
                        <h4 className={styles.animation_card_content_title}>
                            Charlize Theron 2
                        </h4>
                        <p className={styles.animation_card_content_description}>
                            With no contractual commitments comes the freedom of having top
                            notch content created whenever.
                        </p>
                        <p className={styles.animation_card_content_city}>New York, NY</p>
                    </div>
                </div>
                <div className={styles.slider_item}>
                    <div className={styles.animation_card_image}>
                        <img
                            src="https://m.media_amazon.com/images/M/MV5BMTk5Mzc4ODU0Ml5BMl5BanBnXkFtZTcwNjU1NTI0Mw@@._V1_UY317_CR12,0,214,317_AL_.jpg"
                            alt=""
                        />
                    </div>
                    <div className={styles.animation_card_content}>
                        <h4 className={styles.animation_card_content_title}>
                            Charlize Theron 3
                        </h4>
                        <p className={styles.animation_card_content_description}>
                            With no contractual commitments comes the freedom of having top
                            notch content created whenever.
                        </p>
                        <p className={styles.animation_card_content_city}>New York, NY</p>
                    </div>
                </div>
                <div className={styles.slider_item}>
                    <div className={styles.animation_card_image}>
                        <img
                            src="https://m.media_amazon.com/images/M/MV5BMTk5Mzc4ODU0Ml5BMl5BanBnXkFtZTcwNjU1NTI0Mw@@._V1_UY317_CR12,0,214,317_AL_.jpg"
                            alt=""
                        />
                    </div>
                    <div className={styles.animation_card_content}>
                        <h4 className={styles.animation_card_content_title}>
                            Charlize Theron 4
                        </h4>
                        <p className={styles.animation_card_content_description}>
                            With no contractual commitments comes the freedom of having top
                            notch content created whenever.
                        </p>
                        <p className={styles.animation_card_content_city}>New York, NY</p>
                    </div>
                </div>
                <div className={styles.slider_item}>
                    <div className={styles.animation_card_image}>
                        <img
                            src="https://m.media_amazon.com/images/M/MV5BMTk5Mzc4ODU0Ml5BMl5BanBnXkFtZTcwNjU1NTI0Mw@@._V1_UY317_CR12,0,214,317_AL_.jpg"
                            alt=""
                        />
                    </div>
                    <div className={styles.animation_card_content}>
                        <h4 className={styles.animation_card_content_title}>
                            Charlize Theron 5
                        </h4>
                        <p className={styles.animation_card_content_description}>
                            With no contractual commitments comes the freedom of having top
                            notch content created whenever.
                        </p>
                        <p className={styles.animation_card_content_city}>New York, NY</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
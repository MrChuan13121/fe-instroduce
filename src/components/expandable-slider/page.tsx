'use client';

import React, { useState } from 'react';
import styles from './expandable-slider.module.css';

interface Item {
  title: string;
  description: string;
  image: string;
}

const ExpandableSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items: Item[] = [
    {
      title: 'Suối Mơ',
      description: 'Thích hợp cho các cuộc vui chơi ngoài trời. Tổ chức 1 bữa tiệc nhỏ cạnh dòng Suối Mơ thơ mộng vào buổi chiều thứ 7 thì thật là sảng khoái.',
      image: 'beach.png'
    },
    {
      title: 'Cầu Sài Gòn',
      description: 'Thích hợp cho các cuộc vui chơi ngoài trời. Tổ chức 1 bữa tiệc nhỏ cạnh dòng Suối Mơ thơ mộng vào buổi chiều thứ 7 thì thật là sảng khoái.',
      image: 'beach.png'
    },
    {
      title: 'Đầm sen',
      description: 'Thích hợp cho các cuộc vui chơi ngoài trời. Tổ chức 1 bữa tiệc nhỏ cạnh dòng Suối Mơ thơ mộng vào buổi chiều thứ 7 thì thật là sảng khoái.',
      image: 'beach.png'
    },
    {
      title: 'Hòn Tằm',
      description: 'Thích hợp cho các cuộc vui chơi ngoài trời. Tổ chức 1 bữa tiệc nhỏ cạnh dòng Suối Mơ thơ mộng vào buổi chiều thứ 7 thì thật là sảng khoái.',
      image: 'beach.png'
    }
  ];

  const handleItemClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.expandableSlider}>
<section className={styles.gameSection}>
      <h2 className={styles.lineTitle}>Địa điểm Check in</h2>
      <div className={styles.customCarousel}>
        {items.map((item, index) => (
          <div
            key={index}
            className={activeIndex === index ? styles.itemActive : styles.item}
            style={{ backgroundImage: require('./../../lib/images/beach.png') }}
            onClick={() => handleItemClick(index)}
          >
            <div className={styles.itemDesc}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
    
  );
};

export default ExpandableSlider;

import React from "react";
import Image from "next/image";

import search from '@/assets/icons/search.svg'
import deep from '@/assets/icons/deep.svg'

import styles from './FeatureCard.module.scss'

const FeatureCard = () => {
 return (
  <div className={styles.features}>
   <div className={styles.feature_item}>
    <Image src={search} alt="Search" />
    <div>
     <p className={styles.feature_title}>Быстрая проверка</p>
     <p className={styles.feature_description}>Моментальный анализ телефонных номеров на наличие проблем. Статус Бот позволяет быстро и удобно проверить, безопасен ли номер для использования.</p>
    </div>
   </div>
   <div className={styles.feature_item}>
    <Image src={deep} alt="Deep" />
    <div>
     <p className={styles.feature_title}>Периодичная проверка</p>
     <p className={styles.feature_description}>Периодичная проверка номера телефона на наличие проблем.</p>
    </div>
   </div>
  </div>
 );
}

export default FeatureCard;

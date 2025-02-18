"use client"

import Header from "@/components/Header";
import Image from "next/image";
import styles from "./page.module.scss";

import phone from '@/assets/phone.png'
import bubble1 from '@/assets/icons/bubble1.svg'
import buuble2 from '@/assets/icons/bubble2.png'
import clear from '@/assets/icons/clear.svg'
import problem from '@/assets/icons/problem.svg'
import headmade from '@/assets/icons/headmade.svg'


import chatOk from '@/assets/chat_ok.png'
import chatNot from '@/assets/chat_fake.png'

import { Button, Col, Row } from "antd";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  const year = new Date().getFullYear()
  return (
    <div className={styles.page}>
      <Row justify={'center'}>
        <Col xs={22} lg={18}>
          <Header />
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col xs={22} lg={18}>
          <Row align={'middle'} justify={'center'}>
            <Col xs={24} lg={12}>
              <h1 className={styles.title}>Phone Status Bot</h1>
              <p className={styles.subtitle}>Ваш помощник в проверке телефонных номеров</p>
            </Col>
            <Col xs={24} lg={12} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
              <Image className={styles.phone} src={phone} alt="Phone" />
              <Button href="https://t.me/phone_status_support_bot" target="_blank" className={styles.contact_us}>Связаться с нами</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify={'center'}>
        <Col xs={22} lg={18}>
          <h1 className={styles.title}>Что делает бот</h1>
          <FeatureCard />
          <div className={styles.how_it_works}>
            <div className={styles.how_it_works_header}>
              <p>Как это работает
              </p>
            </div>
            <div className={styles.how_it_works_dark}>
              <div className={styles.how_it_works_dark_item}>
                <h1 className={styles.how_it_works_dark_title}>1. Вы предоставляете список телефонных номеров</h1>
                <Image className={styles.bubbles} src={bubble1} alt="bubble1" />
              </div>
              <div className={styles.how_it_works_dark_item}>
                <h1 className={styles.how_it_works_dark_title}>2. Бот автоматически проверяет каждый номер</h1>
                <Image className={styles.bubbles} src={buuble2} alt="bubble1" />
              </div>
            </div>
          </div>
          <div className={styles.how_it_works_light}>
            <div className={styles.how_it_works_light_item_l}>
              <div className={styles.how_it_works_light_wrapper}>
                <Image className={styles.how_it_works_light_item_icon} src={clear} alt="clear" />
                <div>
                  <h2 className={styles.how_it_works_light_item_title}>Чистый номер</h2>
                  <p className={styles.how_it_works_light_item_description}>Номер прошел проверку, проблем не обнаружено</p>
                </div>
              </div>
              <Image className={styles.how_it_works_light_item_chat} src={chatOk} alt="chat" />
            </div>
            <div className={styles.how_it_works_light_item_r}>
              <div className={styles.how_it_works_light_wrapper}>
                <Image className={styles.how_it_works_light_item_icon} src={problem} alt="problem" />
                <div>
                  <h2 className={styles.how_it_works_light_item_title}>Проблемный номер</h2>
                  <p className={styles.how_it_works_light_item_description}>Бот нашел одну или несколько проблем: жалобы или спам</p>
                </div>
              </div>
              <Image className={styles.how_it_works_light_item_chat} src={chatNot} alt="chat" />
            </div>

          </div>
          <Row justify={'center'}>
            <Col>
              <Button href="https://t.me/phone_status_support_bot" target="_blank" className={styles.contact_us}>Связаться с нами</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className={styles.footer} justify={'center'} align={'middle'}>
        <Col className={styles.footer_wrapp}>
        <Image className={styles.headmade} src={headmade} alt="headmade"/>
        <p>Разработано <a href="https://headmade.pro/" target="_blank">HeadMade</a></p>
        <p>&#169;	{year}</p>
        </Col>
      </Row>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import styles from "../styles/welcomeCard.module.scss";
import Carrot from "@/assets/recipeScreen/CARROT-2.png";
import Image from "next/image";
import { FC } from "react";

interface WelcomeCardProps {
  onClose: () => void;
}

export const WelcomeCard: FC<WelcomeCardProps> = ({ onClose }) => {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -800 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <h2 className={styles.title}>Hey, friend of Aya 🤍</h2>
      <h3 className={styles.subTitle}>Merry Christmas & Happy New Year 🎄✨</h3>
      <p className={styles.text}>
        If the table is too full, the kitchen too loud, and someone is
        definitely overspicing — congrats, it’s a proper holiday.
      </p>
      <p className={styles.text}>
        For now, here’s a little gift: a jar of spices to smuggle Aya into your
        home. Not just flavors, but a permission slip to play in your own
        kitchen. The recipes I share are only the beginning — the rest is all
        you.
      </p>
      <p className={styles.text}>
        Use it generously, make a little mess, share your creations, tag me{" "}
        <a
          href="https://www.instagram.com/aya.cooks.cy/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          @aya.cooks.cy
        </a>{" "}
        and let’s keep the kitchen gossip alive. Because yes, Aya loves to sneak
        out of the restaurant and crash your dinner — holidays included.
      </p>
      <p className={styles.text}>
        Apron on, chef.
        <br />
        With love (and spice),
        <br />
        Aya Cooks 💛
      </p>

      <div className={styles.carrotWrapper}>
        <Image src={Carrot} alt="carrot" className={styles.carrotImg} />
        <button className={styles.carrotButton} onClick={onClose}>
          Delicious Hummus
        </button>
      </div>
    </motion.div>
  );
};

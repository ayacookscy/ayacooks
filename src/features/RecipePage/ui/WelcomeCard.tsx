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
      <h2 className={styles.title}>Hey, friend of Aya!</h2>
      <p className={styles.text}>
        For now, here’s a little gift: a jar of spices to take Aya home with
        you. Not just flavors, but a ticket to play in your own kitchen.
      </p>
      <p className={styles.text}>
        Use it, twist it, taste it. The recipes we share are only the beginning
        — the rest is all you. Share your creations, tag us
        <br />
        <a
          href="https://www.instagram.com/aya.cooks.cy/"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          @aya.cooks.cy
        </a>{" "}
        — let’s keep the kitchen gossip alive.
      </p>
      <p className={styles.text}>
        Because Aya loves to sneak out of the restaurant and crash your dinner
        too. Now the apron is yours, chef. Enjoy 💃🌿
      </p>
      <p className={styles.text}>
        With love (and spice),
        <br />
        Aya Cooks
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

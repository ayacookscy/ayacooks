"use client";
import AyaGif from "@/assets/welcomeScreen/ayagif.gif";
import Image from "next/image";
import Tomat from "@/assets/welcomeScreen/tomato3.png";
import Carrot from "@/assets/welcomeScreen/carrot.png";
import Challah from "@/assets/welcomeScreen/challah.png";
import BookNowImg from "@/assets/welcomeScreen/bookNow.svg";
import MenuImg from "@/assets/welcomeScreen/menu.svg";
import AdressImg from "@/assets/welcomeScreen/adress.svg";
import FlavorImg from "@/assets/welcomeScreen/flav.svg";
import PhoneImg from "@/assets/welcomeScreen/phoneNumber.svg";
import InstagramImg from "@/assets/welcomeScreen/instagram.svg";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import styles from "@/features/WelcomePage/styles/welcomePage.module.scss";

export const WelcomePage = () => {
  const totalItems = 9;
  const itemVariants: Variants = {
    hidden: (index: number) => ({
      y: (totalItems - index) * 2,
      opacity: 0,
    }),
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: index * 0.1,
      },
    }),
  };

  return (
    <div className={styles.welcomePage}>
      <div className={styles.gifContainer}>
        <Image
          src={AyaGif}
          alt="Aya cooks animation"
          fill
          priority
          style={{ objectFit: "contain" }}
        />
      </div>
      <motion.div
        custom={0}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className={styles.bookNowContainer}
      >
        <Link
          target="_blank"
          href="https://www.sevenrooms.com/explore/ayacooks/reservations/create/search/?date=2025-10-08&party_size=2"
        >
          <Image
            src={BookNowImg}
            alt="Book now button"
            fill
            className={styles.bookNow}
            style={{ objectFit: "contain" }}
          />
        </Link>
      </motion.div>

      <motion.div
        custom={1}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className={styles.menuContainer}
      >
        <Link href="/menu">
          <Image
            src={MenuImg}
            alt="Menu button"
            fill
            className={styles.menu}
            style={{ objectFit: "contain" }}
          />
        </Link>
      </motion.div>

      <motion.div
        custom={2}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className={styles.instagramContainer}
      >
        <Link href="https://www.instagram.com/aya.cooks/">
          <Image
            src={InstagramImg}
            alt="Instagram Image"
            fill
            style={{ objectFit: "contain" }}
          />
        </Link>
      </motion.div>

      <motion.div
        custom={3}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className={styles.tomatContainer}
      >
        <Image
          src={Tomat}
          alt="Tomat Image"
          fill
          style={{ objectFit: "contain" }}
        />
      </motion.div>

      <motion.div
        custom={4}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className={styles.challahContainer}
      >
        <Image
          src={Challah}
          alt="Challah Image"
          fill
          style={{ objectFit: "contain" }}
        />
      </motion.div>

      <motion.div
        custom={5}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className={styles.flavorContainer}
      >
        <Image
          src={FlavorImg}
          alt="Flavor Image"
          fill
          style={{ objectFit: "contain" }}
        />
      </motion.div>

      <motion.div
        custom={6}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className={styles.phoneContainer}
      >
        <Image
          src={PhoneImg}
          alt="Phone Image"
          fill
          style={{ objectFit: "contain" }}
        />
      </motion.div>

      <motion.div
        custom={7}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className={styles.carrotContainer}
      >
        <Image
          src={Carrot}
          alt="Carrot Image"
          fill
          style={{ objectFit: "contain" }}
        />
      </motion.div>

      <motion.div
        custom={8}
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className={styles.adressContainer}
      >
        <Image
          src={AdressImg}
          alt="Adress Image"
          fill
          style={{ objectFit: "contain" }}
        />
      </motion.div>
    </div>
  );
};

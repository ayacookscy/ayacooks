"use client";
import styles from "@/features/WelcomePage/styles/videoPopUp.module.scss";
import { createPortal } from "react-dom";
import { useState } from "react";
import { motion } from "framer-motion";

interface VideoPopUpProps {
  onClose: () => void;
}

export const VideoPopUp = ({ onClose }: VideoPopUpProps) => {
  const [videoReady, setVideoReady] = useState(false);

  return createPortal(
    <motion.div
      className={styles.videoPopUp}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controls={false}
        controlsList="nodownload nofullscreen noplaybackrate"
        onCanPlay={() => setVideoReady(true)}
        style={{
          visibility: videoReady ? "visible" : "hidden",
          pointerEvents: "none",
        }}
      >
        <source src="/videos/aya-cooks.webm" type="video/webm" />
        <source src="/videos/aya-cooks.mp4" type="video/mp4" />
      </video>
    </motion.div>,
    document.getElementById("video-pop-up") as HTMLElement
  );
};

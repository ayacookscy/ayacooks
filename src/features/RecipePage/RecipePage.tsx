"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import styles from "./styles/recipePage.module.scss";
import { WelcomeCard } from "./ui/WelcomeCard";
import { RecipeContent } from "./ui/RecipeContent";

export const RecipePage = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleClose = () => setShowWelcome(false);

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait" initial={false}>
        {showWelcome ? (
          <WelcomeCard key="welcome" onClose={handleClose} />
        ) : (
          <div className={styles.mainContent} key="content">
            <RecipeContent />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

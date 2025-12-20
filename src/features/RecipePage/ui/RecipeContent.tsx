"use client";

import { motion } from "framer-motion";
import styles from "../styles/recipeContent.module.scss";

export const RecipeContent = () => {
  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className={styles.heading}>
        Recipe gift{" "}
        <span className={styles.headingHighlight}>Easy & Delicious Hummus</span>
      </h1>

      <h2 className={styles.subHeading}>Ingredients:</h2>
      <ul className={styles.list}>
        <li>• 1 can (15 oz) chickpeas (drained & rinsed)</li>
        <li>• 1/4 cup tahini</li>
        <li>• 2–3 tbsp fresh lemon juice</li>
        <li>• 1 clove garlic</li>
        <li>• 2 tbsp olive oil</li>
        <li>• 2–4 tbsp water</li>
        <li>• 1/2 tsp salt</li>
        <li>• Optional: 1/2 tsp ground cumin</li>
      </ul>

      <h2 className={styles.subHeading}>Instructions:</h2>
      <ol className={styles.orderedList}>
        <li>
          In a food processor, blend tahini and lemon juice for 1 minute until
          creamy.
        </li>
        <li>
          Add chickpeas, garlic, olive oil, salt, and cumin (if using). Blend.
        </li>
        <li>Slowly add water until smooth and fluffy.</li>
        <li>Taste and adjust seasoning with dukkah for extra flavor.</li>
        <li>
          Serve with olive oil and a sprinkle of paprika or fresh herbs on top.
        </li>
      </ol>

      <p className={styles.note}>
        ✨ Enjoy with pita, veggies, or as a spread!
      </p>
    </motion.section>
  );
};

import styles from "@/features/MenuPage/styles/menuPage.module.scss";

interface StageItemProps {
  name?: string;
  allergens?: number[];
  price?: number;
  lunch?: boolean;
}

export const StageItem = ({
  name,
  allergens,
  price,
  lunch,
}: StageItemProps) => {
  return (
    <>
      <p className={styles.stageItem} key={name}>
        {lunch && <span className={styles.itemPrice}>L</span>} {name}{" "}
        {allergens && 0 < allergens.length && (
          <>
            <span className={styles.stageItemAllergens}>
              ({allergens?.join(",")})
            </span>
          </>
        )}
        <span className={styles.itemPrice}>{price}</span>
      </p>
    </>
  );
};

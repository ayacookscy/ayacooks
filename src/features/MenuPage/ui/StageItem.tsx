import styles from "@/features/MenuPage/styles/menuPage.module.scss";

interface StageItemProps {
  name?: string;
  allergens?: number[];
  price?: number;
}

export const StageItem = ({ name, allergens, price }: StageItemProps) => {
  return (
    <>
      <p className={styles.stageItem} key={name}>
        {name}{" "}
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

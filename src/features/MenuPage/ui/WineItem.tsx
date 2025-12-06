import styles from "@/features/MenuPage/styles/menuPage.module.scss";

interface WineItemProps {
  name?: string;
  description?: string;
  price?: number;
  bottlePrice?: number;
  descriptionBold?: string;
}

export const WineItem = ({
  name,
  description,
  price,
  bottlePrice,
  descriptionBold,
}: WineItemProps) => {
  return (
    <div className={styles.wineBox}>
      <p className={styles.regularText}>
        <span className={styles.boldText}>{name}</span> {description}
        {descriptionBold && (
          <span className={styles.boldText}>{descriptionBold}</span>
        )}
      </p>

      <p className={styles.boldText}>
        {`${price ? `${price} |` : ""} ${bottlePrice}`}
      </p>
    </div>
  );
};

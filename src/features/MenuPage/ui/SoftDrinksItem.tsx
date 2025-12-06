import styles from "@/features/MenuPage/styles/menuPage.module.scss";

interface SoftDrinksItemProps {
  description?: string;
  price?: number;
}

export const SoftDrinksItem = ({ description, price }: SoftDrinksItemProps) => {
  return (
    <>
      <p className={styles.regularText}>
        {description} <span className={styles.boldText}>{price}</span>
      </p>
    </>
  );
};

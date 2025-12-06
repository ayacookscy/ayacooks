import styles from "@/features/MenuPage/styles/menuPage.module.scss";

interface BearsCiderItemProps {
  regularName?: string;
  name?: string;
  price?: number;
  description?: string;
}

export const BearsCiderItem = ({
  regularName,
  name,
  price,
  description,
}: BearsCiderItemProps) => {
  return (
    <>
      <p className={styles.regularText}>
        {regularName && `${regularName} `}{" "}
        <span className={styles.boldText}>{name} </span> {description}{" "}
        <span className={styles.boldText}>{price}</span>
      </p>
    </>
  );
};

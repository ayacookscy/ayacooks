import styles from "@/features/MenuPage/styles/menuPage.module.scss";

interface AllergenItemProps {
  id: number;
  name: string;
}

export const AllergenItem = ({ id, name }: AllergenItemProps) => {
  return (
    <div className={styles.alergenBox} key={id}>
      <p className={styles.alergen}>{id}</p>
      <p className={styles.alergen}>{name}</p>
    </div>
  );
};

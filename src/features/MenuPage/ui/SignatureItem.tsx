import styles from "@/features/MenuPage/styles/menuPage.module.scss";

interface SignatureItemProps {
  name?: string;
  price?: number;
  description?: string;
}
export const SignatureItem = ({
  name,
  price,
  description,
}: SignatureItemProps) => {
  return (
    <div className={styles.signatureBox}>
      <p className={styles.boldText}>
        {name} <span>{price}</span>
      </p>

      <p className={styles.regularText}>{description}</p>
    </div>
  );
};

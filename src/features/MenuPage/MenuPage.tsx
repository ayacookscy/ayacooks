import { allergens, menu } from "@/constants/menu";
import styles from "@/features/MenuPage/styles/menuPage.module.scss";
import { StageItem } from "@/features/MenuPage/ui/StageItem";
import { AllergenItem } from "./ui/AllergenItem";
import { SignatureItem } from "./ui/SignatureItem";
import { BearsCiderItem } from "./ui/BearsCiderItem";
import { SoftDrinksItem } from "./ui/SoftDrinksItem";
import { WineItem } from "./ui/WineItem";

export const MenuPage = () => {
  return (
    <div className={styles.menuPage}>
      <h2 className={styles.stageTitle}>Stage</h2>

      <div className={styles.stageItems}>
        {menu.stages.items.map((item) => (
          <StageItem
            key={item.name}
            name={item.name}
            allergens={item.allergens}
            price={item.price}
          />
        ))}
      </div>

      <h3 className={styles.sweetSceneTitle}>Sweet scene</h3>

      <div className={styles.sweetSceneItems}>
        {menu.sweetScene.items.map((item) => (
          <StageItem
            key={item.name}
            name={item.name}
            allergens={item.allergens}
            price={item.price}
          />
        ))}
      </div>

      <h3 className={styles.allergensTitle}>
        Dear guests, please pay attention on allergens
      </h3>

      <div className={styles.alergenItems}>
        {allergens.map((item) => (
          <AllergenItem key={item.id} id={item.id} name={item.name} />
        ))}
      </div>

      <h2 className={styles.barTitle}>BAR</h2>

      <h3 className={styles.signatureTitle}>Signature</h3>

      <div className={styles.signatureItems}>
        {menu.signature.items.map((item) => (
          <SignatureItem
            key={item.name}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>

      <h3 className={styles.beersCiderTitle}>Beers/Cider</h3>

      <div className={styles.beersCiderItems}>
        {menu.beersCider.items.map((item, index) => (
          <BearsCiderItem
            key={`${item.name}-${index}`}
            regularName={item.regularName}
            name={item.name}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>

      <h3 className={styles.softDrinksTitle}>Soft Drinks</h3>

      <div className={styles.softDrinksItems}>
        {menu.softDrinks.items.map((item, index) => (
          <SoftDrinksItem
            key={`${item.description}-${index}`}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>

      <h3 className={styles.regularText} style={{ marginTop: "40px" }}>
        * All coffee can be served cold
      </h3>

      <h3 className={styles.coffeeTeaTitle}>Coffee / Tea</h3>

      <div className={styles.coffeeTeaItems}>
        {menu.coffeeTea.items.map((item, index) => (
          <SoftDrinksItem
            key={`${item.description}-${index}`}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>

      <h2 className={styles.wineTitle}>WINE</h2>

      <h3 className={styles.nonAlcoholicTitle}>Non-Alcoholic</h3>

      <div className={styles.wineItems}>
        {menu.wineNonAlcoholic.items.map((item, index) => (
          <WineItem
            key={`${item.name}-${index}`}
            name={item.name}
            description={item.description}
            price={item.price}
            bottlePrice={item.bottlePrice}
          />
        ))}
      </div>

      <h3 className={styles.wineTitle}>Pet-Nat & Sparkling</h3>

      <div className={styles.wineItems}>
        {menu.winePetNatSparkling.items.map((item, index) => (
          <WineItem
            key={`${item.name}-${index}`}
            name={item.name}
            description={item.description}
            price={item.price}
            bottlePrice={item.bottlePrice}
            descriptionBold={item.descriptionBold}
          />
        ))}
      </div>

      <h3 className={styles.wineTitle}>White</h3>

      <div className={styles.wineItems}>
        {menu.wineWhite.items.map((item, index) => (
          <WineItem
            key={`${item.name}-${index}`}
            name={item.name}
            description={item.description}
            price={item.price}
            bottlePrice={item.bottlePrice}
            descriptionBold={item.descriptionBold}
          />
        ))}
      </div>

      <h3 className={styles.wineTitle}>Orange</h3>

      <div className={styles.wineItems}>
        {menu.wineOrange.items.map((item, index) => (
          <WineItem
            key={`${item.name}-${index}`}
            name={item.name}
            description={item.description}
            price={item.price}
            bottlePrice={item.bottlePrice}
            descriptionBold={item.descriptionBold}
          />
        ))}
      </div>

      <h3 className={styles.wineTitle}>Rosé</h3>

      <div className={styles.wineItems}>
        {menu.wineRose.items.map((item, index) => (
          <WineItem
            key={`${item.name}-${index}`}
            name={item.name}
            description={item.description}
            price={item.price}
            bottlePrice={item.bottlePrice}
            descriptionBold={item.descriptionBold}
          />
        ))}
      </div>

      <h3 className={styles.wineTitle}>Red</h3>

      <div className={styles.wineItems}>
        {menu.wineRed.items.map((item, index) => (
          <WineItem
            key={`${item.name}-${index}`}
            name={item.name}
            description={item.description}
            price={item.price}
            bottlePrice={item.bottlePrice}
            descriptionBold={item.descriptionBold}
          />
        ))}
      </div>
    </div>
  );
};

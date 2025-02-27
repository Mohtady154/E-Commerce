import styles from "./styles.module.css";
import { t } from "i18next";
type ProductInfoProps = {
  title: string;
  img: string;
  price: number;
  quantity?: number;
  direction?: "row" | "column";
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const Productinfo = ({
  title,
  img,
  price,
  quantity,
  direction = "row",
  children,
  style,
}: ProductInfoProps) => {
  return (
    <div className={`${styles[`product-${direction}`]}`} style={style}>
      <div className={`${styles[`productImg-${direction}`]}`}>
        <img src={img} alt={title} />
      </div>
      <div className={`${styles[`productInfo-${direction}`]}`}>
        <h2 title={title}>{title}</h2>
        <h3>{Number(price).toFixed(2)} EGP</h3>
        {quantity && <h3>{t("quantity")} : {quantity}</h3>}
        {quantity && <h3>{t("total price")} : {(quantity * price).toFixed(2)}</h3>}

        {children}
      </div>
    </div>
  );
};

export default Productinfo;
import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
        <Image src="/img/telephone.png" alt="" width="35" height="35" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <h2 className={styles.ahar}>Ahar</h2>
          </Link>
        </ul>
      </div>
      
        <div className={styles.item}>
          <Link href="/admin" passHref>
            <div className={styles.cart}>
              <Image src="/img/user-svgrepo-com.svg" alt="" width="26px" height="26px" />
            </div>
          </Link>
          <Link href="/cart" passHref>
              <div className={styles.cart}>
              <Image src="/img/cart.png" alt="" width="25px" height="25px" />
                <div className={styles.counter}>{quantity}</div>
              </div>
          </Link>
        </div>
        
    </div>
  );
};

export default Navbar;

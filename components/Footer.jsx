import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/pexels-valeria-boltneva-11213740.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            LOOKING FOR QUALITY FOOD? <br /> YOU ARE AT THE RIGHT PLACE
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 R. Some Road #304.
            <br /> Dhaka, 1000
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            2356 K. Some other Rd #235.
            <br /> Dhaka, 1200
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1614 E. Some St #104.
            <br /> Dhaka, 1250
            <br /> (602) 867-1012
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
          <h2 className={styles.ahar} onClick={scrollToTop}>Ahar</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;

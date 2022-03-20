import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder, closeModal }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  const handleClick = () => {
    if (customer && address && total) {
      setShowError(false)
      setShowSpinner(true)
      createOrder({ customer, address, total, method: 0 });
      setTimeout(() => {
        setShowSpinner(false)
      }, 600);
    } else {
      setShowError(true)
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {showSpinner && (<div className={styles.spinnerContainer}>
          <div className={styles["lds-dual-ring"]}></div>
        </div>)}
      <button className={styles.closeBtn} onClick={closeModal}>&times;</button>
        <h1 className={styles.title}>You will need to pay $12 after delivery.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Full Name</label>
          <input 
            placeholder="John Doe"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            type="text"
            placeholder="+1 234 567 89"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
            rows={5}
            placeholder="Some St. Dhaka"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        { showError && <p className={styles.errorMsg}>Please order & fill in all the fields</p>}
        <div className={styles.buttonGroup}>
          <button className={styles.button} onClick={handleClick}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;

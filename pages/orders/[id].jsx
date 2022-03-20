import styles from "../../styles/Order.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Order = () => {
  const router = useRouter();
  const queryData = router.query
  console.log(queryData);

  const status = 0;

  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          {/* <h2>Thanks for your order!</h2> */}
          <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>{queryData.id?.slice(0, 7)}...</span>
              </td>
              <td>
                <span className={styles.name}>{queryData.customer}</span>
              </td>
              <td>
                <span className={styles.address}>{queryData.address}</span>
              </td>
              <td>
                <span className={styles.total}>${queryData.total}</span>
              </td>
            </tr>
            </tbody>
          </table>
        
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/icons8-payment-64.png" width={30} height={30} alt="" />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/icons8-prepare48.png" width={30} height={30} alt="" />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/icons8-pizza-delivering-64.png" width={30} height={30} alt="" />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/icons8-food-delivered-64.png" width={30} height={30} alt="" />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>${queryData.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>${queryData.dis}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>${queryData.total}
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;

import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onCustomersContainerClick = useCallback(() => {
    navigate("/customers-list");
  }, [navigate]);

  const onInvoiceContainerClick = useCallback(() => {
    navigate("/invoices-list");
  }, [navigate]);

  const onOperationalCostContainerClick = useCallback(() => {
    navigate("/operational-cost");
  }, [navigate]);

  const onDeliveryChallanContainerClick = useCallback(() => {
    navigate("/delivery-challan");
  }, [navigate]);

  return (
    <div className={styles.frameParent} data-animate-on-scroll>
      <div className={styles.logoParent}>
        <div className={styles.logo}>
          <div className={styles.logoChild} />
          <b className={styles.logo1}>Logo</b>
        </div>
        <div className={styles.navBarListParent}>
          <div className={styles.navBarList}>
            <img
              className={styles.dashboardIcon}
              alt=""
              src="/dashboard-icon2.svg"
            />
            <div className={styles.dashboard}>Dashboard</div>
          </div>
          <div className={styles.customers} onClick={onCustomersContainerClick}>
            <img
              className={styles.dashboardIcon}
              alt=""
              src="/dashboard-icon1.svg"
            />
            <div className={styles.dashboard}>Customers</div>
          </div>
          <div className={styles.customers} onClick={onInvoiceContainerClick}>
            <img
              className={styles.dashboardIcon}
              alt=""
              src="/invoices-icon.svg"
            />
            <div className={styles.dashboard}>Invoices</div>
          </div>
          <div
            className={styles.operationalCost}
            onClick={onOperationalCostContainerClick}
          >
            <img
              className={styles.dashboardIcon}
              alt=""
              src="/operational-cost.svg"
            />
            <div className={styles.dashboard}>Operational cost</div>
          </div>
          <div
            className={styles.customers}
            onClick={onDeliveryChallanContainerClick}
          >
            <img
              className={styles.dashboardIcon}
              alt=""
              src="/invoices-icon1.svg"
            />
            <div className={styles.dashboard}>Delivery Challan</div>
          </div>
          <div className={styles.navBarList}>
            <img
              className={styles.dashboardIcon}
              alt=""
              src="/quotations-icon.svg"
            />
            <div className={styles.dashboard}>Quotations</div>
          </div>
          <div className={styles.navBarList}>
            <img
              className={styles.dashboardIcon}
              alt=""
              src="/notifications-icon.svg"
            />
            <div className={styles.dashboard}>Notifications</div>
          </div>
          <div className={styles.navBarList}>
            <img
              className={styles.dashboardIcon}
              alt=""
              src="/settings-icon.svg"
            />
            <div className={styles.dashboard}>Settings</div>
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <img className={styles.frameChild} alt="" src="/frame-2284@2x.png" />
        <div className={styles.name}>
          <h3 className={styles.sriDurgaEngineering}>Sri Durga Engineering</h3>
          <h6 className={styles.freeAccount}>Free account</h6>
        </div>
        <button className={styles.fill1Parent}>
          <img className={styles.fill1Icon} alt="" src="/fill-1.svg" />
          <img className={styles.fill4Icon} alt="" src="/fill-4.svg" />
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;

import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const [isFrameOpen, setFrameOpen] = useState(false);

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

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className={styles.home}>
        <nav className={styles.frameParent}>
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
                  src="/dashboard-icon.svg"
                />
                <div className={styles.dashboard}>Dashboard</div>
              </div>
              <div
                className={styles.customers}
                onClick={onCustomersContainerClick}
              >
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/dashboard-icon1.svg"
                />
                <div className={styles.dashboard}>Customers</div>
              </div>
              <div
                className={styles.customers}
                onClick={onInvoiceContainerClick}
              >
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
              <div className={styles.quotation}>
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/quotations-icon.svg"
                />
                <div className={styles.dashboard}>Quotations</div>
              </div>
              <div className={styles.quotation}>
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/notifications-icon.svg"
                />
                <div className={styles.dashboard}>Notifications</div>
              </div>
              <div className={styles.quotation}>
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
            <img
              className={styles.frameChild}
              alt=""
              src="/frame-2284@2x.png"
            />
            <div className={styles.name}>
              <h3 className={styles.sriDurgaEngineering}>
                Sri Durga Engineering
              </h3>
              <h6 className={styles.freeAccount}>Free account</h6>
            </div>
            <button className={styles.fill1Parent}>
              <img className={styles.fill1Icon} alt="" src="/fill-1.svg" />
              <img className={styles.fill4Icon} alt="" src="/fill-4.svg" />
            </button>
          </div>
        </nav>
        <div className={styles.dashboard1}>
          <div className={styles.quotation}>
            <button className={styles.pajamashamburger} onClick={openFrame}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </button>
            <h2 className={styles.dashboard2}>Dashboard</h2>
          </div>
          <div className={styles.stats}>
            <img className={styles.chartIcon} alt="" src="/chart@2x.png" />
            <div className={styles.data}>
              <div className={styles.row2}>
                <div className={styles.totalRevenue}>
                  <div className={styles.frameContainer}>
                    <div className={styles.ellipseWrapper}>
                      <div className={styles.frameItem} />
                    </div>
                    <div className={styles.nonIcon}>
                      <div className={styles.totalRevenueAmount}>
                        <b className={styles.monthlyRevenue}>Rs.10,00,000</b>
                      </div>
                      <div className={styles.totalRevenue1}>
                        <div className={styles.monthlyRevenue}>
                          Total revenue
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.totalRevenue}>
                  <div className={styles.frameDiv}>
                    <div className={styles.ellipseWrapper}>
                      <div className={styles.frameInner} />
                    </div>
                    <div className={styles.nonIcon}>
                      <div className={styles.totalRevenueAmount1}>
                        <b className={styles.monthlyRevenue}>Rs.10,00,000</b>
                      </div>
                      <div className={styles.totalRevenue4}>
                        <div className={styles.monthlyRevenue}>
                          Monthly revenue
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.totalRevenue5}>
                  <div className={styles.frameDiv}>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>₹</div>
                    </div>
                    <div className={styles.nonIcon2}>
                      <div className={styles.totalRevenueAmount1}>
                        <b className={styles.monthlyRevenue}>Rs.10,00,000</b>
                      </div>
                      <div className={styles.totalRevenue4}>
                        <div className={styles.monthlyRevenue}>
                          Operational cost
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.totalRevenue7}>
                  <div className={styles.frameDiv}>
                    <div className={styles.ellipseWrapper}>
                      <div className={styles.ellipseDiv} />
                    </div>
                    <div className={styles.nonIcon}>
                      <div className={styles.totalRevenueAmount1}>
                        <b className={styles.monthlyRevenue}>15</b>
                      </div>
                      <div className={styles.totalRevenue4}>
                        <div className={styles.monthlyRevenue}>
                          Pending invoices
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.totalRevenue5}>
                  <div className={styles.frameDiv}>
                    <div className={styles.ellipseWrapper}>
                      <div className={styles.frameChild1} />
                    </div>
                    <div className={styles.nonIcon}>
                      <div className={styles.totalRevenueAmount1}>
                        <b className={styles.monthlyRevenue}>Rs.30,000</b>
                      </div>
                      <div className={styles.totalRevenue4}>
                        <div className={styles.monthlyRevenue}>Scrap</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.totalRevenue11}>
                  <div className={styles.frameDiv}>
                    <div className={styles.ellipseWrapper}>
                      <div className={styles.frameChild2} />
                    </div>
                    <div className={styles.nonIcon}>
                      <div className={styles.totalRevenueAmount1}>
                        <b className={styles.monthlyRevenue}>Rs.10,00,000</b>
                      </div>
                      <div className={styles.totalRevenue4}>
                        <div className={styles.monthlyRevenue}>Quotaions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className={styles.recentInvoicesSection}>
            <h3 className={styles.recentInvoices}>Recent invoices</h3>
            <table className={styles.recentInvoicesSection1}>
              <tbody>
                <tr>
                  <td className={styles.td}>
                    <b className={styles.invoiceNo}>Invoice No.</b>
                  </td>
                  <td className={styles.td}>
                    <b className={styles.invoiceNo}>GST No.</b>
                  </td>
                  <td className={styles.td}>
                    <b className={styles.invoiceNo}>Amount</b>
                  </td>
                  <td className={styles.td}>
                    <b className={styles.invoiceNo}>Company name</b>
                  </td>
                  <td className={styles.td}>
                    <b className={styles.invoiceNo}>Date</b>
                  </td>
                  <td className={styles.td}>
                    <b className={styles.invoiceNo}>Status</b>
                  </td>
                  <td className={styles.td}>
                    <b className={styles.invoiceNo}>Edit invoice</b>
                  </td>
                  <td className={styles.td7}>
                    <b className={styles.invoiceNo}>Delete invoice</b>
                  </td>
                </tr>
                <tr>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>876364</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>123456</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>5000</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>abcdefgh</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>1-1-1</div>
                  </td>
                  <td className={styles.td}>
                    <select className={styles.pendingParent}>
                      <option value="0">Pending</option>
                      <option value="1">Completed</option>
                    </select>
                  </td>
                  <td className={styles.td}>
                    <button className={styles.editInvoice1}>
                      Edit invoice
                    </button>
                  </td>
                  <td className={styles.td7}>
                    <button className={styles.deleteInvoice1}>
                      Delete invoice
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>876364</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>123456</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>5000</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>abcdefgh</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>1-1-1</div>
                  </td>
                  <td className={styles.td}>
                    <select className={styles.pendingParent}>
                      <option value="0">Pending</option>
                      <option value="1">Completed</option>
                    </select>
                  </td>
                  <td className={styles.td}>
                    <button className={styles.editInvoice1}>
                      Edit invoice
                    </button>
                  </td>
                  <td className={styles.td7}>
                    <button className={styles.deleteInvoice1}>
                      Delete invoice
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>876364</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>123456</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>5000</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>abcdefgh</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>1-1-1</div>
                  </td>
                  <td className={styles.td}>
                    <select className={styles.pendingParent}>
                      <option value="0">Pending</option>
                      <option value="1">Completed</option>
                    </select>
                  </td>
                  <td className={styles.td}>
                    <button className={styles.editInvoice1}>
                      Edit invoice
                    </button>
                  </td>
                  <td className={styles.td7}>
                    <button className={styles.deleteInvoice1}>
                      Delete invoice
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>876364</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>123456</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>5000</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>abcdefgh</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>1-1-1</div>
                  </td>
                  <td className={styles.td}>
                    <select className={styles.pendingParent}>
                      <option value="0">Pending</option>
                      <option value="1">Completed</option>
                    </select>
                  </td>
                  <td className={styles.td}>
                    <button className={styles.editInvoice1}>
                      Edit invoice
                    </button>
                  </td>
                  <td className={styles.td7}>
                    <button className={styles.deleteInvoice1}>
                      Delete invoice
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>876364</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>123456</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>5000</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>abcdefgh</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>1-1-1</div>
                  </td>
                  <td className={styles.td}>
                    <select className={styles.pendingParent}>
                      <option value="0">Pending</option>
                      <option value="1">Completed</option>
                    </select>
                  </td>
                  <td className={styles.td}>
                    <button className={styles.editInvoice1}>
                      Edit invoice
                    </button>
                  </td>
                  <td className={styles.td7}>
                    <button className={styles.deleteInvoice1}>
                      Delete invoice
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>876364</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>123456</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>5000</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>abcdefgh</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>1-1-1</div>
                  </td>
                  <td className={styles.td}>
                    <select className={styles.pendingParent}>
                      <option value="0">Pending</option>
                      <option value="1">Completed</option>
                    </select>
                  </td>
                  <td className={styles.td}>
                    <button className={styles.editInvoice1}>
                      Edit invoice
                    </button>
                  </td>
                  <td className={styles.td7}>
                    <button className={styles.deleteInvoice1}>
                      Delete invoice
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>876364</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>123456</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>5000</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>abcdefgh</div>
                  </td>
                  <td className={styles.td}>
                    <div className={styles.invoiceNo}>1-1-1</div>
                  </td>
                  <td className={styles.td}>
                    <select className={styles.pendingParent}>
                      <option value="0">Pending</option>
                      <option value="1">Completed</option>
                    </select>
                  </td>
                  <td className={styles.td}>
                    <button className={styles.editInvoice1}>
                      Edit invoice
                    </button>
                  </td>
                  <td className={styles.td7}>
                    <button className={styles.deleteInvoice1}>
                      Delete invoice
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className={styles.td64}>
                    <div className={styles.invoiceNo}>876364</div>
                  </td>
                  <td className={styles.td64}>
                    <div className={styles.invoiceNo}>123456</div>
                  </td>
                  <td className={styles.td64}>
                    <div className={styles.invoiceNo}>5000</div>
                  </td>
                  <td className={styles.td64}>
                    <div className={styles.invoiceNo}>abcdefgh</div>
                  </td>
                  <td className={styles.td64}>
                    <div className={styles.invoiceNo}>1-1-1</div>
                  </td>
                  <td className={styles.td64}>
                    <select className={styles.pendingParent}>
                      <option value="0">Pending</option>
                      <option value="1">Completed</option>
                    </select>
                  </td>
                  <td className={styles.td64}>
                    <button className={styles.editInvoice1}>
                      Edit invoice
                    </button>
                  </td>
                  <td className={styles.logo1}>
                    <button className={styles.deleteInvoice1}>
                      Delete invoice
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
      {isFrameOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeFrame}
        >
          <FrameComponent onClose={closeFrame} />
        </PortalDrawer>
      )}
    </>
  );
};

export default Home;

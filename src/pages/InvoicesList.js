import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./InvoicesList.module.css";

const InvoicesList = () => {
  const navigate = useNavigate();
  const [isFrameOpen, setFrameOpen] = useState(false);

  const onNavBarListClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCustomersClick = useCallback(() => {
    navigate("/customers-list");
  }, [navigate]);

  const onOperationalCostClick = useCallback(() => {
    navigate("/operational-cost");
  }, [navigate]);

  const onDeliveryChallanClick = useCallback(() => {
    navigate("/delivery-challan");
  }, [navigate]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onAddNameClick = useCallback(() => {
    navigate("/add-invoice");
  }, [navigate]);

  const onEditInvoiceClick = useCallback(() => {
    navigate("/add-invoice");
  }, [navigate]);

  return (
    <>
      <div className={styles.invoicesList}>
        <nav className={styles.frameParent}>
          <div className={styles.logoParent}>
            <div className={styles.logo}>
              <div className={styles.logoChild} />
              <b className={styles.logo1}>Logo</b>
            </div>
            <div className={styles.navBarListParent}>
              <button className={styles.navBarList} onClick={onNavBarListClick}>
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/dashboard icon-blk.svg"
                />
                <div className={styles.dashboard}>Dashboard</div>
              </button>
              <button className={styles.navBarList} onClick={onCustomersClick}>
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/customers icon-blk.svg"
                />
                <div className={styles.dashboard}>Customers</div>
              </button>
              <button className={styles.navBarList}>
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/invoices icon-blu.svg"
                />
                <div className={styles.invoices}>Invoices</div>
              </button>
              <button
                className={styles.operationalCost}
                onClick={onOperationalCostClick}
              >
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/operational cost-blk.svg"
                />
                <div className={styles.dashboard}>Operational cost</div>
              </button>
              <button
                className={styles.navBarList}
                onClick={onDeliveryChallanClick}
              >
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/dc icon-blk.svg"
                />
                <div className={styles.dashboard}>Delivery Challan</div>
              </button>
              <button className={styles.navBarList}>
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/quotations-icon.svg"
                />
                <div className={styles.dashboard}>Quotations</div>
              </button>
              <button className={styles.navBarList}>
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/notifications-icon.svg"
                />
                <div className={styles.dashboard}>Notifications</div>
              </button>
              <button className={styles.navBarList}>
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/settings-icon.svg"
                />
                <div className={styles.dashboard}>Settings</div>
              </button>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameChild} />
            <div className={styles.name}>
              <div className={styles.sriDurgaEngineering}>
                Sri Durga Engineering
              </div>
              <div className={styles.freeAccount}>Free account</div>
            </div>
            <button className={styles.fill1Parent}>
              <img className={styles.fill1Icon} alt="" src="/fill-1.svg" />
              <img className={styles.fill4Icon} alt="" src="/fill-4.svg" />
            </button>
          </div>
        </nav>
        <div className={styles.dashboard1}>
          <div className={styles.frameContainer}>
            <div className={styles.pajamashamburgerParent}>
              <button className={styles.pajamashamburger} onClick={openFrame}>
                <img className={styles.vectorIcon} alt="" src="/ham.svg" />
              </button>
              <h2 className={styles.invoicesList1}>Invoices list</h2>
            </div>
            <div className={styles.datesParent}>
              <DatePicker.RangePicker
                className={styles.datesDatepickerrangepicker}
                placeholder={["1-1-2024", "1-1-2024"]}
                allowClear={false}
                bordered={false}
              />
              <input
                className={styles.searchBar}
                placeholder="Search"
                type="text"
              />
              <button className={styles.addName} onClick={onAddNameClick}>
                <div className={styles.search}>+</div>
                <div className={styles.search1}>Add new invoice</div>
              </button>
            </div>
          </div>
          <table className={styles.recentInvoicesSection}>
            <tbody>
              <tr>
                <td className={styles.td}>
                  <b className={styles.invoiceNo}>Invoice No.</b>
                </td>
                <td className={styles.td}>
                  <b className={styles.invoiceNo}>PO No.</b>
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
                  <button
                    className={styles.editInvoice1}
                    onClick={onEditInvoiceClick}
                  >
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
                  <button className={styles.editInvoice1}>Edit invoice</button>
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
                  <button className={styles.editInvoice1}>Edit invoice</button>
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
                  <button className={styles.editInvoice1}>Edit invoice</button>
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
                  <button className={styles.editInvoice1}>Edit invoice</button>
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
                  <button className={styles.editInvoice1}>Edit invoice</button>
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
                  <button className={styles.editInvoice1}>Edit invoice</button>
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
                  <button className={styles.editInvoice1}>Edit invoice</button>
                </td>
                <td className={styles.logo1}>
                  <button className={styles.deleteInvoice1}>
                    Delete invoice
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
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

export default InvoicesList;

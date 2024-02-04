import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./OperationalCost.module.css";

const OperationalCost = () => {
  const navigate = useNavigate();
  const [isFrameOpen, setFrameOpen] = useState(false);

  const onNavBarListClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCustomersContainerClick = useCallback(() => {
    navigate("/customers-list");
  }, [navigate]);

  const onInvoiceContainerClick = useCallback(() => {
    navigate("/invoices-list");
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
      <div className={styles.operationalCost}>
        <nav className={styles.frameParent}>
          <div className={styles.logoParent}>
            <div className={styles.logo}>
              <div className={styles.logoChild} />
              <b className={styles.logo1}>Logo</b>
            </div>
            <div className={styles.navBarListParent}>
              <div className={styles.navBarList} onClick={onNavBarListClick}>
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/dashboard-icon2.svg"
                />
                <div className={styles.dashboard}>Dashboard</div>
              </div>
              <div
                className={styles.navBarList}
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
                className={styles.navBarList}
                onClick={onInvoiceContainerClick}
              >
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/invoices-icon.svg"
                />
                <div className={styles.dashboard}>Invoices</div>
              </div>
              <div className={styles.operationalCost1}>
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/operational-cost1.svg"
                />
                <div className={styles.dashboard}>Operational cost</div>
              </div>
              <div
                className={styles.navBarList}
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
            <div className={styles.frameChild} />
            <div className={styles.name}>
              <div className={styles.dashboard}>Hruthik Kumar</div>
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
            <div className={styles.frameWrapper}>
              <div className={styles.pajamashamburgerParent}>
                <button className={styles.pajamashamburger} onClick={openFrame}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </button>
                <h2 className={styles.operationalCost3}>Operational Cost</h2>
              </div>
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
              <button className={styles.addName}>
                <div className={styles.search}>+</div>
                <div className={styles.search1}>Add new expense</div>
              </button>
            </div>
          </div>
          <table className={styles.recentInvoicesSection}>
            <tbody>
              <tr>
                <td className={styles.td}>
                  <h5 className={styles.expenseName}>Expense name</h5>
                </td>
                <td className={styles.td}>
                  <div className={styles.groupParent}>
                    <h5 className={styles.expenseName}>Group</h5>
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                </td>
                <td className={styles.td}>
                  <h5 className={styles.expenseName}>Amount</h5>
                </td>
                <td className={styles.td}>
                  <h5 className={styles.expenseName}>Date</h5>
                </td>
                <td className={styles.td}>
                  <h5 className={styles.expenseName}>Edit expense</h5>
                </td>
                <td className={styles.td5}>
                  <h5 className={styles.expenseName}>Delete expense</h5>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.div}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>123456</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editExpense1}>Edit expense</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteExpense1}>
                    Delete expense
                  </button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.div}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>123456</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editExpense1}>Edit expense</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteExpense1}>
                    Delete expense
                  </button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.div}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>123456</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editExpense1}>Edit expense</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteExpense1}>
                    Delete expense
                  </button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.div}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>123456</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editExpense1}>Edit expense</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteExpense1}>
                    Delete expense
                  </button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.div}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>123456</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editExpense1}>Edit expense</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteExpense1}>
                    Delete expense
                  </button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.div}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>123456</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editExpense1}>Edit expense</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteExpense1}>
                    Delete expense
                  </button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.div}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>123456</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editExpense1}>Edit expense</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteExpense1}>
                    Delete expense
                  </button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.div}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>123456</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editExpense1}>Edit expense</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteExpense1}>
                    Delete expense
                  </button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.div}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>123456</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editExpense1}>Edit expense</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteExpense1}>
                    Delete expense
                  </button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.div}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>123456</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.div}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editExpense1}>Edit expense</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteExpense1}>
                    Delete expense
                  </button>
                </td>
              </tr>
              <tr>
                <td className={styles.td66}>
                  <div className={styles.div}>876364</div>
                </td>
                <td className={styles.td66}>
                  <div className={styles.div}>123456</div>
                </td>
                <td className={styles.td66}>
                  <div className={styles.div}>5000</div>
                </td>
                <td className={styles.td66}>
                  <div className={styles.div}>1-1-1</div>
                </td>
                <td className={styles.td66}>
                  <button className={styles.editExpense1}>Edit expense</button>
                </td>
                <td className={styles.logo1}>
                  <button className={styles.deleteExpense1}>
                    Delete expense
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

export default OperationalCost;

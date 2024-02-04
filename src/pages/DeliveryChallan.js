import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./DeliveryChallan.module.css";

const DeliveryChallan = () => {
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

  const onOperationalCostContainerClick = useCallback(() => {
    navigate("/operational-cost");
  }, [navigate]);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <div className={styles.deliveryChallan}>
        <div className={styles.frameParent}>
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
              <div className={styles.deliveryChallan1}>
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/invoices-icon2.svg"
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
        </div>
        <div className={styles.dashboard1}>
          <div className={styles.frameContainer}>
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
                <div className={styles.search1}>Add DC</div>
              </button>
            </div>
            <div className={styles.pajamashamburgerParent}>
              <button className={styles.pajamashamburger} onClick={openFrame}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </button>
              <h2 className={styles.deliveryChallan3}>Delivery Challan</h2>
            </div>
          </div>
          <table className={styles.recentInvoicesSection}>
            <tbody>
              <tr>
                <td className={styles.td}>
                  <b className={styles.dcNo}>DC No.</b>
                </td>
                <td className={styles.td}>
                  <b className={styles.dcNo}>Our date</b>
                </td>
                <td className={styles.td}>
                  <b className={styles.dcNo}>Company name</b>
                </td>
                <td className={styles.td}>
                  <b className={styles.dcNo}>Company DC No.</b>
                </td>
                <td className={styles.td}>
                  <b className={styles.dcNo}>Company DC date</b>
                </td>
                <td className={styles.td}>
                  <b className={styles.dcNo}>Edit DC</b>
                </td>
                <td className={styles.td6}>
                  <b className={styles.dcNo}>Delete invoice</b>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.dcNo}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>ABCDE</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editDc1}>Edit DC</button>
                </td>
                <td className={styles.td6}>
                  <button className={styles.deleteDc}>Delete DC</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.dcNo}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>ABCDE</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editDc1}>Edit DC</button>
                </td>
                <td className={styles.td6}>
                  <button className={styles.deleteDc}>Delete DC</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.dcNo}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>ABCDE</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editDc1}>Edit DC</button>
                </td>
                <td className={styles.td6}>
                  <button className={styles.deleteDc}>Delete DC</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.dcNo}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>ABCDE</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editDc1}>Edit DC</button>
                </td>
                <td className={styles.td6}>
                  <button className={styles.deleteDc}>Delete DC</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.dcNo}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>ABCDE</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editDc1}>Edit DC</button>
                </td>
                <td className={styles.td6}>
                  <button className={styles.deleteDc}>Delete DC</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.dcNo}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>ABCDE</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editDc1}>Edit DC</button>
                </td>
                <td className={styles.td6}>
                  <button className={styles.deleteDc}>Delete DC</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.dcNo}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>ABCDE</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editDc1}>Edit DC</button>
                </td>
                <td className={styles.td6}>
                  <button className={styles.deleteDc}>Delete DC</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.dcNo}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>ABCDE</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editDc1}>Edit DC</button>
                </td>
                <td className={styles.td6}>
                  <button className={styles.deleteDc}>Delete DC</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.dcNo}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>ABCDE</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editDc1}>Edit DC</button>
                </td>
                <td className={styles.td6}>
                  <button className={styles.deleteDc}>Delete DC</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.dcNo}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>ABCDE</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editDc1}>Edit DC</button>
                </td>
                <td className={styles.td6}>
                  <button className={styles.deleteDc}>Delete DC</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.dcNo}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>ABCDE</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editDc1}>Edit DC</button>
                </td>
                <td className={styles.td6}>
                  <button className={styles.deleteDc}>Delete DC</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.dcNo}>876364</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>ABCDE</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>5000</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editDc1}>Edit DC</button>
                </td>
                <td className={styles.td6}>
                  <button className={styles.deleteDc}>Delete DC</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td91}>
                  <div className={styles.dcNo}>876364</div>
                </td>
                <td className={styles.td91}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td91}>
                  <div className={styles.dcNo}>ABCDE</div>
                </td>
                <td className={styles.td91}>
                  <div className={styles.dcNo}>5000</div>
                </td>
                <td className={styles.td91}>
                  <div className={styles.dcNo}>1-1-1</div>
                </td>
                <td className={styles.td91}>
                  <button className={styles.editDc1}>Edit DC</button>
                </td>
                <td className={styles.logo1}>
                  <button className={styles.deleteDc}>Delete DC</button>
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

export default DeliveryChallan;

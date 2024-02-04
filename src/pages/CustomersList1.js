import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./CustomersList1.module.css";

const CustomersList1 = () => {
  const navigate = useNavigate();
  const [isFrameOpen, setFrameOpen] = useState(false);

  const onNavBarListClick = useCallback(() => {
    navigate("/");
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
      <div className={styles.customersList}>
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
              <div className={styles.customers}>
                <img
                  className={styles.dashboardIcon}
                  alt=""
                  src="/dashboard-icon3.svg"
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
        </div>
        <div className={styles.dashboard1}>
          <div className={styles.frameContainer}>
            <div className={styles.searchBarParent}>
              <input
                className={styles.searchBar}
                placeholder="Search"
                type="text"
              />
              <button className={styles.addName}>
                <div className={styles.search}>+</div>
                <div className={styles.search1}>Add new customer</div>
              </button>
            </div>
            <div className={styles.pajamashamburgerParent}>
              <button className={styles.pajamashamburger} onClick={openFrame}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </button>
              <h2 className={styles.customerList}>Customer List</h2>
            </div>
          </div>
          <table className={styles.recentInvoicesSection}>
            <tbody>
              <tr>
                <td className={styles.td}>
                  <b className={styles.companyName}>Company name</b>
                </td>
                <td className={styles.td}>
                  <b className={styles.companyName}>Address</b>
                </td>
                <td className={styles.td}>
                  <b className={styles.companyName}>GST No.</b>
                </td>
                <td className={styles.td}>
                  <b className={styles.companyName}>HSN code</b>
                </td>
                <td className={styles.td}>
                  <b className={styles.companyName}>Edit entry</b>
                </td>
                <td className={styles.td5}>
                  <b className={styles.companyName}>Delete entry</b>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.companyName}>Company</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>asdd fdfd r sdfgfrg</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>123456789</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>5000</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editEntry1}>Edit entry</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteEntry1}>Delete entry</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.companyName}>Company</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>asdd fdfd r sdfgfrg</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>123456789</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>5000</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editEntry1}>Edit entry</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteEntry1}>Delete entry</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.companyName}>Company</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>asdd fdfd r sdfgfrg</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>123456789</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>5000</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editEntry1}>Edit entry</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteEntry1}>Delete entry</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.companyName}>Company</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>asdd fdfd r sdfgfrg</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>123456789</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>5000</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editEntry1}>Edit entry</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteEntry1}>Delete entry</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.companyName}>Company</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>asdd fdfd r sdfgfrg</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>123456789</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>5000</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editEntry1}>Edit entry</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteEntry1}>Delete entry</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.companyName}>Company</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>asdd fdfd r sdfgfrg</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>123456789</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>5000</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editEntry1}>Edit entry</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteEntry1}>Delete entry</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.companyName}>Company</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>asdd fdfd r sdfgfrg</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>123456789</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>5000</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editEntry1}>Edit entry</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteEntry1}>Delete entry</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.companyName}>Company</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>asdd fdfd r sdfgfrg</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>123456789</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>5000</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editEntry1}>Edit entry</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteEntry1}>Delete entry</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.companyName}>Company</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>asdd fdfd r sdfgfrg</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>123456789</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>5000</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editEntry1}>Edit entry</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteEntry1}>Delete entry</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.companyName}>Company</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>asdd fdfd r sdfgfrg</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>123456789</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>5000</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editEntry1}>Edit entry</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteEntry1}>Delete entry</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.companyName}>Company</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>asdd fdfd r sdfgfrg</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>123456789</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>5000</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editEntry1}>Edit entry</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteEntry1}>Delete entry</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td}>
                  <div className={styles.companyName}>Company</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>asdd fdfd r sdfgfrg</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>123456789</div>
                </td>
                <td className={styles.td}>
                  <div className={styles.companyName}>5000</div>
                </td>
                <td className={styles.td}>
                  <button className={styles.editEntry1}>Edit entry</button>
                </td>
                <td className={styles.td5}>
                  <button className={styles.deleteEntry1}>Delete entry</button>
                </td>
              </tr>
              <tr>
                <td className={styles.td78}>
                  <div className={styles.companyName}>Company</div>
                </td>
                <td className={styles.td78}>
                  <div className={styles.companyName}>asdd fdfd r sdfgfrg</div>
                </td>
                <td className={styles.td78}>
                  <div className={styles.companyName}>123456789</div>
                </td>
                <td className={styles.td78}>
                  <div className={styles.companyName}>5000</div>
                </td>
                <td className={styles.td78}>
                  <button className={styles.editEntry1}>Edit entry</button>
                </td>
                <td className={styles.logo1}>
                  <button className={styles.deleteEntry1}>Delete entry</button>
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

export default CustomersList1;

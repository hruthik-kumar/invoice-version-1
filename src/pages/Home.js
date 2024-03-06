import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./Home.module.css";
import {DashBoardTilesInfo_API} from "../apiEndpoints";
import { Table, TableHead, TableBody, TableRow, TableCell, TablePagination, Paper } from '@mui/material';





const Home = () => {
  const navigate = useNavigate();

  const [tableData, setTableData] = useState([]);
  const [tablePage, setTablePage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  const [isFrameOpen, setFrameOpen] = useState(false);
  const [revenueData, setRevenueData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Make API request here
    const fetchData = async () => {
      try {
        const response = await fetch(DashBoardTilesInfo_API);
        const data = await response.json();
        setRevenueData(data['body-json']);
        setTableData(data['body-json']['table_data']['invoices'])
        setLoading(false); // Update loading state after data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure this effect runs only once on component mount

  // Handle page change
  const handleChangePage = (event, newPage) => {
    setTablePage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 7));
    setTablePage(0);
  };

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

  // Render table rows
  const renderRows = () => {
    const startIndex = tablePage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return tableData.slice(startIndex, endIndex).map(item => (
      <TableRow key={item.id}>
        <TableCell>{item.invoiceNo}</TableCell>
        <TableCell>{item.gstNo}</TableCell>
        <TableCell>{item.amount}</TableCell>
        <TableCell>{item.companyName}</TableCell>
        <TableCell>{item.date}</TableCell>
        <TableCell>{item.status}</TableCell>
        <TableCell></TableCell>
        <TableCell></TableCell>
      </TableRow>
    ));
  };

  if (loading) {
    // Render loading state while data is being fetched
    return <div>Loading...</div>;
  }

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
                  src="/dashboard icon-blu.svg"
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
                  src="/customers icon-blk.svg"
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
                  src="/invoices icon-blk.svg"
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
                  src="/operational cost-blk.svg"
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
                  src="/dc icon-blk.svg"
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
              <img className={styles.vectorIcon} alt="" src="/ham.svg" />
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
                        <b className={styles.monthlyRevenue}>Rs.{revenueData.totalRevenue}</b>
                      </div>
                      <div className={styles.totalRevenue1}>
                        <div className={styles.monthlyRevenue}>
                          Financial Year Revenue
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
                        <b className={styles.monthlyRevenue}>Rs.{revenueData.monthlyRevenue}</b>
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
                      <div className={styles.div}></div>
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
                        <b className={styles.monthlyRevenue}>{revenueData.pendingInvoices}</b>
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
            <Paper style= {{ width: '100%' }}>
              <Table> 
                <TableHead>
                  <TableRow>
                    <TableCell>Invoice No.</TableCell>
                    <TableCell>GST No.</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Company name</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Edit invoice</TableCell>
                    <TableCell>Delete invoice</TableCell>
                    {/* Add other table headers */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {renderRows()}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[10]}
                component="div"
                count={tableData.length}
                rowsPerPage={rowsPerPage}
                page={tablePage}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
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

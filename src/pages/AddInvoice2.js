import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { TextField, Icon, InputAdornment, IconButton } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./AddInvoice2.module.css";

const AddInvoice2 = () => {
  const [selectDateButtonValue, setSelectDateButtonValue] = useState(null);
  const [selectDateButton1Value, setSelectDateButton1Value] = useState(null);
  const [selectDateButton2Value, setSelectDateButton2Value] = useState(null);
  const navigate = useNavigate();
  const [isFrameOpen, setFrameOpen] = useState(false);

  const onNavBarListClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCustomersContainerClick = useCallback(() => {
    navigate("/customers-list");
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
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className={styles.addInvoice}>
          <nav className={styles.frameParent}>
            <div className={styles.logoParent}>
              <div className={styles.logo}>
                <div className={styles.logoChild} />
                <b className={styles.invoiceNo}>Logo</b>
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
                <div className={styles.invoice}>
                  <img
                    className={styles.dashboardIcon}
                    alt=""
                    src="/invoices-icon3.svg"
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
          </nav>
          <div className={styles.dashboard1}>
            <div className={styles.addInvoices}>
              <div className={styles.pajamashamburgerParent}>
                <button className={styles.pajamashamburger} onClick={openFrame}>
                  <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                </button>
                <h2 className={styles.sriDurgaEngineering}>Add Invoice</h2>
              </div>
            </div>
            <main className={styles.form}>
              <div className={styles.companyDetails}>
                <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
                <div className={styles.nameAddress}>
                  <h1 className={styles.sriDurgaEngineering}>
                    SRI DURGA ENGINEERING WORKS
                  </h1>
                  <h1 className={styles.plotno14partRajiv}>
                    Plot.No 14,/Part, Rajiv Gandhi Nagar, Prashanthi Nagar,
                    Kukatpally, Hyderabad
                  </h1>
                </div>
              </div>
              <div className={styles.gstNumber}>
                <h2 className={styles.sriDurgaEngineering}>GST:</h2>
                <h2 className={styles.sriDurgaEngineering}>36AKFPB6929A1ZJ</h2>
              </div>
              <div className={styles.taxInvoice}>
                <div className={styles.taxInvoiceTitle}>
                  <h2 className={styles.taxInvoice1}>TAX INVOICE</h2>
                </div>
                <div className={styles.rows}>
                  <div className={styles.row1}>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.invoiceNo}>Invoice No:</b>
                      <div className={styles.invoiceNumberTextBox}>
                        <div className={styles.na}>SDEW/2023-2024/185</div>
                      </div>
                    </div>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.invoiceNo}>Transport mode:</b>
                      <input
                        className={styles.transportModeChild}
                        placeholder="Enter mode of transport"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.invoiceNo}>Invoice date:</b>
                      <div className={styles.selectDateButton}>
                        <DatePicker
                          value={selectDateButtonValue}
                          onChange={(newValue) => {
                            setSelectDateButtonValue(newValue);
                          }}
                          components={{
                            OpenPickerIcon: () => (
                              <Icon>calendar_today_sharp</Icon>
                            ),
                          }}
                          sx={{}}
                          slotProps={{
                            textField: {
                              size: "small",
                              fullWidth: false,
                              required: false,
                              autoFocus: false,
                              error: false,
                              color: "primary",
                            },
                            openPickerIcon: {
                              component: () => <></>,
                            },
                          }}
                        />
                      </div>
                    </div>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.invoiceNo}>Vehicle number:</b>
                      <div className={styles.invoiceNumberTextBox}>
                        <div className={styles.na}>NA</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.invoiceNo}>Reverse charge (Y/N):</b>
                      <div className={styles.reverseChargeDropDown}>
                        <div className={styles.invoiceNo}>Choose an option</div>
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector2.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.invoiceNo}>Date of supply:</b>
                      <div className={styles.selectDateButton1}>
                        <DatePicker
                          value={selectDateButton1Value}
                          onChange={(newValue) => {
                            setSelectDateButton1Value(newValue);
                          }}
                          components={{
                            OpenPickerIcon: () => (
                              <Icon>calendar_today_sharp</Icon>
                            ),
                          }}
                          sx={{}}
                          slotProps={{
                            textField: {
                              size: "small",
                              fullWidth: false,
                              required: false,
                              autoFocus: false,
                              error: false,
                              color: "primary",
                              helperText: "",
                            },
                            openPickerIcon: {
                              component: () => <></>,
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.invoiceNo}>State:</b>
                      <div className={styles.stateDropDown}>
                        <div className={styles.invoiceNo}>Telangana</div>
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector2.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.invoiceNo}>Place of supply:</b>
                      <div className={styles.invoiceNumberTextBox}>
                        <input
                          className={styles.enterPlaceOf}
                          placeholder="Enter place of supply"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.clientDetails}>
                <div className={styles.headings}>
                  <div className={styles.billToParty}>
                    <b className={styles.invoiceNo}>Bill to party</b>
                  </div>
                  <div className={styles.shipToParty}>
                    <b className={styles.invoiceNo}>Ship to party</b>
                    <div className={styles.sameAsBillingAddressCheck}>
                      <div className={styles.invoiceNo}>
                        Same as bill to party
                      </div>
                      <div className={styles.sameAsBillingAddressCheckChild} />
                    </div>
                  </div>
                </div>
                <div className={styles.row1}>
                  <div className={styles.invoiceNumber}>
                    <b className={styles.invoiceNo}>Name:</b>
                    <Select
                      className={styles.invoiceNumberTextBox1}
                      placeholder="Company Name"
                      showSearch
                      virtual={false}
                      showArrow={false}
                    >{` `}</Select>
                  </div>
                  <div className={styles.invoiceNumber}>
                    <b className={styles.invoiceNo}>Name:</b>
                    <div className={styles.shipmentReceiversNameText}>
                      <div className={styles.na}>
                        Enter shipment receiver’s name
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.row1}>
                  <div className={styles.billingAddress}>
                    <b className={styles.invoiceNo}>Billing address:</b>
                    <div className={styles.addressSections}>
                      <div className={styles.clientsAddressLine1TextB}>
                        <div className={styles.na}>
                          Enter client’s address line 1
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.billingAddress}>
                    <b className={styles.invoiceNo}>Shipping address:</b>
                    <div className={styles.addressSections1}>
                      <div className={styles.clientsAddressLine1TextB}>
                        <div className={styles.na}>
                          Enter shipping address line 1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.row1}>
                  <div className={styles.invoiceNumber}>
                    <b className={styles.invoiceNo}>GSTIN:</b>
                    <div className={styles.invoiceNumberTextBox}>
                      <div className={styles.na}>36AAECA9452H1ZJ</div>
                    </div>
                  </div>
                  <div className={styles.invoiceNumber}>
                    <b className={styles.invoiceNo}>GSTIN:</b>
                    <div className={styles.shipmentReceiversNameText}>
                      <div className={styles.na}>
                        Enter shipment receiver’s GSTIN
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.row1}>
                  <div className={styles.invoiceNumber}>
                    <b className={styles.invoiceNo}>State:</b>
                    <input
                      className={styles.stateDropDown1}
                      placeholder="State"
                      type="text"
                    />
                  </div>
                  <div className={styles.invoiceNumber}>
                    <b className={styles.invoiceNo}>State:</b>
                    <div className={styles.shipmentReceiversNameText}>
                      <div className={styles.na}>Enter place of supply</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.taxInvoice}>
                <div className={styles.taxInvoiceTitle}>
                  <b className={styles.orderDetails1}>ORDER DETAILS</b>
                </div>
                <div className={styles.rows}>
                  <div className={styles.row1}>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.invoiceNo}>Your DC number:</b>
                      <input
                        className={styles.transportModeChild}
                        placeholder="Enter client’s DC number"
                        type="text"
                      />
                    </div>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.invoiceNo}>Your DC date:</b>
                      <div className={styles.selectDateButton2}>
                        <DatePicker
                          value={selectDateButton2Value}
                          onChange={(newValue) => {
                            setSelectDateButton2Value(newValue);
                          }}
                          components={{
                            OpenPickerIcon: () => (
                              <Icon>calendar_today_sharp</Icon>
                            ),
                          }}
                          sx={{}}
                          slotProps={{
                            textField: {
                              size: "small",
                              fullWidth: false,
                              required: false,
                              autoFocus: false,
                              error: false,
                              color: "primary",
                            },
                            openPickerIcon: {
                              component: () => <></>,
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.invoiceNo}>Purchase order No:</b>
                      <input
                        className={styles.transportModeChild}
                        placeholder="Purchase order No"
                        type="text"
                      />
                    </div>
                    <div className={styles.vehicleNumber2} />
                  </div>
                </div>
              </div>
              <table className={styles.productDetails}>
                <tbody>
                  <tr className={styles.tr}>
                    <td className={styles.td}>
                      <div className={styles.sno}>
                        <b className={styles.sno1}>S.No.</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.productDetails1}>
                        <b className={styles.productDetails2}>
                          Product details
                        </b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode}>
                        <b className={styles.hsn}>HSN</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode}>
                        <b className={styles.hsn}>Quantity</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode}>
                        <b className={styles.hsn}>Rate</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode}>
                        <b className={styles.productDetails2}>Taxable amount</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.taxableAmount}>
                        <div className={styles.taxableAmountParent}>
                          <b className={styles.taxableAmount1}>CGST %</b>
                          <div className={styles.taxableAmountGroup}>
                            <b className={styles.taxableAmount2}>%</b>
                            <b className={styles.taxableAmount3}>Amount</b>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.taxableAmount4}>
                        <div className={styles.taxableAmountParent}>
                          <b className={styles.taxableAmount1}>SGST %</b>
                          <div className={styles.frameDiv}>
                            <b className={styles.taxableAmount2}>%</b>
                            <b className={styles.taxableAmount3}>Amount</b>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td8}>
                      <div className={styles.hsnCode}>
                        <b className={styles.productDetails2}>Amount</b>
                      </div>
                    </td>
                  </tr>
                  <tr className={styles.tr1}>
                    <td className={styles.td}>
                      <div className={styles.sno2}>
                        <b className={styles.b}>1</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.productDetails3}>
                        <div className={styles.productDetails4}>
                          <TextField
                            className={styles.productName}
                            color="primary"
                            placeholder="AEPL/WO/I/574-041"
                            variant="standard"
                            sx={{ "& .MuiInputBase-root": { height: "25px" } }}
                          />
                          <TextField
                            className={styles.productName1}
                            color="primary"
                            placeholder="Products specification"
                            variant="standard"
                            multiline
                          />
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <textarea
                          className={styles.hsn1}
                          placeholder="99998"
                          rows={1}
                          maxLength={5}
                          cols={4}
                        />
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <textarea
                          className={styles.hsn1}
                          placeholder="52"
                          rows={1}
                          maxLength={5}
                          cols={1}
                        />
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <textarea
                          className={styles.hsn1}
                          placeholder="₹10000000"
                          rows={1}
                          maxLength={13}
                          cols={9}
                        />
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.rate6}>
                        <h6 className={styles.h6}>₹50,960</h6>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <textarea
                          className={styles.percent}
                          placeholder="%"
                          rows={1}
                          maxLength={2}
                          cols={4}
                        />
                        <h6 className={styles.h61}>₹3,057.6</h6>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <textarea
                          className={styles.percent1}
                          placeholder="%"
                          rows={1}
                          maxLength={2}
                          cols={1}
                        />
                        <h6 className={styles.h61}>₹3,057.6</h6>
                      </div>
                    </td>
                    <td className={styles.td8}>
                      <div className={styles.rate6}>
                        <h6 className={styles.h6}>₹57,075</h6>
                      </div>
                    </td>
                  </tr>
                  <tr className={styles.tr1}>
                    <td className={styles.td18}>
                      <div className={styles.sno2}>
                        <b className={styles.b}>2</b>
                      </div>
                    </td>
                    <td className={styles.td18}>
                      <div className={styles.productDetails3}>
                        <div className={styles.productDetails4}>
                          <TextField
                            className={styles.productName}
                            color="primary"
                            placeholder="Product Name"
                            variant="standard"
                            sx={{ "& .MuiInputBase-root": { height: "25px" } }}
                          />
                          <TextField
                            className={styles.productName1}
                            color="primary"
                            placeholder="Product Specification"
                            variant="standard"
                            multiline
                          />
                        </div>
                      </div>
                    </td>
                    <td className={styles.td18}>
                      <div className={styles.hsnCode1}>
                        <textarea
                          className={styles.hsn1}
                          placeholder="9955"
                          rows={1}
                          maxLength={5}
                          cols={4}
                        />
                      </div>
                    </td>
                    <td className={styles.td18}>
                      <div className={styles.hsnCode1}>
                        <textarea
                          className={styles.hsn1}
                          placeholder="52"
                          rows={1}
                          maxLength={5}
                          cols={1}
                        />
                      </div>
                    </td>
                    <td className={styles.td18}>
                      <div className={styles.hsnCode1}>
                        <textarea
                          className={styles.hsn1}
                          placeholder="₹10000000"
                          rows={1}
                          maxLength={13}
                          cols={9}
                        />
                      </div>
                    </td>
                    <td className={styles.td18}>
                      <div className={styles.rate6}>
                        <h6 className={styles.h6}>₹50,960</h6>
                      </div>
                    </td>
                    <td className={styles.td18}>
                      <div className={styles.cgst}>
                        <textarea
                          className={styles.percent}
                          placeholder="%"
                          rows={1}
                          maxLength={2}
                          cols={4}
                        />
                        <h6 className={styles.h61}>₹3,057.6</h6>
                      </div>
                    </td>
                    <td className={styles.td18}>
                      <div className={styles.cgst}>
                        <textarea
                          className={styles.percent1}
                          placeholder="%"
                          rows={1}
                          maxLength={2}
                          cols={1}
                        />
                        <h6 className={styles.h61}>₹3,057.6</h6>
                      </div>
                    </td>
                    <td className={styles.invoiceNo}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹57,075</b>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.addNewProduct}>
                <button className={styles.sections}>
                  <div className={styles.taxableAmount14}>
                    Add new product line +
                  </div>
                </button>
              </div>
              <div className={styles.summary}>
                <div className={styles.summary1}>
                  <div className={styles.details}>
                    <h3 className={styles.sriDurgaEngineering}>Summary</h3>
                    <div className={styles.details1}>
                      <div className={styles.totalQuantity}>
                        <h6 className={styles.taxableAmount15}>
                          Total quantity:
                        </h6>
                        <h6 className={styles.taxableAmount16}>52</h6>
                      </div>
                      <div className={styles.totalQuantity}>
                        <h6 className={styles.taxableAmount15}>
                          Taxable amount:
                        </h6>
                        <h6 className={styles.taxableAmount18}>₹50,960</h6>
                      </div>
                      <div className={styles.totalQuantity}>
                        <h6 className={styles.taxableAmount15}>CGST:</h6>
                        <h6 className={styles.taxableAmount18}>₹3,057.5</h6>
                      </div>
                      <div className={styles.totalQuantity}>
                        <h6 className={styles.taxableAmount15}>SGST:</h6>
                        <h6 className={styles.taxableAmount18}>₹3,057.5</h6>
                      </div>
                      <div className={styles.totalQuantity4}>
                        <h3 className={styles.taxableAmount23}>
                          Total amount after tax:
                        </h3>
                        <h3 className={styles.taxableAmount24}>₹57,075</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
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
    </LocalizationProvider>
  );
};

export default AddInvoice2;

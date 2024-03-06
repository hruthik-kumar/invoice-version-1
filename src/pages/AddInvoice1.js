import { useState, useCallback } from "react";
import "antd/dist/antd.min.css";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Select } from "antd";
import FrameComponent from "../components/FrameComponent";
import PortalDrawer from "../components/PortalDrawer";
import styles from "./AddInvoice1.module.css";

const AddInvoice1 = () => {
  const [selectDateButtonValue, setSelectDateButtonValue] = useState(null);
  const [selectDateButton1Value, setSelectDateButton1Value] = useState(null);
  const [selectDateButton2Value, setSelectDateButton2Value] = useState(null);
  const [isFrameOpen, setFrameOpen] = useState(false);

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
                <b className={styles.sriDurgaEngineering}>Logo</b>
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
                <div className={styles.navBarList}>
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
                <div className={styles.operationalCost}>
                  <img
                    className={styles.dashboardIcon}
                    alt=""
                    src="/operational-cost.svg"
                  />
                  <div className={styles.dashboard}>Operational cost</div>
                </div>
                <div className={styles.navBarList}>
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
                <h2 className={styles.addInvoice1}>Add Invoice</h2>
              </div>
            </div>
            <div className={styles.form}>
              <div className={styles.companyDetails}>
                <div className={styles.logo2} />
                <div className={styles.nameAddress}>
                  <b className={styles.sriDurgaEngineering}>
                    SRI DURGA ENGINEERING WORKS
                  </b>
                  <div className={styles.plotno14partRajiv}>
                    Plot.No 14,/Part, Rajiv Gandhi Nagar, Prashanthi Nagar,
                    Kukatpally, Hyderabad
                  </div>
                </div>
              </div>
              <div className={styles.gstNumber}>
                <b className={styles.sriDurgaEngineering}>GST:</b>
                <b className={styles.sriDurgaEngineering}>36AKFPB6929A1ZJ</b>
              </div>
              <div className={styles.taxInvoice}>
                <div className={styles.taxInvoiceTitle}>
                  <b className={styles.taxInvoice1}>TAX INVOICE</b>
                </div>
                <div className={styles.rows}>
                  <div className={styles.row1}>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.sriDurgaEngineering}>Invoice No:</b>
                      <div className={styles.invoiceNumberTextBox}>
                        <div className={styles.na}>SDEW/2023-2024/185</div>
                      </div>
                    </div>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.sriDurgaEngineering}>
                        Transport mode:
                      </b>
                      <input
                        className={styles.transportModeChild}
                        placeholder="Enter mode of transport"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.sriDurgaEngineering}>
                        Invoice date:
                      </b>
                      <div className={styles.selectDateButton}>
                        <DatePicker
                          format="dd/MM/yyyy"
                          value={selectDateButtonValue}
                          onChange={(newValue) => {
                            setSelectDateButtonValue(newValue);
                          }}
                          sx={{}}
                          slotProps={{
                            textField: {
                              size: "medium",
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
                      <b className={styles.sriDurgaEngineering}>
                        Vehicle number:
                      </b>
                      <div className={styles.invoiceNumberTextBox}>
                        <div className={styles.na}>NA</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.sriDurgaEngineering}>
                        Reverse charge (Y/N):
                      </b>
                      <div className={styles.reverseChargeDropDown}>
                        <div className={styles.sriDurgaEngineering}>
                          Choose an option
                        </div>
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector2.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.sriDurgaEngineering}>
                        Date of supply:
                      </b>
                      <div className={styles.selectDateButton}>
                        <DatePicker
                          format="dd/MM/yyyy"
                          value={selectDateButton1Value}
                          onChange={(newValue) => {
                            setSelectDateButton1Value(newValue);
                          }}
                          sx={{}}
                          slotProps={{
                            textField: {
                              size: "medium",
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
                      <b className={styles.sriDurgaEngineering}>State:</b>
                      <div className={styles.stateDropDown}>
                        <div className={styles.sriDurgaEngineering}>
                          Telangana
                        </div>
                        <img
                          className={styles.vectorIcon1}
                          alt=""
                          src="/vector2.svg"
                        />
                      </div>
                    </div>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.sriDurgaEngineering}>
                        Place of supply:
                      </b>
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
                    <b className={styles.sriDurgaEngineering}>Bill to party</b>
                  </div>
                  <div className={styles.shipToParty}>
                    <b className={styles.sriDurgaEngineering}>Ship to party</b>
                    <div className={styles.sameAsBillingAddressCheck}>
                      <div className={styles.sriDurgaEngineering}>
                        Same as bill to party
                      </div>
                      <div className={styles.sameAsBillingAddressCheckChild} />
                    </div>
                  </div>
                </div>
                <div className={styles.row1}>
                  <div className={styles.invoiceNumber}>
                    <b className={styles.sriDurgaEngineering}>Name:</b>
                    <Select
                      className={styles.invoiceNumberTextBox1}
                      placeholder="Company Name"
                      showSearch
                      virtual={false}
                      showArrow={false}
                    >{` `}</Select>
                  </div>
                  <div className={styles.invoiceNumber}>
                    <b className={styles.sriDurgaEngineering}>Name:</b>
                    <div className={styles.shipmentReceiversNameText}>
                      <div className={styles.na}>
                        Enter shipment receiver’s name
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.row1}>
                  <div className={styles.billingAddress}>
                    <b className={styles.sriDurgaEngineering}>
                      Billing address:
                    </b>
                    <div className={styles.addressSections}>
                      <div className={styles.clientsAddressLine1TextB}>
                        <div className={styles.na}>
                          Enter client’s address line 1
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.billingAddress}>
                    <b className={styles.sriDurgaEngineering}>
                      Shipping address:
                    </b>
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
                    <b className={styles.sriDurgaEngineering}>GSTIN:</b>
                    <div className={styles.invoiceNumberTextBox}>
                      <div className={styles.na}>36AAECA9452H1ZJ</div>
                    </div>
                  </div>
                  <div className={styles.invoiceNumber}>
                    <b className={styles.sriDurgaEngineering}>GSTIN:</b>
                    <div className={styles.shipmentReceiversNameText}>
                      <div className={styles.na}>
                        Enter shipment receiver’s GSTIN
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.row1}>
                  <div className={styles.invoiceNumber}>
                    <b className={styles.sriDurgaEngineering}>State:</b>
                    <div className={styles.stateDropDown}>
                      <div className={styles.sriDurgaEngineering}>
                        Telangana
                      </div>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector2.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.invoiceNumber}>
                    <b className={styles.sriDurgaEngineering}>State:</b>
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
                      <b className={styles.sriDurgaEngineering}>
                        Your DC number:
                      </b>
                      <input
                        className={styles.transportModeChild}
                        placeholder="Enter client’s DC number"
                        type="text"
                      />
                    </div>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.sriDurgaEngineering}>
                        Your DC date:
                      </b>
                      <div className={styles.selectDateButton}>
                        <DatePicker
                          format="dd/MM/yyyy"
                          value={selectDateButton2Value}
                          onChange={(newValue) => {
                            setSelectDateButton2Value(newValue);
                          }}
                          sx={{}}
                          slotProps={{
                            textField: {
                              size: "medium",
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
                      <b className={styles.sriDurgaEngineering}>
                        Purchase order No:
                      </b>
                      <div className={styles.invoiceNumberTextBox}>
                        <div className={styles.na}>503514</div>
                      </div>
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
                          <div className={styles.productName}>
                            <b className={styles.b}>AEPL/WO/I/574-041</b>
                          </div>
                          <div className={styles.productName}>
                            <div className={styles.b}>
                              <p className={styles.lineItemNo}>
                                Line item No. 20
                              </p>
                              <p className={styles.lineItemNo}>
                                SFG-Retainer Assy
                              </p>
                              <p className={styles.lineItemNo}>
                                After CNC profile Machining
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>9955</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>52</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>₹980</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹50,960</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.percent}>
                          <b className={styles.b5}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.productName}>
                          <b className={styles.b}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td8}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹57,075</b>
                      </div>
                    </td>
                  </tr>
                  <tr className={styles.tr1}>
                    <td className={styles.td}>
                      <div className={styles.sno2}>
                        <b className={styles.b}>2</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.productDetails3}>
                        <div className={styles.productDetails4}>
                          <div className={styles.productName}>
                            <b className={styles.b}>AEPL/WO/I/574-041</b>
                          </div>
                          <div className={styles.productName}>
                            <div className={styles.b}>
                              Enter product description
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>9955</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>52</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>₹980</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹50,960</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.percent}>
                          <b className={styles.b5}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.productName}>
                          <b className={styles.b}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td8}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹57,075</b>
                      </div>
                    </td>
                  </tr>
                  <tr className={styles.tr1}>
                    <td className={styles.td}>
                      <div className={styles.sno2}>
                        <b className={styles.b}>2</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.productDetails3}>
                        <div className={styles.productDetails4}>
                          <div className={styles.productName}>
                            <b className={styles.b}>AEPL/WO/I/574-041</b>
                          </div>
                          <div className={styles.productName}>
                            <div className={styles.b}>
                              <p className={styles.lineItemNo}>
                                Line item No. 20
                              </p>
                              <p className={styles.lineItemNo}>
                                SFG-Retainer Assy
                              </p>
                              <p className={styles.lineItemNo}>
                                After CNC profile Machining
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>9955</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>52</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>₹980</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹50,960</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.percent}>
                          <b className={styles.b5}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.productName}>
                          <b className={styles.b}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td8}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹57,075</b>
                      </div>
                    </td>
                  </tr>
                  <tr className={styles.tr1}>
                    <td className={styles.td}>
                      <div className={styles.sno2}>
                        <b className={styles.b}>2</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.productDetails3}>
                        <div className={styles.productDetails4}>
                          <div className={styles.productName}>
                            <b className={styles.b}>AEPL/WO/I/574-041</b>
                          </div>
                          <div className={styles.productName}>
                            <div className={styles.b}>
                              <p className={styles.lineItemNo}>
                                Line item No. 20
                              </p>
                              <p className={styles.lineItemNo}>
                                SFG-Retainer Assy
                              </p>
                              <p className={styles.lineItemNo}>
                                After CNC profile Machining
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>9955</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>52</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>₹980</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹50,960</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.percent}>
                          <b className={styles.b5}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.productName}>
                          <b className={styles.b}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td8}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹57,075</b>
                      </div>
                    </td>
                  </tr>
                  <tr className={styles.tr1}>
                    <td className={styles.td}>
                      <div className={styles.sno2}>
                        <b className={styles.b}>2</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.productDetails3}>
                        <div className={styles.productDetails4}>
                          <div className={styles.productName}>
                            <b className={styles.b}>AEPL/WO/I/574-041</b>
                          </div>
                          <div className={styles.productName}>
                            <div className={styles.b}>
                              <p className={styles.lineItemNo}>
                                Line item No. 20
                              </p>
                              <p className={styles.lineItemNo}>
                                SFG-Retainer Assy
                              </p>
                              <p className={styles.lineItemNo}>
                                After CNC profile Machining
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>9955</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>52</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>₹980</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹50,960</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.percent}>
                          <b className={styles.b5}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.productName}>
                          <b className={styles.b}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td8}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹57,075</b>
                      </div>
                    </td>
                  </tr>
                  <tr className={styles.tr1}>
                    <td className={styles.td}>
                      <div className={styles.sno2}>
                        <b className={styles.b}>2</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.productDetails3}>
                        <div className={styles.productDetails4}>
                          <div className={styles.productName}>
                            <b className={styles.b}>AEPL/WO/I/574-041</b>
                          </div>
                          <div className={styles.productName}>
                            <div className={styles.b}>
                              <p className={styles.lineItemNo}>
                                Line item No. 20
                              </p>
                              <p className={styles.lineItemNo}>
                                SFG-Retainer Assy
                              </p>
                              <p className={styles.lineItemNo}>
                                After CNC profile Machining
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>9955</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>52</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>₹980</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹50,960</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.percent}>
                          <b className={styles.b5}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.productName}>
                          <b className={styles.b}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td8}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹57,075</b>
                      </div>
                    </td>
                  </tr>
                  <tr className={styles.tr1}>
                    <td className={styles.td}>
                      <div className={styles.sno2}>
                        <b className={styles.b}>2</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.productDetails3}>
                        <div className={styles.productDetails4}>
                          <div className={styles.productName}>
                            <b className={styles.b}>AEPL/WO/I/574-041</b>
                          </div>
                          <div className={styles.productName}>
                            <div className={styles.b}>
                              <p className={styles.lineItemNo}>
                                Line item No. 20
                              </p>
                              <p className={styles.lineItemNo}>
                                SFG-Retainer Assy
                              </p>
                              <p className={styles.lineItemNo}>
                                After CNC profile Machining
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>9955</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>52</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>₹980</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹50,960</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.percent}>
                          <b className={styles.b5}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.productName}>
                          <b className={styles.b}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td8}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹57,075</b>
                      </div>
                    </td>
                  </tr>
                  <tr className={styles.tr1}>
                    <td className={styles.td}>
                      <div className={styles.sno2}>
                        <b className={styles.b}>2</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.productDetails3}>
                        <div className={styles.productDetails4}>
                          <div className={styles.productName}>
                            <b className={styles.b}>AEPL/WO/I/574-041</b>
                          </div>
                          <div className={styles.productName}>
                            <div className={styles.b}>
                              <p className={styles.lineItemNo}>
                                Line item No. 20
                              </p>
                              <p className={styles.lineItemNo}>
                                SFG-Retainer Assy
                              </p>
                              <p className={styles.lineItemNo}>
                                After CNC profile Machining
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>9955</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>52</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>₹980</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹50,960</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.percent}>
                          <b className={styles.b5}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.productName}>
                          <b className={styles.b}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td8}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹57,075</b>
                      </div>
                    </td>
                  </tr>
                  <tr className={styles.tr1}>
                    <td className={styles.td}>
                      <div className={styles.sno2}>
                        <b className={styles.b}>2</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.productDetails3}>
                        <div className={styles.productDetails4}>
                          <div className={styles.productName}>
                            <b className={styles.b}>AEPL/WO/I/574-041</b>
                          </div>
                          <div className={styles.productName}>
                            <div className={styles.b}>
                              <p className={styles.lineItemNo}>
                                Line item No. 20
                              </p>
                              <p className={styles.lineItemNo}>
                                SFG-Retainer Assy
                              </p>
                              <p className={styles.lineItemNo}>
                                After CNC profile Machining
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>9955</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>52</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>₹980</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹50,960</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.percent}>
                          <b className={styles.b5}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.cgst}>
                        <div className={styles.productName}>
                          <b className={styles.b}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td8}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹57,075</b>
                      </div>
                    </td>
                  </tr>
                  <tr className={styles.tr1}>
                    <td className={styles.td90}>
                      <div className={styles.sno2}>
                        <b className={styles.b}>2</b>
                      </div>
                    </td>
                    <td className={styles.td90}>
                      <div className={styles.productDetails3}>
                        <div className={styles.productDetails4}>
                          <div className={styles.productName}>
                            <b className={styles.b}>AEPL/WO/I/574-041</b>
                          </div>
                          <div className={styles.productName}>
                            <div className={styles.b}>
                              <p className={styles.lineItemNo}>
                                Line item No. 20
                              </p>
                              <p className={styles.lineItemNo}>
                                SFG-Retainer Assy
                              </p>
                              <p className={styles.lineItemNo}>
                                After CNC profile Machining
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td90}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>9955</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td90}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>52</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td90}>
                      <div className={styles.hsnCode1}>
                        <div className={styles.hsn1}>
                          <b className={styles.b}>₹980</b>
                        </div>
                      </div>
                    </td>
                    <td className={styles.td90}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹50,960</b>
                      </div>
                    </td>
                    <td className={styles.td90}>
                      <div className={styles.cgst}>
                        <div className={styles.percent}>
                          <b className={styles.b5}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.td90}>
                      <div className={styles.cgst}>
                        <div className={styles.productName}>
                          <b className={styles.b}>5</b>
                        </div>
                        <b className={styles.b6}>₹3,057.6</b>
                      </div>
                    </td>
                    <td className={styles.sriDurgaEngineering}>
                      <div className={styles.rate6}>
                        <b className={styles.b}>₹57,075</b>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className={styles.summary}>
                <div className={styles.summary1}>
                  <div className={styles.details}>
                    <b className={styles.sriDurgaEngineering}>Summary</b>
                    <div className={styles.details1}>
                      <div className={styles.totalQuantity}>
                        <div className={styles.dashboard}>Total quantity:</div>
                        <div className={styles.taxableAmount31}>52</div>
                      </div>
                      <div className={styles.totalQuantity}>
                        <div className={styles.dashboard}>Taxable amount:</div>
                        <div className={styles.taxableAmount33}>₹50,960</div>
                      </div>
                      <div className={styles.totalQuantity}>
                        <div className={styles.dashboard}>CGST:</div>
                        <div className={styles.taxableAmount33}>₹3,057.5</div>
                      </div>
                      <div className={styles.totalQuantity}>
                        <div className={styles.dashboard}>SGST:</div>
                        <div className={styles.taxableAmount33}>₹3,057.5</div>
                      </div>
                      <div className={styles.totalQuantity4}>
                        <b className={styles.na}>Total amount after tax:</b>
                        <b className={styles.taxableAmount31}>₹57,075</b>
                      </div>
                      <div className={styles.totalQuantity5}>
                        <div className={styles.taxableAmount40}>
                          Total amount after tax in words:
                        </div>
                        <div className={styles.taxableAmount33}>
                          Fifty seven thousand seventy five only
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default AddInvoice1;

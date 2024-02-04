import { useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./AddInvoice.module.css";

const AddInvoice = () => {
  const [selectDateButtonValue, setSelectDateButtonValue] = useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
            <b className={styles.addInvoice1}>Add invoice</b>
          </div>
          <div className={styles.invoice1}>
            <div className={styles.form}>
              <div className={styles.header}>
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
              <div className={styles.details}>
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
                        <b className={styles.sriDurgaEngineering}>
                          Invoice No:
                        </b>
                        <div className={styles.byHand}>SDEW/2023-2024/185</div>
                      </div>
                      <div className={styles.invoiceNumber}>
                        <b className={styles.sriDurgaEngineering}>
                          Transport mode:
                        </b>
                        <div className={styles.byHand}>by hand</div>
                      </div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.invoiceNumber}>
                        <b className={styles.invoiceDate1}>Invoice date:</b>
                        <div className={styles.sriDurgaEngineering}>
                          12-01-2024
                        </div>
                      </div>
                      <div className={styles.invoiceNumber}>
                        <b className={styles.sriDurgaEngineering}>
                          Vehicle number:
                        </b>
                        <div className={styles.byHand}>NA</div>
                      </div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.reverseCharge}>
                        <b className={styles.sriDurgaEngineering}>
                          Reverse charge (Y/N):
                        </b>
                      </div>
                      <div className={styles.invoiceNumber}>
                        <b className={styles.sriDurgaEngineering}>
                          Date of supply:
                        </b>
                        <div>
                          <DatePicker
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
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.invoiceNumber}>
                        <b className={styles.sriDurgaEngineering}>State:</b>
                        <div className={styles.sriDurgaEngineering}>
                          Telangana
                        </div>
                      </div>
                      <div className={styles.invoiceNumber}>
                        <b className={styles.sriDurgaEngineering}>
                          Place of supply:
                        </b>
                        <input
                          className={styles.na1}
                          placeholder="NA"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.rows}>
                  <div className={styles.headings}>
                    <div className={styles.billToParty}>
                      <b className={styles.sriDurgaEngineering}>
                        Bill to party
                      </b>
                    </div>
                    <div className={styles.shipToParty}>
                      <b className={styles.sriDurgaEngineering}>
                        Ship to party
                      </b>
                    </div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.sriDurgaEngineering}>Name:</b>
                      <div className={styles.byHand}>
                        AZAD ENGINEERING PRIVATE LIMITED
                      </div>
                    </div>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.sriDurgaEngineering}>Name:</b>
                      <div className={styles.byHand}>
                        AZAD ENGINEERING PRIVATE LIMITED
                      </div>
                    </div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.billingAddress}>
                      <b className={styles.sriDurgaEngineering}>
                        Billing address:
                      </b>
                      <div
                        className={styles.byHand}
                      >{`90C & 90D, IDA Phase-1, Jeedimetla, Hyderabad, Telangana, 500015, India`}</div>
                    </div>
                    <div className={styles.billingAddress}>
                      <b className={styles.sriDurgaEngineering}>
                        Shipping address:
                      </b>
                      <div
                        className={styles.byHand}
                      >{`90C & 90D, IDA Phase-1, Jeedimetla, Hyderabad, Telangana, 500015, India`}</div>
                    </div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.sriDurgaEngineering}>GSTIN:</b>
                      <div className={styles.byHand}>36AAECA9452H1ZJ</div>
                    </div>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.sriDurgaEngineering}>GSTIN:</b>
                      <div className={styles.byHand}>36AAECA9452H1ZJ</div>
                    </div>
                  </div>
                  <div className={styles.row1}>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.sriDurgaEngineering}>State:</b>
                      <div className={styles.sriDurgaEngineering}>
                        Telangana
                      </div>
                    </div>
                    <div className={styles.invoiceNumber}>
                      <b className={styles.sriDurgaEngineering}>State:</b>
                      <div className={styles.sriDurgaEngineering}>
                        Telangana
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
                        <div className={styles.byHand}>23271350</div>
                      </div>
                      <div className={styles.invoiceNumber}>
                        <b className={styles.sriDurgaEngineering}>
                          Your DC date:
                        </b>
                        <div className={styles.sriDurgaEngineering}>
                          1-12-2023
                        </div>
                      </div>
                    </div>
                    <div className={styles.row1}>
                      <div className={styles.invoiceNumber}>
                        <b className={styles.sriDurgaEngineering}>
                          Purchase order No:
                        </b>
                        <div className={styles.byHand}>503514</div>
                      </div>
                      <div className={styles.vehicleNumber2} />
                    </div>
                  </div>
                </div>
                <table className={styles.productDetails}>
                  <thead>
                    <tr className={styles.tr}>
                      <th className={styles.th} />
                      <th className={styles.th} />
                      <th className={styles.th} />
                      <th className={styles.th} />
                      <th className={styles.th} />
                      <th className={styles.th} />
                      <th className={styles.th} />
                      <th className={styles.th} />
                      <th className={styles.th8} />
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.tr1}>
                      <td className={styles.td} />
                      <td className={styles.td} />
                      <td className={styles.td} />
                      <td className={styles.td} />
                      <td className={styles.td} />
                      <td className={styles.td} />
                      <td className={styles.td} />
                      <td className={styles.td} />
                      <td className={styles.sriDurgaEngineering} />
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className={styles.invoiceChild} />
            <div className={styles.footer}>
              <div className={styles.footer1}>
                <div className={styles.summary}>
                  <div className={styles.details1}>
                    <b className={styles.bankDetails}>Bank details</b>
                    <div className={styles.bankDetails1}>
                      <div className={styles.row13}>
                        <div className={styles.accountNumber}>
                          <div className={styles.dashboard}>
                            Account number:
                          </div>
                          <div className={styles.taxableAmount1}>
                            1234567890
                          </div>
                        </div>
                        <div className={styles.accountNumber1}>
                          <div className={styles.dashboard}>Bank name:</div>
                          <div className={styles.taxableAmount1}>
                            1234567890
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.bankDetails1}>
                      <div className={styles.row13}>
                        <div className={styles.accountNumber}>
                          <div className={styles.dashboard}>Bank IFSC:</div>
                          <div className={styles.taxableAmount1}>
                            1234567890
                          </div>
                        </div>
                        <div className={styles.accountNumber1}>
                          <div className={styles.dashboard}>Branch:</div>
                          <div className={styles.taxableAmount1}>
                            1234567890
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.details2}>
                  <b className={styles.sriDurgaEngineering}>Summary</b>
                  <div className={styles.details3}>
                    <div className={styles.totalQuantity}>
                      <div className={styles.dashboard}>Total quantity:</div>
                      <div className={styles.taxableAmount9}>52</div>
                    </div>
                    <div className={styles.totalQuantity}>
                      <div className={styles.dashboard}>Taxable amount:</div>
                      <div className={styles.taxableAmount11}>₹50,960</div>
                    </div>
                    <div className={styles.totalQuantity}>
                      <div className={styles.dashboard}>CGST:</div>
                      <div className={styles.taxableAmount11}>₹3,057.5</div>
                    </div>
                    <div className={styles.totalQuantity}>
                      <div className={styles.dashboard}>SGST:</div>
                      <div className={styles.taxableAmount11}>₹3,057.5</div>
                    </div>
                    <div className={styles.totalQuantity4}>
                      <b className={styles.byHand}>Total amount after tax:</b>
                      <b className={styles.taxableAmount9}>₹57,075</b>
                    </div>
                    <div className={styles.totalQuantity5}>
                      <div className={styles.taxableAmount1}>
                        Total amount after tax in words:
                      </div>
                      <div className={styles.taxableAmount11}>
                        Fifty seven thousand seventy five only
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.footer2}>
                <div className={styles.summary2}>
                  <div className={styles.bankDetails1}>
                    <b
                      className={styles.bankDetails3}
                    >{`Terms & conditions`}</b>
                  </div>
                  <div className={styles.bankDetails4}>
                    <div className={styles.taxableAmount20}>
                      <ul className={styles.enterYourTermsAndCondition}>
                        <li>Enter your terms and conditions</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={styles.summary3}>
                  <b className={styles.sriDurgaEngineering}>
                    Receiver’s signature
                  </b>
                  <div className={styles.bankDetails6} />
                </div>
                <div className={styles.details5}>
                  <b className={styles.sriDurgaEngineering}>
                    FOR SRI DURGA ENGINEERING WORKS
                  </b>
                  <div className={styles.detailsChild} />
                  <b className={styles.taxableAmount22}>Authorised signatory</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default AddInvoice;

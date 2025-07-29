"use client";
import { useEffect } from 'react';
import Script from 'next/script';
import Image from "next/image";

const ZohoForm = () => {
  const formId = "sf3z768b29807a31ad9bfa27f7d693c9733672b31acb09529a5ebc763089e8ce6b37";
  
  useEffect(() => {
    // Initialize Zoho global functions
    window.setupSF = window.setupSF || function() {};
    window.runOnFormSubmit = window.runOnFormSubmit || function() {};
    window[`runOnFormSubmit_${formId}`] = window[`runOnFormSubmit_${formId}`] || function(th) {};
  }, []);

  const refreshCaptcha = (e) => {
    e.preventDefault();
    if (window.loadCaptcha) {
      window.loadCaptcha(
        'https://campaigns.zoho.eu/campaigns/CaptchaVerify.zc?mode=generate',
        e.currentTarget,
        `#${formId}`
      );
    }
  };

  return (
    <div className="zoho-form-container">
      {/* Zoho Script */}
      <Script
        strategy="afterInteractive"
        src="https://qbwy-zcmp.maillist-manage.eu/js/optin.min.js"
        onLoad={() => {
          window.setupSF(
            formId,
            'ZCFORMVIEW',
            false,
            'acc',
            false,
            '2'
          );
        }}
      />
      
      {/* Global Styles */}
      <style jsx global>{`
        #${formId} #customForm *:not(.dateClass) {
          -webkit-box-sizing: border-box !important;
          -moz-box-sizing: border-box !important;
          box-sizing: border-box !important;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        
        #${formId} .dateClass {
          -webkit-box-sizing: unset!important;
          -moz-box-sizing: unset !important;
          box-sizing: unset !important;
          word-break: break-word;
          overflow-wrap: break-word;
        }
        
        /*** RESPONSIVE START */
        @media only screen and (max-width: 319px) {
          #${formId} #signupMainDiv {
            width:220px !important;
            min-width:220px !important;
            margin: 0px auto !important;
          }
          #${formId} #SIGNUP_PAGE {
            padding:0px !important
          }
          #${formId} [changeitem="SIGNUP_FORM_FIELD"] {
            width:94% !important;
          }
          #${formId} .zcinputbox {
            width:100% !important;
            max-width:100% !important;
            float:none !important;
          }
          #${formId} #captchaDiv {
            width:69.5% !important;
          }
          #${formId} #captcha {
            width:69.5% !important;
          }
          #${formId} #recapDiv {
            margin-left: 0px !important;
            max-width: 100% !important;
            overflow: hidden !important;
          }
          #${formId} #relCaptcha {
            margin-right:11px !important;
          }
          #${formId} #imgBlock {
            width:220px !important;
          }
          #${formId} .recaptcha {
            transform:scale(0.55);
            -webkit-transform:scale(0.55);
            transform-origin:0 0;
            -webkit-transform-origin:0 0;
            margin-left:0px
          }
        }
        /* Major Mobiles */
        @media screen and (min-width: 320px) and (max-width: 580px) {
          #${formId} #signupMainDiv {
            width:280px !important;
            min-width:280px !important;
            margin: 0px auto !important;
          }
          #${formId} #imgBlock {
            width:280px !important;
          }
          #${formId} #SIGNUP_PAGE {
            padding:0px !important
          }
          #${formId} .zcinputbox {
            width:100% !important;
            max-width:100% !important;
            float:none !important;
          }
          #${formId} [changeitem="SIGNUP_FORM_FIELD"] {
            width:95% !important;
          }
          #${formId} #captchaDiv {
            width:76% !important;
          }
          #${formId} #captcha {
            width:76% !important;
          }
          #${formId} #recapDiv {
            margin-left: 0px !important;
            max-width: 100% !important;
            overflow: hidden !important;
          }
          #${formId} #captchaParent {
            width:100% !important;
            max-width:100% !important;
          }
          #${formId} #captchaText {
            width:95.7% !important;
          }
          #${formId} #relCaptcha {
            margin-right:9px !important;
          }
          #${formId} #capRequired {
            margin-right: -10px !important;
          }
          #${formId} .recaptcha {
            transform:scale(0.72);
            -webkit-transform:scale(0.75);
            transform-origin:0 0;
            -webkit-transform-origin:0 0;
            margin-left:0px
          }
        }
        /* ... (all other media queries from original) ... */
        /*** RESPONSIVE END */
        #${formId} .bdr_btm_hover {
          background-color:#f9f9f9; 
          padding:10px;
        }
        #${formId} .bdr_btm {
          padding:10px 
        }
        #${formId} .f14 {
          font-size:14px
        }
      `}</style>

      {/* Form Structure */}
      <div id={formId} data-type="signupform">
        <div id="customForm">
          <input type="hidden" id="recapTheme" value="2" />
          <input type="hidden" id="isRecapIntegDone" value="false" />
          <input type="hidden" id="signupFormMode" value="copyCode" />
          <input type="hidden" id="signupFormType" value="LargeForm_Vertical" />
          <input type="hidden" id="recapModeTheme" value="" />
          
          <div 
            name="SIGNUP_PAGE" 
            className="large_form_1_css" 
            id="SIGNUP_PAGE" 
            style={{
              padding: "40px 30px 30px",
              backgroundColor: "rgb(209, 213, 219)",
              fontFamily: "Arial",
              color: "rgb(255, 255, 255)",
              textAlign: "center",
              fontSize: "14px"
            }}
          >
            <div name="" changeid="" changename="" style={{ margin: "0px auto" }}>
              <div 
                id="imgBlock" 
                name="LOGO_DIV" 
                logo="true" 
                style={{
                  width: "600px",
                  margin: "0px auto",
                  paddingBottom: "10px",
                  textAlign: "left",
                  paddingTop: "10px"
                }}
              ></div>
            </div>
            <br />
            
            <div 
              id="signupMainDiv" 
              style={{
                margin: "0px auto",
                width: "100%",
                minWidth: "230px",
                maxWidth: "600px"
              }} 
              name="SIGNUPFORM" 
              changeid="SIGNUPFORM" 
              changename="SIGNUPFORM"
            >
              <div>
                <div style={{ position: "relative" }}>
                  <div 
                    id="Zc_SignupSuccess" 
                    style={{
                      display: "none",
                      position: "absolute",
                      marginLeft: "4%",
                      width: "90%",
                      backgroundColor: "white",
                      padding: "3px",
                      border: "3px solid rgb(194, 225, 154)",
                      marginTop: "10px",
                      marginBottom: "10px",
                      wordBreak: "break-all"
                    }}
                  >
                    <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                      <tbody>
                        <tr>
                          <td width="10%">
                            <img 
                              className="successicon" 
                              src="https://qbwy-zcmp.maillist-manage.eu/images/challangeiconenable.jpg" 
                              alt="Success"
                              align="absmiddle"
                            />
                          </td>
                          <td>
                            <span 
                              id="signupSuccessMsg" 
                              style={{
                                color: "rgb(73, 140, 132)",
                                fontFamily: "sans-serif",
                                fontSize: "14px",
                                wordBreak: "break-word"
                              }}
                            >&nbsp;&nbsp;Thank you for Signing Up</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <form 
                  method="POST" 
                  id="zcampaignOptinForm" 
                  style={{ margin: "0px" }} 
                  action="https://qbwy-zcmp.maillist-manage.eu/weboptin.zc" 
                  target="_zcSignup"
                >
                  <div 
                    id="SIGNUP_BODY_ALL" 
                    name="SIGNUP_BODY_ALL" 
                    style={{ border: "1px none rgb(218, 216, 216)" }}
                  >
                    <h1 
                      id="SIGNUP_HEADING" 
                      name="SIGNUP_HEADING" 
                      changeid="SIGNUP_MSG" 
                      changetype="SIGNUP_HEADER"
                      style={{
                        color: "rgb(255, 255, 255)",
                        fontSize: "17px",
                        fontFamily: "Arial",
                        margin: "0px",
                        textAlign: "left",
                        padding: "20px",
                        backgroundColor: "rgb(21, 111, 137)",
                        wordBreak: "break-word",
                        borderColor: "rgb(21, 111, 137)",
                        borderWidth: "1px",
                        borderStyle: "none"
                      }}
                    >Join Our Newsletter</h1>
                    
                    <div 
                      id="SIGNUP_BODY" 
                      name="SIGNUP_BODY" 
                      style={{
                        padding: "20px",
                        textAlign: "center",
                        backgroundColor: "rgb(255, 255, 255)",
                        fontFamily: "Arial",
                        color: "rgb(68, 68, 68)",
                        bottom: "2px",
                        fontSize: "11px",
                        opacity: "1"
                      }}
                    >
                      <div style={{ margin: "0px auto", textAlign: "left" }}>
                        <div 
                          style={{ lineHeight: "1.6" }}
                          className="" 
                          changeid="SIGNUP_MSG" 
                          id="SIGNUP_DESCRIPTION" 
                          changetype="SIGNUP_DESCRIPTION"
                        >Please complete this form to create an account, receive email updates and much more.</div>
                        
                        <div 
                          id="errorMsgDiv" 
                          style={{
                            display: "none",
                            backgroundColor: "#FFEBE8",
                            padding: "10px 10px",
                            color: "#d20000",
                            fontSize: "11px",
                            margin: "10px 0px",
                            border: "solid 1px #ffd9d3",
                            marginTop: "20px"
                          }}
                        >&nbsp;&nbsp;Please correct the marked field(s) below.</div>
                        
                        <div>
                          <div style={{ fontSize: "12px", marginTop: "10px" }} name="fieldsdivSf" className="zcsffieldsdiv">
                            <div style={{ padding: "10px 0px 10px 0px" }}>
                              <div style={{}}>
                                <div 
                                  name="SIGNUP_FORM_LABEL"
                                  style={{
                                    width: "130px",
                                    float: "left",
                                    marginTop: "5px",
                                    marginRight: "5px",
                                    textAlign: "left",
                                    fontFamily: "Arial",
                                    color: "rgb(51, 51, 51)",
                                    fontSize: "12px"
                                  }}
                                >Contact Email&nbsp;
                                  <span name="SIGNUP_REQUIRED" style={{ color: "#B40000", fontSize: "11px", fontFamily: "Arial" }}>*</span>
                                </div>
                                <div 
                                  className="zcinputbox"
                                  style={{
                                    width: "60%",
                                    float: "left",
                                    minWidth: "170px",
                                    maxWidth: "70%"
                                  }}
                                >
                                  <input 
                                    name="CONTACT_EMAIL" 
                                    changeitem="SIGNUP_FORM_FIELD" 
                                    style={{
                                      height: "28px",
                                      padding: "2px",
                                      width: "97%",
                                      color: "#444444",
                                      backgroundColor: "#fff",
                                      borderWidth: "1px",
                                      border: "solid 1px #dedede",
                                      fontFamily: "Arial",
                                      fontSize: "12px",
                                      boxSizing: "border-box"
                                    }}
                                    maxLength="100" 
                                    type="email"
                                    required
                                  />
                                  <span style={{ display: "none" }} id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
                                </div>
                              </div>
                              <div style={{ clear: "both" }}></div>
                            </div>
                            
                            <div style={{ padding: "10px 0px 10px 0px" }}>
                              <div style={{}}>
                                <div 
                                  name="SIGNUP_FORM_LABEL"
                                  style={{
                                    width: "130px",
                                    float: "left",
                                    marginTop: "5px",
                                    marginRight: "5px",
                                    textAlign: "left",
                                    fontFamily: "Arial",
                                    color: "rgb(51, 51, 51)",
                                    fontSize: "12px"
                                  }}
                                >First Name&nbsp;</div>
                                <div 
                                  className="zcinputbox"
                                  style={{
                                    width: "60%",
                                    float: "left",
                                    minWidth: "170px",
                                    maxWidth: "70%"
                                  }}
                                >
                                  <input 
                                    name="FIRSTNAME" 
                                    changeitem="SIGNUP_FORM_FIELD" 
                                    style={{
                                      height: "28px",
                                      padding: "2px",
                                      width: "97%",
                                      color: "#444444",
                                      backgroundColor: "#fff",
                                      borderWidth: "1px",
                                      border: "solid 1px #dedede",
                                      fontFamily: "Arial",
                                      fontSize: "12px",
                                      boxSizing: "border-box"
                                    }}
                                    maxLength="50" 
                                    type="text"
                                  />
                                  <span style={{ display: "none" }} id="dt_FIRSTNAME">1,false,1,First Name,2</span>
                                </div>
                              </div>
                              <div style={{ clear: "both" }}></div>
                            </div>
                            
                            <div style={{ padding: "10px 0px 10px 0px" }}>
                              <div style={{}}>
                                <div 
                                  name="SIGNUP_FORM_LABEL"
                                  style={{
                                    width: "130px",
                                    float: "left",
                                    marginTop: "5px",
                                    marginRight: "5px",
                                    textAlign: "left",
                                    fontFamily: "Arial",
                                    color: "rgb(51, 51, 51)",
                                    fontSize: "12px"
                                  }}
                                >Last Name&nbsp;</div>
                                <div 
                                  className="zcinputbox"
                                  style={{
                                    width: "60%",
                                    float: "left",
                                    minWidth: "170px",
                                    maxWidth: "70%"
                                  }}
                                >
                                  <input 
                                    name="LASTNAME" 
                                    changeitem="SIGNUP_FORM_FIELD" 
                                    style={{
                                      height: "28px",
                                      padding: "2px",
                                      width: "97%",
                                      color: "#444444",
                                      backgroundColor: "#fff",
                                      borderWidth: "1px",
                                      border: "solid 1px #dedede",
                                      fontFamily: "Arial",
                                      fontSize: "12px",
                                      boxSizing: "border-box"
                                    }}
                                    maxLength="50" 
                                    type="text"
                                  />
                                  <span style={{ display: "none" }} id="dt_LASTNAME">1,false,1,Last Name,2</span>
                                </div>
                              </div>
                              <div style={{ clear: "both" }}></div>
                            </div>
                          </div>
                          
                          <div 
                            id="captchaOld" 
                            className="recaptcha" 
                            name="captchaContainer"
                            style={{ padding: "10px 0px 10px 15px" }}
                          >
                            <div style={{}}>
                              <div 
                                id="captchaParent"
                                style={{
                                  width: "59%",
                                  float: "left",
                                  minWidth: "170px",
                                  maxWidth: "70%"
                                }}
                              >
                                <img 
                                  src="//campaigns.zoho.eu/images/refresh_icon.png" 
                                  style={{ cursor: "pointer", float: "right", marginRight: "4px" }} 
                                  onClick={refreshCaptcha}
                                  id="relCaptcha"
                                  alt="Refresh Captcha"
                                />
                                <div 
                                  id="captchaDiv" 
                                  captcha="true" 
                                  name="" 
                                  style={{
                                    padding: "20px",
                                    background: "#fff",
                                    border: "1px solid #dedede",
                                    boxSizing: "border-box",
                                    width: "98.8%"
                                  }}
                                ></div>
                                <input 
                                  placeholder="Captcha" 
                                  id="captchaText" 
                                  name="captchaText" 
                                  changeitem="SIGNUP_FORM_FIELD" 
                                  style={{
                                    marginTop: "5px",
                                    height: "28px",
                                    padding: "2px",
                                    width: "98.7%",
                                    color: "#444",
                                    backgroundColor: "#fff",
                                    border: "1px solid #dedede",
                                    fontSize: "12px",
                                    boxSizing: "border-box",
                                    fontFamily: "Arial"
                                  }} 
                                  maxLength="100" 
                                  type="text" 
                                />
                                <span 
                                  name="SIGNUP_REQUIRED" 
                                  id="capRequired" 
                                  style={{
                                    color: "#b40000",
                                    fontSize: "11px",
                                    fontFamily: "Arial",
                                    marginTop: "-16px",
                                    marginRight: "-2px",
                                    float: "right"
                                  }}
                                >*</span>
                              </div>
                            </div>
                            <div style={{ clear: "both" }}></div>
                          </div>
                          
                          <input 
                            type="hidden" 
                            id="secretid" 
                            value="6LdNeDUUAAAAAG5l7cJfv1AA5OKLslkrOa_xXxLs" 
                          />
                          
                          <div style={{ borderBottom: "#ebebeb dotted 1px", marginTop: "10px", clear: "both" }}></div>
                          
                          <div 
                            id="REQUIRED_FIELD_TEXT" 
                            changetype="REQUIRED_FIELD_TEXT" 
                            name="SIGNUP_REQUIRED" 
                            style={{
                              color: "#B40000",
                              fontSize: "11px",
                              fontFamily: "Arial",
                              padding: "10px 10px 10px 0px"
                            }}
                          >*Required Fields</div>
                          
                          <div style={{ padding: "10px", textAlign: "center" }}>
                            <input 
                              type="button" 
                              action="Save" 
                              id="zcWebOptin" 
                              name="SIGNUP_SUBMIT_BUTTON" 
                              changetype="SIGNUP_SUBMIT_BUTTON_TEXT" 
                              style={{
                                cursor: "pointer",
                                appearance: "none",
                                borderRadius: "3px",
                                backgroundPosition: "center bottom",
                                backgroundRepeat: "repeat-x",
                                outline: "none",
                                padding: "5px 15px",
                                textAlign: "center",
                                color: "#fff",
                                fontSize: "14px",
                                backgroundColor: "#8eb934",
                                borderStyle: "solid",
                                borderColor: "#8eb934",
                                fontFamily: "Arial",
                                borderWidth: "5px",
                                whiteSpace: "normal"
                              }} 
                              value="Join Now" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Zoho Hidden Fields */}
                  <input type="hidden" id="fieldBorder" value="" />
                  <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
                  <input type="hidden" name="viewFrom" id="viewFrom" value="URL_ACTION" />
                  <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
                  <input type="hidden" id="lD" name="lD" value="116336eb13e7e959" />
                  <input type="hidden" name="emailReportId" id="emailReportId" value="" />
                  <input type="hidden" name="zx" id="cmpZuid" value="14ae678ed9" />
                  <input type="hidden" name="zcvers" value="2.0" />
                  <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
                  <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
                  <input type="hidden" id="zcld" name="zcld" value="116336eb13e7e959" />
                  <input type="hidden" id="zctd" name="zctd" value="" />
                  <input type="hidden" id="document_domain" value="" />
                  <input type="hidden" id="zc_Url" value="qbwy-zcmp.maillist-manage.eu" />
                  <input type="hidden" id="new_optin_response_in" value="0" />
                  <input type="hidden" id="duplicate_optin_response_in" value="0" />
                  <input type="hidden" id="zc_formIx" name="zc_formIx" value="3z768b29807a31ad9bfa27f7d693c9733672b31acb09529a5ebc763089e8ce6b37" />
                </form>
              </div>
              
              <div 
                id="privacyNotes" 
                identity="privacyNotes"
                style={{
                  margin: "0px auto",
                  marginTop: "20px",
                  textAlign: "left",
                  height: "76px"
                }}
              >
                <span>Note: It is our responsibility to protect your privacy and we guarantee that your data will be completely confidential.</span>
              </div>
            </div>
          </div>
        </div>
        
        <input type="hidden" id="isCaptchaNeeded" value="true" />
        <input type="hidden" id="superAdminCap" value="0" />
        <img 
          src="https://qbwy-zcmp.maillist-manage.eu/images/spacer.gif" 
          id="refImage" 
          onLoad={() => {}} 
          style={{ display: "none" }} 
          alt="spacer"
        />
      </div>
      
      {/* Overlay and Success Popup */}
      <div 
        id="zcOptinOverLay" 
        onContextMenu={(e) => e.preventDefault()} 
        style={{
          display: "none",
          textAlign: "center",
          backgroundColor: "rgb(0, 0, 0)",
          opacity: "0.5",
          zIndex: "100",
          position: "fixed",
          width: "100%",
          top: "0px",
          left: "0px",
          height: "988px"
        }}
      ></div>
      
      <div 
        id="zcOptinSuccessPopup" 
        style={{
          display: "none",
          zIndex: "9999",
          width: "800px",
          height: "40%",
          top: "84px",
          position: "fixed",
          left: "26%",
          backgroundColor: "#FFFFFF",
          borderColor: "#E6E6E6",
          borderStyle: "solid",
          borderWidth: "1px",
          boxShadow: "0 1px 10px #424242",
          padding: "35px"
        }}
      >
        <span 
          style={{
            position: "absolute",
            top: "-16px",
            right: "-14px",
            zIndex: "99999",
            cursor: "pointer"
          }} 
          id="closeSuccess"
        >
          <img src="https://qbwy-zcmp.maillist-manage.eu/images/videoclose.png" alt="Close" />
        </span>
        <div id="zcOptinSuccessPanel"></div>
      </div>
    </div>
  );
};

export default ZohoForm;
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import styled from "styled-components";
import { Arrow } from "../components/Icons";
import { Switch } from "../components/shared";
import Slider from "../components/Slider";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-bottom: 20px;
  color: white;
  gap: 10px;
  flex: 1;
`;
const AddonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;
const AddonsHeader = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  font-size: 18px;
  padding: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  width: 100%;
`;
const AddonsMain = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: row;
  gap: 10px;
  min-height: 80px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-wrap: wrap;
  padding: 10px;
  width: 100%;
`;
const DiscordAddon = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.1) 99.8%
  );
  display: flex;
  flex: 1;
  gap: 10px;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15),
    inset 0px 0px 3px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 10px;
  &.active {
    background: linear-gradient(180deg, #ff5665 1.55%, #e23342 96.94%);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
    & img {
      border: 1px solid white;
      border-radius: 13px;
    }
  }
`;
const GeneralAddon = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 10px;
  & img {
    width: 42px;
    height: 42px;
  }
  min-width: 308.5px;
  max-width: 400px;
  @media only screen and (min-width: 1600px) {
    min-width: 380px;
    max-width: 380px;
  }
  padding: 10px;
  flex: 1;
`;
const ScriptsAddon = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-radius: 10px;
  & img {
    width: 42px;
    height: 42px;
  }

  & section {
    & * {
      font-weight: 700;
    }
  }
  padding: 10px;
  flex: 1;
`;
const CheckboxDiv = styled.div`
  & .switch ~ label {
    color: rgba(255, 255, 255, 0.6);
  }
`;
const Input = styled.input`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.1) 99.8%
  );
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15),
    inset 0px 0px 3px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  padding: 12px;
  font-size: 14px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  outline: none;
`;
const Select = styled.select`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  height: 40px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15),
    inset 0px 0px 3px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  appearance: none;
  color: rgba(255, 255, 255, 0.8);
  padding-left: 10px;
  background-image: url("/arrow.svg");
  background-position: right 10px center;
  border: none;
  background-repeat: no-repeat;
  outline: none & option {
    background: #2e2f48;
  }
`;
const GreenButton = styled.button`
  border: none;
  border-radius: 10px;
  background: linear-gradient(180deg, #00da0d 0%, #00b20b 100%);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.35);
  font-weight: 700;
  color: white;
`;
const opacity = {
  color: "rgba(255,255,255,0.6)",
};
const Addons = () => {
  const [collapseOne, setCollapseOne] = useState(false);
  const [collapseTwo, setCollapseTwo] = useState(false);
  const collapseFirst = () => {
    if (collapseOne) {
      setCollapseOne(false);
    } else {
      setCollapseOne(true);
    }
  };
  const [shopifyFeed, setShopifyFeed] = useState(false);
  const [shopifyCheckboxes, setShopifyCheckboxes] = useState({
    autocart: false,
    skipCart: false,
    productFast: false,
    billingFast: false,
    couponMode: false,
    paypalMode: false,
  });
  const [tlDashboard, setTlDashboard] = useState(false);
  const collapseSecond = () => {
    if (collapseTwo) {
      setCollapseTwo(false);
    } else {
      setCollapseTwo(true);
    }
  };
  return (
    <Wrapper>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#292a47",
            boxShadow:
              "box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15), inset 0px 0px 3px rgba(0, 0, 0, 0.05)",
            color: "white",
          },
        }}
      />
      <Header>
        <div>
          <h3 style={{ color: "#fff", fontSize: 34, fontWeight: 700 }}>
            Add-ons
          </h3>
          <span style={{ color: "rgba(255,255,255,0.5)" }}>
            Select which features to turn off when unneeded as they can
            interfere with normal navigation.
          </span>
        </div>
      </Header>
      <Container>
        <AddonsContainer>
          <AddonsHeader>
            <h3 style={{ color: "#fff" }}>Discord Add-ons(2)</h3>
          </AddonsHeader>
          <AddonsMain>
            <DiscordAddon>
              <img src="/groupIcons/Discord.svg" />
              <div>
                <p style={{ fontSize: 14 }}>Discord OAuth Autoclick</p>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
                  Feature explanation could go here.
                </span>
              </div>
            </DiscordAddon>
            <DiscordAddon>
              <img src="/groupIcons/Discord.svg" />
              <div>
                <p style={{ fontSize: 14 }}>Discord Link Drag Copy</p>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
                  Feature explanation could go here.
                </span>
              </div>
            </DiscordAddon>
            <DiscordAddon className="active">
              <img src="/groupIcons/Discord.svg" />
              <div>
                <p style={{ fontSize: 14 }}>
                  Special Characters + Space Remover
                </p>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
                  Feature explanation could go here.
                </span>
              </div>
            </DiscordAddon>
          </AddonsMain>
        </AddonsContainer>
        <AddonsContainer>
          <AddonsHeader>
            <h3 style={{ color: "#fff" }}>General Add-ons</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: 20,
                background: "rgba(7, 30, 48, 0.5)",
                padding: 10,
                borderRadius: 10,
                cursor: "pointer",
              }}
              onClick={() => collapseFirst()}
            >
              <Arrow></Arrow>
            </div>
          </AddonsHeader>
          {!collapseOne ? (
            <AddonsMain>
              <GeneralAddon>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img src="/groupIcons/Link Appender.svg" />
                  <div>
                    <p style={{ fontSize: 14 }}>Link Appender</p>
                    <span
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}
                    >
                      Feature explanation could go here.
                    </span>
                  </div>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  <h4 style={{ fontWeight: 700, fontSize: 13 }}>Link</h4>
                  <Input placeholder="Paste link here" />
                </div>
              </GeneralAddon>
              <GeneralAddon>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <img src="/groupIcons/Refresh page.svg" />
                  <div>
                    <p style={{ fontSize: 14 }}>Refresh Page</p>
                    <span
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}
                    >
                      Feature explanation could go here.
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                      minWidth: 170,
                    }}
                  >
                    <h4 style={{ fontWeight: 700, fontSize: 13 }}>
                      Website Name
                    </h4>
                    <Select></Select>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                      minWidth: 160,
                    }}
                  >
                    <h4 style={{ fontWeight: 700, fontSize: 13 }}>Interval</h4>
                    <Input placeholder="1500ms" />
                  </div>
                </div>
              </GeneralAddon>
              <GeneralAddon>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img src="/groupIcons/Ban Sites.svg" />
                  <div>
                    <p style={{ fontSize: 14 }}>Ban Sites</p>
                    <span
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}
                    >
                      Feature explanation could go here.
                    </span>
                  </div>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  <h4 style={{ fontWeight: 700, fontSize: 13 }}>Ban Sites</h4>
                  <Input placeholder='Paste Sites Here (separated by ",")' />
                </div>
              </GeneralAddon>
              <GeneralAddon>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img src="/groupIcons/Twitter.svg" />
                  <div>
                    <p style={{ fontSize: 14 }}>Twitter ID</p>
                    <span
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}
                    >
                      Feature explanation could go here.
                    </span>
                  </div>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  <h4 style={{ fontWeight: 700, fontSize: 13 }}>Twitter ID</h4>
                  <Input placeholder="Paste Twitter ID Here" />
                </div>
              </GeneralAddon>
              <GeneralAddon>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img src="/groupIcons/Discord.svg" />
                  <div>
                    <p style={{ fontSize: 14 }}>Discord ID</p>
                    <span
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}
                    >
                      Feature explanation could go here.
                    </span>
                  </div>
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 4 }}
                >
                  <h4 style={{ fontWeight: 700, fontSize: 13 }}>Discord ID</h4>
                  <Input placeholder="Paste Discord ID Here" />
                </div>
              </GeneralAddon>
              <GeneralAddon>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img src="/groupIcons/Shopify Feed.svg" />
                  <div>
                    <p style={{ fontSize: 14 }}>Shopify Feed</p>
                    <span
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}
                    >
                      Feature explanation could go here.
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 4,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h4
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      color: shopifyFeed ? "white" : "rgba(255,255,255,0.6)",
                    }}
                  >
                    Enable Shopify Feed
                  </h4>
                  <Switch
                    defaultChecked={shopifyFeed}
                    onChange={() => {
                      shopifyFeed
                        ? setShopifyFeed(false)
                        : setShopifyFeed(true);
                    }}
                  ></Switch>
                </div>
              </GeneralAddon>
            </AddonsMain>
          ) : (
            <></>
          )}
        </AddonsContainer>
        <AddonsContainer>
          <AddonsHeader>
            <h3 style={{ color: "#fff" }}>Scripts Add-ons</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: 20,
                background: "rgba(7, 30, 48, 0.5)",
                padding: 10,
                borderRadius: 10,
                cursor: "pointer",
              }}
              onClick={collapseSecond}
            >
              <Arrow></Arrow>
            </div>
          </AddonsHeader>
          {!collapseTwo ? (
            <AddonsMain>
              <ScriptsAddon>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img src="/groupIcons/Shopify Feed.svg" />
                  <div>
                    <p style={{ fontSize: 14 }}>Shopify</p>
                    <span
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}
                    >
                      Feature explanation could go here.
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",

                    gap: 10,
                  }}
                >
                  <section
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <Switch
                      defaultChecked={shopifyCheckboxes.autocart}
                      onChange={() => {
                        shopifyCheckboxes.autocart
                          ? setShopifyCheckboxes({
                              ...shopifyCheckboxes,
                              autocart: false,
                            })
                          : setShopifyCheckboxes({
                              ...shopifyCheckboxes,
                              autocart: true,
                            });
                      }}
                    ></Switch>
                    <span
                      style={{
                        color: shopifyCheckboxes.autocart
                          ? "white"
                          : "rgba(255,255,255,0.6)",
                      }}
                    >
                      Autocart
                    </span>
                  </section>
                  <section
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <Switch
                      defaultChecked={shopifyCheckboxes.skipCart}
                      onChange={() => {
                        shopifyCheckboxes.skipCart
                          ? setShopifyCheckboxes({
                              ...shopifyCheckboxes,
                              skipCart: false,
                            })
                          : setShopifyCheckboxes({
                              ...shopifyCheckboxes,
                              skipCart: true,
                            });
                      }}
                    ></Switch>
                    <span
                      style={{
                        color: shopifyCheckboxes.skipCart
                          ? "white"
                          : "rgba(255,255,255,0.6)",
                      }}
                    >
                      Skip Cart
                    </span>
                  </section>
                </div>
                <section
                  style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    marginTop: 5,
                    alignItems: "center",
                  }}
                >
                  <Switch
                    defaultChecked={shopifyCheckboxes.productFast}
                    onChange={() => {
                      shopifyCheckboxes.productFast
                        ? setShopifyCheckboxes({
                            ...shopifyCheckboxes,
                            productFast: false,
                          })
                        : setShopifyCheckboxes({
                            ...shopifyCheckboxes,
                            productFast: true,
                          });
                    }}
                  ></Switch>
                  <span
                    style={{
                      color: shopifyCheckboxes.productFast
                        ? "white"
                        : "rgba(255,255,255,0.6)",
                    }}
                  >
                    Product Page Fast Mode
                  </span>
                </section>
                <section
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 5,
                    flexDirection: "row-reverse",
                  }}
                >
                  <Switch
                    defaultChecked={shopifyCheckboxes.billingFast}
                    onChange={() => {
                      shopifyCheckboxes.billingFast
                        ? setShopifyCheckboxes({
                            ...shopifyCheckboxes,
                            billingFast: false,
                          })
                        : setShopifyCheckboxes({
                            ...shopifyCheckboxes,
                            billingFast: true,
                          });
                    }}
                  ></Switch>
                  <span
                    style={{
                      color: shopifyCheckboxes.billingFast
                        ? "white"
                        : "rgba(255,255,255,0.6)",
                    }}
                  >
                    Billing Page Fast Mode
                  </span>
                </section>
                <section
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 5,
                    gap: 10,
                  }}
                >
                  <CheckboxDiv
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <Switch
                      defaultChecked={shopifyCheckboxes.couponMode}
                      onChange={() => {
                        shopifyCheckboxes.couponMode
                          ? setShopifyCheckboxes({
                              ...shopifyCheckboxes,
                              couponMode: false,
                            })
                          : setShopifyCheckboxes({
                              ...shopifyCheckboxes,
                              couponMode: true,
                            });
                      }}
                    ></Switch>
                    <label
                      style={{
                        color: shopifyCheckboxes.couponMode
                          ? "white"
                          : "rgba(255,255,255,0.6)",
                      }}
                    >
                      Coupon Mode
                    </label>
                  </CheckboxDiv>
                  <CheckboxDiv
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <Switch
                      defaultChecked={shopifyCheckboxes.paypalMode}
                      onChange={() => {
                        shopifyCheckboxes.paypalMode
                          ? setShopifyCheckboxes({
                              ...shopifyCheckboxes,
                              paypalMode: false,
                            })
                          : setShopifyCheckboxes({
                              ...shopifyCheckboxes,
                              paypalMode: true,
                            });
                      }}
                    ></Switch>
                    <label
                      style={{
                        color: shopifyCheckboxes.paypalMode
                          ? "white"
                          : "rgba(255,255,255,0.6)",
                      }}
                    >
                      Paypal Mode
                    </label>
                  </CheckboxDiv>
                </section>
              </ScriptsAddon>
              <ScriptsAddon style={{ gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img
                    src="/groupIcons/Card.svg"
                    style={{
                      background:
                        "linear-gradient(180deg, #FF5665 1.55%, #E23342 96.94%)",
                      borderRadius: 10,
                    }}
                  />
                  <div>
                    <p style={{ fontSize: 14 }}>Multi Profile Checkout</p>
                    <span
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}
                    >
                      Feature explanation could go here.
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                      minWidth: 170,
                      width: "100%",
                    }}
                  >
                    <h4 style={{ fontWeight: 700, fontSize: 13 }}>
                      Profile Group
                    </h4>
                    <Select></Select>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                      minWidth: 190,
                      width: "100%",
                    }}
                  >
                    <h4 style={{ fontWeight: 700, fontSize: 13 }}>
                      Windows Per Profile
                    </h4>
                    <Select></Select>
                  </div>
                </div>
                <GreenButton style={{ padding: 15, textAlign: "center" }}>
                  Change Keybind
                </GreenButton>
              </ScriptsAddon>
              <ScriptsAddon>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <img src="/groupIcons/TL Dash.svg" />
                  <div>
                    <p style={{ fontSize: 14 }}>TL Dash Script</p>
                    <span
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}
                    >
                      Feature explanation could go here.
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 5,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 4,
                      minWidth: 170,
                      width: "100%",
                    }}
                  >
                    <h4 style={{ fontWeight: 700, fontSize: 13 }}>
                      Profile Group
                    </h4>
                    <Select></Select>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      color: tlDashboard ? "white" : "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    Enable TL Dashboard Script Mode
                  </span>
                  <Switch
                    defaultChecked={tlDashboard}
                    onChange={() => {
                      tlDashboard
                        ? setTlDashboard(false)
                        : setTlDashboard(true);
                    }}
                  ></Switch>
                </div>
              </ScriptsAddon>
            </AddonsMain>
          ) : (
            <></>
          )}
        </AddonsContainer>
      </Container>
    </Wrapper>
  );
};

export default Addons;

import React, {
  useEffect,
  useState,
} from "react";

import {
  getDemoData,
  updateDemoData,
} from "../../data/demoStore";

function Referrals() {
  const [data, setData] =
    useState(getDemoData());

  useEffect(() => {
    setData(getDemoData());
  }, []);

  const updateReferral = (
    referralId,
    status
  ) => {
    const currentData =
      getDemoData();

    const updatedReferrals =
      currentData.referrals.map(
        (referral) =>
          referral.id === referralId
            ? {
                ...referral,
                status,
              }
            : referral
      );

    const updatedData =
      updateDemoData({
        referrals:
          updatedReferrals,
      });

    setData(updatedData);

    alert(
      `Referral ${referralId} updated to ${status}.`
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "#f5f7f6",
        fontFamily:
          "Arial, sans-serif",
      }}
    >

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >

        {/* HEADER */}
        <div
          style={{
            marginBottom: "30px",
          }}
        >

          <h1
            style={{
              marginBottom: "8px",
            }}
          >
            Referral Tracking
          </h1>

          <p
            style={{
              color: "#667085",
            }}
          >
            Track patients from primary
            healthcare facilities to
            specialist hospitals.
          </p>

        </div>

        {/* SUMMARY */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
            marginBottom: "30px",
          }}
        >

          <div
            style={{
              background: "white",
              padding: "22px",
              borderRadius: "14px",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.06)",
            }}
          >
            <span>
              Total Referrals
            </span>

            <h2>
              {data.referrals.length}
            </h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "22px",
              borderRadius: "14px",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.06)",
            }}
          >
            <span>
              Pending
            </span>

            <h2>
              {
                data.referrals.filter(
                  (item) =>
                    item.status ===
                    "Pending"
                ).length
              }
            </h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "22px",
              borderRadius: "14px",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.06)",
            }}
          >
            <span>
              Accepted
            </span>

            <h2>
              {
                data.referrals.filter(
                  (item) =>
                    item.status ===
                    "Accepted"
                ).length
              }
            </h2>
          </div>

          <div
            style={{
              background: "white",
              padding: "22px",
              borderRadius: "14px",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.06)",
            }}
          >
            <span>
              Completed
            </span>

            <h2>
              {
                data.referrals.filter(
                  (item) =>
                    item.status ===
                    "Completed"
                ).length
              }
            </h2>
          </div>

        </div>

        {/* REFERRALS */}
        <div
          style={{
            display: "grid",
            gap: "18px",
          }}
        >

          {data.referrals.length >
          0 ? (

            data.referrals.map(
              (referral) => (

                <div
                  key={referral.id}
                  style={{
                    background:
                      "white",
                    padding: "24px",
                    borderRadius:
                      "16px",
                    boxShadow:
                      "0 2px 10px rgba(0,0,0,0.06)",
                    display: "grid",
                    gridTemplateColumns:
                      "1fr auto",
                    gap: "20px",
                  }}
                >

                  <div>

                    <div
                      style={{
                        display:
                          "flex",
                        alignItems:
                          "center",
                        gap: "12px",
                        marginBottom:
                          "10px",
                      }}
                    >

                      <h2
                        style={{
                          margin: 0,
                        }}
                      >
                        {
                          referral.patient
                        }
                      </h2>

                      <span
                        style={{
                          padding:
                            "5px 10px",
                          borderRadius:
                            "20px",
                          background:
                            "#eef6f1",
                          color:
                            "#237a45",
                          fontSize:
                            "13px",
                          fontWeight:
                            "600",
                        }}
                      >
                        {
                          referral.id
                        }
                      </span>

                    </div>

                    <p>
                      <strong>
                        From:
                      </strong>{" "}
                      {
                        referral.from
                      }
                    </p>

                    <p>
                      <strong>
                        To:
                      </strong>{" "}
                      {referral.to}
                    </p>

                    <p>
                      <strong>
                        Reason:
                      </strong>{" "}
                      {
                        referral.reason
                      }
                    </p>

                    <p>
                      <strong>
                        Priority:
                      </strong>{" "}
                      {
                        referral.priority
                      }
                    </p>

                    <p>
                      <strong>
                        Created:
                      </strong>{" "}
                      {referral.date}
                    </p>

                  </div>

                  <div
                    style={{
                      minWidth:
                        "170px",
                      display:
                        "flex",
                      flexDirection:
                        "column",
                      alignItems:
                        "stretch",
                      justifyContent:
                        "center",
                      gap: "12px",
                    }}
                  >

                    <span
                      style={{
                        textAlign:
                          "center",
                        padding:
                          "9px 14px",
                        borderRadius:
                          "20px",
                        background:
                          referral.status ===
                          "Completed"
                            ? "#e7f7ed"
                            : referral.status ===
                              "Accepted"
                            ? "#e9f2ff"
                            : "#fff4df",
                        color:
                          referral.status ===
                          "Completed"
                            ? "#18713b"
                            : referral.status ===
                              "Accepted"
                            ? "#2563a8"
                            : "#9a6500",
                        fontWeight:
                          "600",
                      }}
                    >
                      {
                        referral.status
                      }
                    </span>

                    {referral.status ===
                      "Pending" && (

                      <button
                        onClick={() =>
                          updateReferral(
                            referral.id,
                            "Accepted"
                          )
                        }
                        style={{
                          border:
                            "none",
                          borderRadius:
                            "8px",
                          padding:
                            "11px",
                          background:
                            "#238b4e",
                          color:
                            "white",
                          cursor:
                            "pointer",
                          fontWeight:
                            "600",
                        }}
                      >
                        Accept Referral
                      </button>

                    )}

                    {referral.status ===
                      "Accepted" && (

                      <button
                        onClick={() =>
                          updateReferral(
                            referral.id,
                            "Completed"
                          )
                        }
                        style={{
                          border:
                            "none",
                          borderRadius:
                            "8px",
                          padding:
                            "11px",
                          background:
                            "#238b4e",
                          color:
                            "white",
                          cursor:
                            "pointer",
                          fontWeight:
                            "600",
                        }}
                      >
                        Mark Completed
                      </button>

                    )}

                  </div>

                </div>

              )
            )

          ) : (

            <div
              style={{
                background:
                  "white",
                padding: "50px",
                borderRadius:
                  "16px",
                textAlign:
                  "center",
              }}
            >

              <div
                style={{
                  fontSize:
                    "40px",
                  marginBottom:
                    "10px",
                }}
              >
                🏥
              </div>

              <h2>
                No referrals yet
              </h2>

              <p
                style={{
                  color:
                    "#667085",
                }}
              >
                Referrals created by
                health workers will
                appear here.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Referrals;
# Prior-art shortlist — EP1762020B1, claim 1 (cut-off 2004-06-16)

Tiers per ../../config/tiering.md: T1 = anticipatory (whole claim);
T2 = discloses the novel aspect; T3 = trivial/conventional features.

## Best candidates for the characterizing feature (common part across two formats)
| Tier | Reference | Date | Notes |
|---|---|---|---|
| **T2** (corrected after full-text read) | **Choi, S. & del Prado Pavón, J. — "802.11g CP…," IEEE VTC-Spring 2003** | Apr 2003 | Full text read: the paper's *own* proposal ("802.11g CP") is **AP/PCF-coordinated** and uses an **ERP-only CF-End** → fails el.2 (distributed control) and el.4–5 (not a common part). NOT a clean T1. BUT it documents, as background, the **802.11g nonERP RTS/CTS** protection (DSSS/CCK common part decodable by both, carrying NAV/duration of upcoming tx) and the **CCK-OFDM hybrid** (DSSS preamble/header + OFDM payload = common part). Strong T2 + patentee's own publication. |
| T2 | **US 2003/0133469 A1 (Conexant)** | 2003-07-17 | Enhanced station sends an initial frame in legacy-compatible modulation stating the **duration of the upcoming transmission** across formats; all stations decode it. |
| T2 | **Bangerter et al. (Intel), "High-Throughput Wireless LAN Air Interface," Intel Tech. Journal** | 2003 | Mixed-mode operation; announces NAV via beacons; legacy coexistence. |

| **T1 lead (retrieve)** | **IEEE 802.11g/D3.0 (Draft, July 2002)** and **IEEE Std 802.11-1999** — nonERP RTS/CTS protection + NAV; CCK-OFDM hybrid mode | 2002 / 1999 | In distributed **DCF/IBSS** (each station controls when it wins contention → el.2), a station sends RTS/CTS modulated in a **common DSSS/CCK part decodable by all stations regardless of format** (el.3–5) carrying a **Duration/NAV announcing the upcoming transmission** (el.6). The **CCK-OFDM hybrid** is a single message with a legacy-decodable common part + OFDM payload. Best route to a clean anticipation; pull the draft spec to map every limitation. |

## Best candidates for distributed control + announcing upcoming transmissions
| Tier | Reference | Date | Notes |
|---|---|---|---|
| T2 | **Borgonovo, Capone, Cesana, Fratta — ADHOC MAC / RR-ALOHA** (Med-Hoc-Net 2002; Wireless Networks 2004) | 2002 | Distributed reservation; each node broadcasts frame-info announcing slot/upcoming-transmission status decoded by all neighbors. Elements 1,2,3,6. |
| T2 | **Rockwell Collins / C. D. Young "USAP" cluster:** US6487186B1 (2002-11-26), US6504829B1 (2003-01-07), US6574206B2 (2003-06-03), US6711177B1 (2004-03-23) | 2002–04 | Distributed TDMA slot reservation in ad-hoc networks. |
| T2 | **Nokia / Beyer — US6788702B1 family** ("neighborhood-established transmission scheduling") | family ~2001 | Neighbors exchange packets announcing upcoming transmissions; distributed. |
| T2/T3 | **Sheu & Sheu, JSAC 2001; Chen, Sheu & Yang, 2003** | 2001/2003 | Beacon-based reservation in IEEE 802.11 ad hoc; multichannel modes. |

## Assessment (updated after reading the 802.11g-CP full text)
The 802.11g-CP paper, read in full, is **T2, not T1** — its novel scheme is
AP/PCF-coordinated with an ERP-only CF-End, so it does not anticipate the
distributed, common-part claim. It remains valuable: patentee's own group, and
it documents the pre-cutoff state of the art (nonERP RTS/CTS common-part
protection; CCK-OFDM hybrid).

**Best route to a T1 anticipation:** the **IEEE 802.11g draft (D3.0, July 2002)**
and **802.11-1999** themselves — the nonERP RTS/CTS protection and the CCK-OFDM
hybrid mode, applied in distributed DCF/IBSS, appear to read on all elements of
claim 1. Retrieve the 802.11g draft spec and map limitation-by-limitation.

Fallback obviousness combination: 802.11g-CP / 802.11g draft (common part across
two formats) + ADHOC MAC/RR-ALOHA or the USAP patents (distributed control +
announcing upcoming transmissions).

> Lesson recorded for the search agent: verify candidates against FULL TEXT
> before assigning T1 — an abstract can read as anticipatory when the full
> disclosure is not.
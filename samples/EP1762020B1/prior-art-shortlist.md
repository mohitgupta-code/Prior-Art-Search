# Prior-art shortlist — EP1762020B1, claim 1 (cut-off 2004-06-16)

Tiers per ../../config/tiering.md: T1 = anticipatory (whole claim);
T2 = discloses the novel aspect; T3 = trivial/conventional features.

## Best candidates for the characterizing feature (common part across two formats)
| Tier | Reference | Date | Notes |
|---|---|---|---|
| **T1 candidate** | **Choi, S. & del Prado Pavón, J. — "802.11g CP: A Solution for IEEE 802.11g and 802.11b Inter-Working," IEEE VTC-Spring 2003** (Xplore 2003-07-09; conf. 22–25 Apr 2003) | Apr 2003 | **Strongest reference.** 802.11g carries TWO formats (legacy CCK/DSSS + OFDM) → el.3; a **legacy-modulated common part** that legacy stations decode → el.4–5; sets **NAV/duration for the upcoming OFDM transmission** → el.6; 802.11 DCF is distributed, each station controls while transmitting → el.2. Co-authored by **del Prado Pavón (Philips)** — patentee's own prior publication. **Verify against full text** (paywalled) that the CP is a shared field of both formats carrying duration. |
| T2 | **US 2003/0133469 A1 (Conexant)** | 2003-07-17 | Enhanced station sends an initial frame in legacy-compatible modulation stating the **duration of the upcoming transmission** across formats; all stations decode it. |
| T2 | **Bangerter et al. (Intel), "High-Throughput Wireless LAN Air Interface," Intel Tech. Journal** | 2003 | Mixed-mode operation; announces NAV via beacons; legacy coexistence. |

## Best candidates for distributed control + announcing upcoming transmissions
| Tier | Reference | Date | Notes |
|---|---|---|---|
| T2 | **Borgonovo, Capone, Cesana, Fratta — ADHOC MAC / RR-ALOHA** (Med-Hoc-Net 2002; Wireless Networks 2004) | 2002 | Distributed reservation; each node broadcasts frame-info announcing slot/upcoming-transmission status decoded by all neighbors. Elements 1,2,3,6. |
| T2 | **Rockwell Collins / C. D. Young "USAP" cluster:** US6487186B1 (2002-11-26), US6504829B1 (2003-01-07), US6574206B2 (2003-06-03), US6711177B1 (2004-03-23) | 2002–04 | Distributed TDMA slot reservation in ad-hoc networks. |
| T2 | **Nokia / Beyer — US6788702B1 family** ("neighborhood-established transmission scheduling") | family ~2001 | Neighbors exchange packets announcing upcoming transmissions; distributed. |
| T2/T3 | **Sheu & Sheu, JSAC 2001; Chen, Sheu & Yang, 2003** | 2001/2003 | Beacon-based reservation in IEEE 802.11 ad hoc; multichannel modes. |

## Assessment
**Best invalidity reference: the 802.11g-CP paper (Choi & del Prado Pavón, VTC-Spring 2003).**
On the abstract + introduction it appears to read on every element of claim 1
(distributed 802.11 DCF; two formats — legacy CCK/DSSS and OFDM; a legacy-
decodable common part; carrying NAV/duration of the upcoming transmission) and
predates the cut-off by ~14 months. It is also the patentee's own group's prior
publication. **Remaining step:** obtain the full text (paywalled IEEE Xplore) to
confirm the CP is a shared field of both formats carrying the duration, which
would firm it as a clean T1 anticipation.

Fallback combination if T1 is not sustained: **802.11g-CP (common part / two
formats)** + **ADHOC MAC/RR-ALOHA or the USAP patents (distributed control +
announcing upcoming transmissions)** for an obviousness case.

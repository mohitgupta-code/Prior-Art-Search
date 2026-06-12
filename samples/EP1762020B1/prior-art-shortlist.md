# Prior-art shortlist — EP1762020B1, claim 1 (cut-off 2004-06-16)

Tiers per ../../config/tiering.md: T1 = anticipatory (whole claim);
T2 = discloses the novel aspect; T3 = trivial/conventional features.

## Best candidates for the characterizing feature (common part across two formats)
| Tier | Reference | Date | Notes |
|---|---|---|---|
| T2 (→T1 lead) | **Choi, S. & del Prado Pavón, J. — "802.11g CP: A Solution for IEEE 802.11g and 802.11b Inter-Working," IEEE VTC-Spring 2003** | Apr 2003 | Proposes a **Common Part ("CP")** both 802.11g & legacy 802.11b stations decode, using duration/NAV over the upcoming exchange. Maps elements 3–6. del Prado Pavón is a **Philips** author (patentee's own group). Pull full PDF to test full-claim read. |
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
No single verified reference yet anticipates ALL of claim 1 (esp. element 2,
distributed control, combined with the cross-format common part). Strongest
combination: **802.11g-CP (common part / two formats)** + **ADHOC MAC or USAP
(distributed control + upcoming transmissions)**. Most promising T1 lead:
the **802.11g-CP paper** and related del Prado Pavón / Philips publications —
retrieve full texts to test a single-reference read on every element.

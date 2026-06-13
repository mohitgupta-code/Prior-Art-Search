# Search history log — EP1762020B1, claim 1

- **Subject patent:** EP1762020B1 — "Distributed resource reservation in a
  wireless ad hoc network" (Philips; inventor J. Habetha)
- **Cut-off date:** 2004-06-16 (priority). Prior art must be *published* before this.
- **Run:** live, public sources (Google Patents + Google Scholar via browser) + citation mining.

## Claim 1 — element breakdown
1. Communication method in a wireless system with a first station (STA1) and ≥1 second station (STA2/STA3).
2. Each station, for at least part of the time, controls communication (distributed control).
3. First station transmits a *first format / first mode* (≥1 channel) **or** a *second format / second mode* (one channel).
4. [characterizing] the first and second formats have a **common part**.
5. The second station decodes at least the common part in *either* mode.
6. The common part carries **information on upcoming transmission(s)** of the first station.

**Novel aspect:** a single cross-format common part, decodable regardless of mode, announcing the first station's upcoming/reserved transmissions.

## Queries run
| # | Source | Query | Method | Outcome |
|---|---|---|---|---|
| 1 | Google Patents | (distributed reservation wireless ad hoc common part upcoming transmission) before:priority:20040616 | live browser, DOM read | ~3,163 hits; top 30 reviewed |
| 2 | Google Patents | (beacon reservation announce upcoming transmission ad hoc distributed medium access) | live browser | rate-limited (429) |
| 3 | Google Patents | EP1762020B1 record + 36 backward citations + earliest-pub verification | live fetch | candidate set |
| 4 | Google Scholar | ad hoc WLAN distributed reservation beacon announce upcoming transmission (≤2004) | live browser | ADHOC MAC/RR-ALOHA, Sheu, Chen |
| 5 | Google Scholar | IEEE 802.11 mixed mode legacy preamble duration protection different rate NAV (≤2004) | live browser | **802.11g-CP (Choi & del Prado Pavón)**, Intel HT-WLAN |
| 6 | Google Scholar | "del Prado Pavon" 802.11 wireless (≤2004) | live browser | author works (mostly 802.11e QoS) |
| 7 | Google Scholar | MBOA/WiMedia DRP superframe (≤2004) | live browser | none pre-cutoff (DRP postdates) |
| 8 | Google Patents | (autonomous distributed beacon reservation two modes…) before:priority:20040616 | live browser | rate-limited |

## Notes / lessons
- Google Patents rate-limits automated sessions quickly → pace requests, rotate sources, back off.
- That SPA renders blank to screenshots → read via DOM/accessibility tree, not screenshots.
- Google Scholar is server-rendered and reliable via page-text extraction.

## Deeper dig (examiner-grade sources)
- **Patentscope (WO2005125047)** — accessible. Confirmed priority 16.06.2004.
  CPC fingerprint of the invention (use these for classification search):
  - H04L69/08 — protocols for interworking / protocol conversion
  - H04L69/22 — header parsing or analysis
  - H04L27/0012 — arrangements for identifying the type of modulation
  - H04L1/0025 — transmission of mode-switching indication
  - H04L5/1438 — negotiation of transmission parameters prior to communication
  - H04W84/18 — self-organising / ad-hoc networks
  - H04W28/26 — resource reservation
- **EPO Register & Espacenet** — behind bot-verification; not scraped (do not bypass bot detection).
- **Patentscope Documents tab (ISR)** — did not render via automation; the
  International Search Report (X/Y citations) still needs manual retrieval.

## Key professional conclusion
EP1762020B1 was **granted with the "common part" characterizing feature intact**.
That strongly implies the examiner found **no single anticipatory (X) reference**
disclosing that feature — otherwise claim 1 would not have granted as is.
Therefore an explicit Tier-1 is unlikely to exist within the examiner's own cited
art; a clean T1 most likely requires **new prior art not before the examiner**
that discloses ALL of: distributed control + two formats/modes + a shared common
part decodable in either mode + carrying upcoming-transmission info.

On evidence gathered, the strongest realistic position is an **obviousness
combination**; the closest single-reference lead remains the **IEEE 802.11g draft
(nonERP RTS/CTS + CCK-OFDM hybrid)**.

## Concrete next steps to settle the T1 question
1. Retrieve the **WO2005125047 International Search Report** (lists the examiner's
   X/Y references) — easiest if Mohit opens the ISR PDF, as with the paper.
2. **Classification search** in H04W84/18 × (H04L27/0012 OR H04L1/0025 OR
   H04L69/08), capped at 2004-06-16 — examiner-style; needs an un-rate-limited
   patent search (API/seat) or Espacenet access.
3. Fully **chart the IEEE 802.11g draft (D3.0, July 2002)** against claim 1.

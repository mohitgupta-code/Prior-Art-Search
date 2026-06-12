# Prior-Art-Search Automation

An augmented pipeline that automates the invalidity / validity prior-art search
workflow used by a senior research analyst at GreyB. The system is **modular**:
a set of specialist agents coordinated by an orchestrator, with a human analyst
acting as the approval gate at every "Update" milestone.

> **Operating account:** all tool-facing actions (email, file storage, search
> connectors) run under **mohit.gupta@greyb.com**. See `config/config.yaml`.

## Design principle

This is **not** a fully autonomous system. For invalidity / validity work the
deliverable carries legal weight and is signed off in the analyst's name.
Agents do the heavy lifting; the analyst reviews and approves before anything
is finalised or sent. Nothing is emailed or marked final automatically.

## The pipeline

```
Project arrives (email trail)
  └─ Intake & Triage      → project brief                [GATE: approve brief]
  └─ Patent Understanding → claims, file history,
                            complaint, priority/cut-off
  └─ Prior Art Search     → query strategies, retrieval  [GATE: approve strategy]
  └─ Shortlist & Tier     → T1 / T2 classification
  └─ Claim Charting       → claim matrix + T1 claim chart
  └─ Report Builder       → Word Update documents
  └─ Comms                → draft update email           [GATE: approve Update + email]
```

The four Updates map onto these stages exactly:

| Update      | Contents                                                                                 |
|-------------|-------------------------------------------------------------------------------------------|
| First       | Subject-patent understanding + file history + complaint analysis + priority/cut-off + initial art |
| Second      | New prior-art results + detailed shortlist + T1/T2 claim matrix                            |
| Pre-final   | Full bibliography + all T1/T2 claim matrix + executive summary + detailed search history   |
| Final       | Pre-final content + Tier 1 claim chart                                                     |

## Human approval gates

Project brief · cut-off date · search strategy · each of the four Updates (with its email).

**Client-input rule:** if any stage needs input from the client, the orchestrator
stops, drafts the question, and surfaces it to the analyst first. It is never
sent to the client without the analyst's approval.

## Repository layout

```
agents/      Prompt files for each specialist agent + the orchestrator
templates/   Word templates for the four Updates (+ generator scripts)
config/      Operating account, source list, tiering definitions
docs/        Architecture & implementation plan (design reference)
samples/     Example project skeleton
```

## Status

Phase 1 scaffold. See `docs/` for the full architecture and phased rollout.

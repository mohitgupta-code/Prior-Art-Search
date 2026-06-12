# Agents

Each file is the system prompt for one specialist agent. They are designed to
run under an orchestrator (`00-orchestrator.md`) but can also be invoked
individually. Every agent operates under the account in `../config/config.yaml`
(mohit.gupta@greyb.com) and respects the draft-and-approve autonomy mode.

Order of execution:

1. `01-intake-triage.md`
2. `02-understanding.md`
3. `03-search.md`
4. `04-shortlist-tier.md`
5. `05-claim-charting.md`
6. `06-report-builder.md`
7. `07-comms.md`

`00-orchestrator.md` sequences them and enforces the approval gates.

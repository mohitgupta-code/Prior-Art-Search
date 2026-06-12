# Prior-art source list

Searches run across a hybrid layer. How each source is reached differs.

## API-automatable (agents query directly)
- Google Patents (incl. BigQuery public datasets)
- Lens.org
- EPO Open Patent Services (OPS)
- USPTO (PatentsView / PEDS / Patent Public Search APIs)

## Browser-driven (logged-in session, best effort)
- PatBase
- Orbit (Questel)
- Derwent Innovation
- Espacenet

## Manual paste-in (fallback)
- Any commercial tool where automation is brittle: the agent prepares the
  query set; the analyst runs it and pastes exported results back.

## Logging requirement
Every query, source, date, and result count is logged for a reproducible,
defensible search history (see agents/03-search.md).

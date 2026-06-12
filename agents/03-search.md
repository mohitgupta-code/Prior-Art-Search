# Agent: Prior Art Search

## Role
Generate search strategies, run them across the hybrid source layer, and return
de-duplicated, retrieved references with a full search-history log.

## Inputs
- Understanding memo (claim elements, key features, cut-off date)
- Source list (../config/sources.md)

## Strategy generation
Build multiple complementary strategies:
- Keyword / text queries (claim-derived terms + synonyms)
- Classification (CPC / IPC) searches
- Assignee / competitor searches
- Inventor searches
- Citation mining (forward and backward) from the subject patent and from
  promising hits

## Execution
- **API sources** (Google Patents, Lens, EPO OPS, USPTO/PatentsView): run
  queries directly.
- **Browser-driven** (PatBase, Orbit, Derwent, Espacenet): drive the logged-in
  session; on failure, fall back to manual paste-in.
- De-duplicate across sources by publication number / family.
- Filter by the established cut-off date (flag, do not silently drop).

## Output
- Retrieved reference set (pub number, title, assignee, date, family, source)
- **Search-history log**: every query string, source, date run, and result
  count — appended cumulatively across all search rounds for a reproducible,
  defensible history.

## Gate
The proposed search strategy is approved by the analyst before the detailed
search round.

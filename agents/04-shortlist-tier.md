# Agent: Shortlist & Tier

## Role
Score retrieved references for relevance and assign tiers.

## Inputs
- Retrieved reference set (from search)
- Understanding memo (claim elements)
- Tiering definitions (../config/tiering.md)

## Tasks
1. For each candidate, map disclosure to specific claim elements.
2. Score relevance against the mapped elements.
3. Assign **Tier 1** (anticipatory candidate) or **Tier 2** (strong combination
   / key-feature relevance) per the tiering definitions. Everything else stays
   in the search history but is not shortlisted.
4. Record the rationale for each tier assignment.

## Output: claim matrix (T1 / T2)
A matrix: rows = shortlisted references, columns = claim elements, cells =
whether/where the element is disclosed (with a pointer to the passage).
Plus a short rationale per reference for its tier.

## Note
Tier assignment is a judgement call. Surface borderline calls to the analyst
rather than guessing.

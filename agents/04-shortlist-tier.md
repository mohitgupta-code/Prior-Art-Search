# Agent: Shortlist & Tier

## Role
Score retrieved references for relevance and assign tiers.

## Inputs
- Retrieved reference set (from search)
- Understanding memo (claim elements; which elements are the novel aspect)
- Tiering definitions (../config/tiering.md)

## Tasks
1. For each candidate, map disclosure to specific claim elements.
2. Identify whether it reaches the claim's **novel aspect**, the **whole claim**,
   or only **trivial/conventional features**.
3. Assign a tier per ../config/tiering.md:
   - **Tier 1** — completely overlaps / invalidates the claim (anticipatory).
   - **Tier 2** — discloses the novel aspect(s) of the claim.
   - **Tier 3** — discloses only trivial / conventional features.
4. Record the rationale for each assignment. Surface borderline T1/T2 calls to
   the analyst rather than guessing.

## Output: claim matrix (Tier 1 & Tier 2)
A matrix: rows = T1/T2 references, columns = claim elements, cells = whether/
where the element is disclosed (with a pointer to the passage), plus a short
tier rationale per reference.

Tier 3 references are listed in the search history / bibliography but are not
charted in the matrix (unless the analyst requests otherwise).

# Project memory

## Product intent & audience

- **AquaGuia** is an aquaculture/fish farming guide app.
- Core topics: piscicultura (fish farming), with emphasis on **tambaqui**.
- Library curated to include only **real, verified documents** from Embrapa and Ministério da Pesca e Aquicultura.

## Brand personality & voice

- Communication in **Portuguese**.
- Tone: informative, practical, trustworthy — suited to fish farmers and aquaculture practitioners.

## Visual design & UX direction

- Library component uses filters by institution and category/type.
- Interface depends on specific exports (types, categories) from the library data file — any rewrite must preserve those exports.

## Decisions, constraints & rationale

- **Only verified documents allowed.** If a publication cannot be verified (link opened and confirmed), it must not be added.
- Do not invent documents or links.
- Removed unverified materials and non-Embrapa/MPA sources (Epagri, MAPA, SciELO references in library).
- Library currently holds **5 verified Embrapa materials**:
  - Livro do tambaqui no Amazonas
  - Levantamento de pesca e aquicultura
  - Artigo do pirarucu
  - Manual de piscicultura familiar
  - Manual de pescado
- Years, authors, and institutions corrected to match actual source pages.
- Institution filter updated to reflect remaining sources (Embrapa only).
- **Dica do dia** selects tip by date (same tip all day), using 8 technical aquaculture tips (oxygen, ammonia, water transparency, feed, local storage). Date-based selection — no database persistence needed.
- App should support **offline operation** (local storage).
- Verification tool hit session limit — could not check all links or search for new materials.
- Type-checking not possible: project dependencies not installed in current environment.

## Open questions & assumptions

- **About/Sobre page** still cites SciELO, Epagri, and the Ministério — user has not yet decided whether to update it.
- **Species data files** still reference Epagri elsewhere — pending user decision on whether to clean those up.
- Only **1 tambaqui-specific material** remains; tambaqui priority feels underrepresented — new verification session needed to find more.
- Rebuilt library file without comparing to previous version — may have lost content beyond what user requested; worth a full review.
- Verification tool blocked at session limit; needs a new session to continue link checks and document discovery.
- Dica do dia was not visually tested in browser — verification done by code reading only.
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
- Library currently holds **5 verified Embrapa materials**.
- **Dica do dia** selects tip by date (same tip all day), using 8 technical aquaculture tips. No database persistence needed.
- App should support **offline operation** (local storage).
- **Análise de viveiro:** must use the species actually selected by the user throughout the result summary — no defaulting to tambaqui for other species.
- Sources shown in analysis must correspond to the species being analyzed, drawn from verified library materials for that species.
- If no verified source exists for a species, the UI must clearly inform the user.
- If a species has no registered ideal ranges, the UI must warn the user.
- Switching species in analysis clears previously entered values (prevents mixing measurements from different species).
- Old per-species citations (not verifiable) were removed from the analysis screen.
- Build passes after analysis corrections.
- Verification tool hit session limit — could not check all links or search for new materials.
- Type-checking not possible: project dependencies not installed in current environment.

## Open questions & assumptions

- **About/Sobre page** still cites SciELO, Epagri, and the Ministério — user has not yet decided whether to update it.
- **Species data files** still reference Epagri elsewhere — pending user decision on whether to clean those up.
- Only **1 tambaqui-specific material** remains; tambaqui priority feels underrepresented — new verification session needed to find more.
- Rebuilt library file without comparing to previous version — may have lost content beyond what user requested; worth a full review.
- Verification tool blocked at session limit; needs a new session to continue link checks and document discovery.
- Analysis screen corrections not visually tested in browser — verification done by code reading only.
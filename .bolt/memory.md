# Project memory

## Product intent & audience

- **AquaGuia** is an aquaculture/fish farming guide app.
- Core topics: piscicultura, with emphasis on **tambaqui**.
- Library curated to include only real, verified documents from Embrapa and Ministério da Pesca e Aquicultura.
- Audience: fish farmers and aquaculture practitioners seeking practical technical guidance.

## Brand personality & voice

- Communication is in **Portuguese**.
- Tone is informative, practical, and trustworthy.

## Visual design & UX direction

- Species selector and related views use locally stored species photos rather than remote image URLs.
- Each of the 24 registered species is linked to its corresponding replacement image.
- Library supports filtering by institution and category/type.
- Preserve the library data file’s exported types and categories when modifying the library.
- Analysis UI should make the selected species clear throughout the workflow and result summary.
- The species selector in “Analisar meu viveiro” still displays the text **“categoria”**, which should be removed or corrected in a follow-up change.

## Decisions, constraints & rationale

- Only verified documents may be added to the library. Unverified links or invented documents must not be used.
- Non-Embrapa/Ministério da Pesca e Aquicultura materials previously removed from the library include Epagri, MAPA, and SciELO references.
- The library currently contains 5 verified Embrapa materials.
- “Dica do dia” selects one of 8 technical aquaculture tips based on the date, keeping the same tip all day; no database persistence is required.
- The app should support offline operation through local storage.
- Species analysis must use the species selected by the user, without defaulting other species to tambaqui.
- Analysis sources must match the species being analyzed and come from verified library materials for that species.
- If no verified source or ideal range exists for a selected species, the UI must clearly communicate that limitation.
- Changing species clears previously entered measurements to prevent mixing data between species.
- Unverifiable per-species citations were removed from the analysis screen.
- The 24 replacement species images from the provided archive are stored in the project and wired through `src/data/species.ts`; the previous Pexels URLs are no longer used for those species.
- A backup copy of the image archive exists in a separate project folder.
- The project build passed after the image replacement and species-photo mapping changes.
- Type-checking has not been confirmed because dependencies were unavailable in an earlier environment.
- The image replacement did not intentionally change other app features.

## Open questions & assumptions

- The **About/Sobre** page still cites SciELO, Epagri, and the Ministério; decide whether those references should be updated.
- Species data files still reference Epagri elsewhere; decide whether to clean them up.
- Only one tambaqui-specific verified material remains, so tambaqui coverage may be underrepresented.
- The rebuilt library file was not compared fully with its previous version; review for unintentionally lost content.
- Verification of additional links and document discovery was blocked by a tool session limit and requires a new session.
- Analysis corrections have not been visually tested in a browser; validation was based on code reading.
- The remaining “categoria” label in the species selector needs a follow-up correction.
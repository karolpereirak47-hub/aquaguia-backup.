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
- The pond calculator now offers format selection for **retangular, circular, or irregular** ponds.
- Calculator fields adapt to the selected format: length/width for rectangular, diameter for circular, and manually entered area for irregular ponds.
- Calculator results show area in m² and volume in m³ and liters, with the applied formula displayed.
- Existing pond calculator functionality and unrelated tabs, including feed, biomass, and density, should remain unchanged.
- The species selector in “Analisar meu viveiro” may still need visual/text review; the previously reported “categoria” issue was not reproduced in the latest code inspection.

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
- Pond geometry calculations were separated into a dedicated formulas module and integrated into the calculator.
- Build passed after the pond calculator changes and after reverting an unintended class change in the feed-tab selector.
- Type-checking has not been confirmed because dependencies were unavailable in an earlier environment.
- The image replacement and pond calculator work did not intentionally change other app features.

## Open questions & assumptions

- The **About/Sobre** page still cites SciELO, Epagri, and the Ministério; decide whether those references should be updated.
- Species data files still reference Epagri elsewhere; decide whether to clean them up.
- Only one tambaqui-specific verified material remains, so tambaqui coverage may be underrepresented.
- The rebuilt library file was not compared fully with its previous version; review for unintentionally lost content.
- Verification of additional links and document discovery was blocked by a tool session limit and requires a new session.
- Analysis corrections have not been visually tested in a browser; validation was based on code reading.
- The reported “categoria” text and selector contrast issue could not be located without a reproducible screenshot or precise location.
- Cards for Jundiá and Matrinxã reportedly show category badges; whether those badges should be replaced with only the species name remains unresolved.
- Two ZIP copies of the species-photo archive may still be present in the project’s image folder; removal has not been confirmed.
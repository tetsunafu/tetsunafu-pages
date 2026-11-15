/** Example: load country records from the same GitHub Pages site. */
export async function loadCountryData() {
  const response = await fetch(new URL("./data/countries.json", import.meta.url));
  if (!response.ok) throw new Error(`Country data request failed: ${response.status}`);
  const dataset = await response.json();
  if (!Array.isArray(dataset.records)) throw new Error("Unexpected countries.json format");
  return dataset;
}

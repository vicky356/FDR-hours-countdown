// import aircraft class so we can make new aircraft objects
import Aircraft from "./Aircraft.js";

// Legacy and 145 aircrafts first
const legacy600 = new Aircraft(
  "5N-BTX",
  1052
);

const emb145 = new Aircraft(
  "5N-BYX",
  890
);

// Create for phenom 300 objects

// Make an array for the legacy/emb145
const legacy_145_array = [legacy600, emb145];

// Export the array to be used in other files
export default legacy_145_array;

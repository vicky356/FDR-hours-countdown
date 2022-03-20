// import our Array from data
import Aircraft from "./Aircraft.js";
import legacy_145_array from "./data.js";

/* Function to calculate nextdue date/Hours
if phenom aircraft calculate next due using date else calculate next due using Hours */
const nextDue = (inputedData) => {
  let nextDueEstimate;
  let frequencyHours = 20;
  let frequencyDays = 14;

  if (inputedData === "5N-BTX" || inputedData === "5N-BYX") {
    nextDueEstimate = inputedData + frequencyHours;
  } else {
    nextDueEstimate = inputedData + frequencyDays;
  }
  return nextDueEstimate;
};

// Function to update cell
const cellUpdate = ()=> {
  let cell = document.querySelector("span");
  let insertedData = document.querySelector("downloadHour").value;
  cell.innerHTML = nextDue(insertedData);
}

// We want to populate new aircraft details in our #Wrapper ID with a new Article
const newAircraft = legacy_145_array.map((additional_aircraft) => {
  let aircraftArticle = document.createElement("article");
  aircraftArticle.classList.add("additional_aircraft");
  aircraftArticle.setAttribute("id", additional_aircraft.registration);

  aircraftArticle.innerHTML = `
    <tr>
      <th>Aircraft Reg</th>
      <th>Aircraft SN</th>
      <th>Download Date</th>
      <th>Download Hours</th>
      <th>Next Due Hours</th>
    </tr>
    <tr>
      <td>${additional_aircraft.registration}</td>
      <td>${additional_aircraft.serialNo}</td>
      <td>
        <input type="date" id="downloadDate">
      </td>
      <td>
        <input type="number" id="downloadHour" placeholder="e.g 1234.58">
      </td>
      <td>
      <span> Flight hours</span>
      </td>
    </tr>
    `;
    return aircraftArticle;
});
// To add the above items to our html file we append below
const main_article = document.querySelector("div");

newAircraft.forEach((additional_aircraft) => {
  main_article.append(additional_aircraft);
});

// Update button element, we'll add an event listener to the button
const update_button = document.createElement("button");
update_button.innerHTML = `<button type="submit" onclick= "cellUpdate()">Update</button>`

main_article.append(update_button)

// Function for Hours calculation, every 20FH download
const hoursDue = (fh) => {
  let frequency = 20.0;
  let flightHours = parseFloat(frequency) + parseFloat(fh);
  return flightHours;
}

// Function for next due Date, 14 days frequency
const dateDue = (downloadDate) => {
  let nextDue = new Date(downloadDate);
  nextDue.setDate(nextDue.getDate() + 14);
  return nextDue;
}

//Number of days Left
const daysLeft = (downloadDate, nextDue) => {
  let todaysDate = new Date();
  let dDate = new Date(downloadDate);
  let nxtDate = new Date(nextDue);
  let diffTime = Math.abs(nextDue - todaysDate);
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (downloadDate === todaysDate) {
    remainingDays = 14;
  } else {
    remainingDays = diffDays;
  }
  return remainingDays;
}

/* Function to calculate nextdue date/Hours
if phenom aircraft calculate next due using date else calculate next due using Hours */
const nextDue = () => {
  let nextDueEstimate;
  let btxD = document.getElementById('btx_date').value;
  let btxFh = document.getElementById('btx_hours').value;
  let byxD = document.getElementById('byx_date').value;
  let byxFh = document.getElementById('byx_hours').value;
  let bvfD = document.getElementById('bvf_date').value;
  let bvgD = document.getElementById('bvg_date').value;

// Prompts us if these inputs are missing
  if(!btxD || !btxFh || !byxD || !byxFh || !bvfD || !bvgD) {
    alert("Please fill all boxes");
    return;
  }

  let btx_hours = hoursDue(btxFh);
  let byx_hours = hoursDue(byxFh);
  let bvf_date = dateDue(bvfD);
  let bvg_date = dateDue(bvgD);
  let bvf_days_left = daysLeft(bvfD, bvf_date);
  let bvg_days_left = daysLeft(bvgD, bvg_date);

  console.log("BTX next due hours are:", btx_hours);
  console.log("BYX next due hours are:", byx_hours);
  console.log("BVF next due date is:", bvf_date.toUTCString());
  console.log("BVG next due date is:", bvg_date.toDateString());
  console.log("BVF days left: ", bvf_days_left);
  console.log("BVG days left: ", bvg_days_left);

  // btx on row2 cell 4, byx row3 cell 4
  var btxCell = document.getElementById("legacy_145_table");
  btxCell.rows[1].cells[4].innerHTML = btx_hours;

  var byxCell = document.getElementById("legacy_145_table");
  byxCell.rows[2].cells[4].innerHTML = byx_hours;

  var bvfCell = document.getElementById("phenom_table");
  bvfCell.rows[1].cells[2].innerHTML = bvf_date.toDateString();

  var bvfLeft = document.getElementById("phenom_table");
  bvfLeft.rows[1].cells[3].innerHTML = bvf_days_left;

  var bvgCell = document.getElementById("phenom_table");
  bvgCell.rows[2].cells[2].innerHTML = bvg_date.toDateString();

  var bvgLeft = document.getElementById("phenom_table");
  bvgLeft.rows[2].cells[3].innerHTML = bvg_days_left;
};

// Add event Listener to our update update_button
var updateButton = document.getElementById("legacy_button");
updateButton.addEventListener("click", nextDue);

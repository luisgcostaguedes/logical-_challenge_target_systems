function loadJson() {
  fetch("dados.json")
    .then((response) => response.json())
    .then((data) => {
      processRevenue(data);
    })
    .catch((error) => {
      console.error("Error loading the JSON file:", error);
    });
}

function processRevenue(data) {
  const filteredData = data.filter((day) => day.valor > 0);

  const minValue = Math.min(...filteredData.map((day) => day.valor));
  const maxValue = Math.max(...filteredData.map((day) => day.valor));

  const totalSum = filteredData.reduce((acc, day) => acc + day.valor, 0);
  const averageValue = totalSum / filteredData.length;

  const daysAboveAverage = filteredData.filter(
    (day) => day.valor > averageValue
  ).length;

  document.getElementById("result").innerHTML = `
    Lowest revenue: ${minValue}<br>
    Highest revenue: ${maxValue}<br>
    Days with revenue above average: ${daysAboveAverage}
  `;
}

loadJson();

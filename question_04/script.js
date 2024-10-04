const revenue = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Others: 19849.53
};

const totalRevenue = Object.values(revenue).reduce((acc, value) => acc + value, 0);

let result = '';
for (const state in revenue) {
  const percentage = (revenue[state] / totalRevenue) * 100;
  result += `${state}: ${percentage.toFixed(2)}%<br>`;
}

document.getElementById('result').innerHTML = result;

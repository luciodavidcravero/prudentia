const data = [25, 30, 45, 60, 20, 65, 75];

const width = 400;
const height = 300;
const barWidth = width / data.length;

const svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg.selectAll("rect")
  .data(data)
  .enter()
  .append("rect")
  .attr("y", d => height - d * 3)
  .attr("height", d => d * 3)
  .attr("width", barWidth - 5)
  .attr("transform", (d, i) => `translate(${i * barWidth}, 0)`)
  .attr("fill", "#457b9d");

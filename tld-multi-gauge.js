function createGauge(containerSelector, value) {
const backgroundColor = "#1a2d52";
const barColor = "#334465";
const textColor = "#ffffff";

const container = d3.select('containerSelector');
const width = container.node().getBoundingClientRect().width;
const height = width;
const radius = Math.min(width, height) / 2;
const fontSize = radius * 0.3;

const angleScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, Math.PI * 2]);

const backgroundArc = d3.arc()
  .innerRadius(radius * 0.7)
  .outerRadius(radius * 0.9)
  .startAngle(0)
  .cornerRadius(radius * 0.1)
  .endAngle(angleScale(100));

const svg = container.append('svg')
  .attr('width', width)
  .attr('height', height);

svg.append('path')
  .attr('d', backgroundArc)
  .attr('fill', backgroundColor)
  .attr('transform', `translate(${width/2}, ${height/2})`);

const arc = d3.arc()
  .innerRadius(radius * 0.7)
  .outerRadius(radius * 0.9)
  .startAngle(0)
  .cornerRadius(radius * 0.1);

const bar = svg.append('path')
  .datum({endAngle: 0})
  .attr('fill', barColor)
  .attr('transform', `translate(${width/2}, ${height/2})`);

const text = svg.append('text')
  .attr('text-anchor', 'middle')
  .attr('dy', '0.35em')
  .attr('fill', textColor)
  .style('font-size', fontSize + 'px')
  .attr('transform', `translate(${width/2}, ${height/2})`);

let isAnimated = false;

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !isAnimated) {
      drawGaugeAnimated(value);
      isAnimated = true;
    } else if (!entry.isIntersecting) {
      isAnimated = false;
    }
  });
}, options);

observer.observe(container.node());

const drawGaugeAnimated = (value) => {
  const interpolate = d3.interpolate(0, angleScale(value));
  bar.transition()
    .duration(1500)
    .attrTween('d', d => {
      return t => {
        d.endAngle = interpolate(t);
        return arc(d);
      };
    });

  text.transition()
    .duration(1500)
    .tween('text', () => {
      const interpolate = d3.interpolate(0, value);
      return t => {
        text.text(Math.round(interpolate(t)) + '%');
      };
    });
};
}

createGauge('#gauge-container-1', 96);
createGauge('#gauge-container-2', 85);
createGauge('#gauge-container-3', 100);
createGauge('#gauge-container-4', 100);

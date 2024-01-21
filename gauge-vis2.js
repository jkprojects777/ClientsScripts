function drawGauge(containerSelector, value, isYear = false) {
  const backgroundColor = "#ffffff";
  const textColor = "#e30e5d";

  const container = d3.select(containerSelector);
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

  const colorScale = d3.scaleLinear()
    .domain([0, 1])
    .range(['#e30e5d', 'rgba(255, 255, 255, 0.1)']);

  const gradient = svg.append("defs")
    .append("linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%");

  const gradientStops = colorScale.range().map((color, index) => ({
    offset: index / (colorScale.range().length - 1),
    color: color
  }));

  gradient.selectAll("stop")
    .data(gradientStops)
    .enter().append("stop")
    .attr("offset", d => `${d.offset * 100}%`)
    .attr("stop-color", d => d.color);

  const bar = svg.append('path')
  .datum({endAngle: 0})
  .attr('fill', '#e30e5d') // Changez la couleur ici
  .attr('transform', `translate(${width/2}, ${height/2})`);

  const textGradient = svg.append("defs")
    .append("linearGradient")
    .attr("id", "textGradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%");

  textGradient.selectAll("stop")
    .data(gradientStops)
    .enter().append("stop")
    .attr("offset", d => `${d.offset * 100}%`)
    .attr("stop-color", d => d.color);

  const text = svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '0.35em')
    .attr('fill', textColor)
    .style('font-size', fontSize + 'px')
    .attr('transform', 'translate(' + width/2 + ',' + height/2 + ')');

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
          text.text(isYear ? '2 ans' : Math.round(interpolate(t)) + '%'); // Changez le texte ici
        };
      });
  };
};

setTimeout(function() {
  drawGauge('#gauge-container-1', 80);
  drawGauge('#gauge-container-2', 100, true); // Changez la valeur ici
}, 0);

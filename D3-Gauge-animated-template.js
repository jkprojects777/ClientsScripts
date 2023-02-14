// Définition des couleurs
const backgroundColor = "#1a2d52";
const barColor = "#334465";
const textColor = "#ffffff";

// Sélection de l'élément conteneur de la jauge et définition des options de responsivité
const container = d3.select('#gauge-container');
const width = container.node().getBoundingClientRect().width;
const height = width;
const radius = Math.min(width, height) / 2;
const fontSize = radius * 0.3;

// Définition de l'échelle des angles
const angleScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, Math.PI * 2]);

// Création de l'arc de fond de la jauge
const backgroundArc = d3.arc()
  .innerRadius(radius * 0.7)
  .outerRadius(radius * 0.9)
  .startAngle(0)
  .cornerRadius(radius * 0.1)
  .endAngle(angleScale(100));

// Création de l'élément SVG et ajout de l'arc de fond
const svg = container.append('svg')
  .attr('width', width)
  .attr('height', height);

svg.append('path')
  .attr('d', backgroundArc)
  .attr('fill', backgroundColor)
  .attr('transform', `translate(${width/2}, ${height/2})`);

// Création de l'arc de la jauge
const arc = d3.arc()
  .innerRadius(radius * 0.7)
  .outerRadius(radius * 0.9)
  .startAngle(0)
  .cornerRadius(radius * 0.1);

// Création de l'élément représentant la jauge
const bar = svg.append('path')
  .datum({endAngle: 0})
  .attr('fill', barColor)
  .attr('transform', `translate(${width/2}, ${height/2})`);

// Création de l'élément texte affichant la valeur de la jauge
const text = svg.append('text')
  .attr('text-anchor', 'middle')
  .attr('dy', '0.35em')
  .attr('fill', textColor)
  .style('font-size', fontSize + 'px')
  .attr('transform', `translate(${width/2}, ${height/2})`);

// Initialisation de la variable indiquant si l'animation de la jauge est en cours
let isAnimated = false;

// Options de l'observeur d'intersection
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

// Création de l'observeur d'intersection
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !isAnimated) {
      drawGaugeAnimated(50);
      isAnimated = true;
    } else if (!entry.isIntersecting) {
      isAnimated = false;
    }
  });
}, options);

// Observation de l'élément conteneur de la jauge
observer.observe(container.node());

// Fonction pour dessiner la jauge animée
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


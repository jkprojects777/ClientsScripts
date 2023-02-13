const backgroundColor = "#1a2d52"; // Couleur de fond de la jauge
const barColor = "#334465"; // Couleur des barres de la jauge
const textColor = "#ffffff"; // Couleur du texte central

// Sélectionne le conteneur
const container = d3.select('#gauge-container');

// Définit les dimensions de la jauge
const width = container.node().getBoundingClientRect().width;
const height = width;
const radius = Math.min(width, height) / 2;

// Définit l'angle de la jauge
const angleScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, Math.PI * 2]);

const drawGaugeAnimated = (value) => {
  // Crée le canevas SVG
  const svg = container.append('svg')
    .attr('width', width)
    .attr('height', height);

  // Crée l'arc qui représente la jauge de fond
  const backgroundArc = d3.arc()
    .innerRadius(radius * 0.7)
    .outerRadius(radius * 0.9)
    .startAngle(0)
    .cornerRadius(radius * 0.1)
    .endAngle(angleScale(100));

  // Dessine la barre de fond
  svg.append('path')
    .attr('d', backgroundArc)
    .attr('fill', backgroundColor)
    .attr('transform', `translate(${width/2}, ${height/2})`);

  // Crée l'arc qui représente la jauge de valeur
  const arc = d3.arc()
    .innerRadius(radius * 0.7)
    .outerRadius(radius * 0.9)
    .startAngle(0)
    .cornerRadius(radius * 0.1);

  // Dessine la barre de valeur avec une animation
  const bar = svg.append('path')
    .datum({endAngle: 0})
    .attr('fill', barColor)
    .attr('transform', `translate(${width/2}, ${height/2})`)
    .transition()
    .duration(1500) // Durée de l'animation
    .attrTween('d', (d) => {
      const interpolate = d3.interpolate(d.endAngle, angleScale(value));
      return (t) => {
        d.endAngle = interpolate(t);
        return arc(d);
      };
    });

  // Calcule la taille du texte en fonction de la moitié du rayon de la jauge
  const fontSize = radius * 0.3;

  // Ajoute du texte pour afficher la valeur de la jauge avec un symbole de pourcentage et une taille de police personnalisée
  const text = svg.append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '0.35em')
    .attr('fill', textColor)
    .style('font-size', fontSize + 'px') // Définit la taille de police personnalisée
    .text(value + '%')
    .attr('transform', `translate(${width/2}, ${height/2})`);
};

// Utilisez la fonction IntersectionObserver pour déclencher l'animation lorsque l'élément est visible
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      drawGaugeAnimated(50); // Mettez la valeur que vous souhaitez ici
      observer.unobserve(entry.target);
      observer.observe(entry.target); // Réactive l'observer pour que l'animation recommence
    }
  });
}, options);

observer.observe(container.node());

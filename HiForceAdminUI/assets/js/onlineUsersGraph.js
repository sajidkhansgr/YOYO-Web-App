var ctx1 = document.getElementById('onlineUsersGraph').getContext('2d');

// for the Number at center
Chart.pluginService.register({
  beforeDraw: function (chart) {
    if (chart.config.options.elements.center) {
      var ctx = chart.chart.ctx;

      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var maxFontSize = centerConfig.maxFontSize || 75;
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated =
        (sidePadding / 100) * (chart.innerRadius * 2);
      ctx.font = '30px ' + fontStyle;

      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = chart.innerRadius * 2;

      var fontSizeToUse = Math.min(
        newFontSize,
        elementHeight,
        maxFontSize
      );
      var minFontSize = centerConfig.minFontSize;
      var lineHeight = centerConfig.lineHeight || 25;
      var wrapText = false;

      if (minFontSize === undefined) {
        minFontSize = 20;
      }

      if (minFontSize && fontSizeToUse < minFontSize) {
        fontSizeToUse = minFontSize;
        wrapText = true;
      }

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
      ctx.font = fontSizeToUse + 'px ' + fontStyle;
      ctx.fillStyle = color;

      if (!wrapText) {
        ctx.fillText(txt, centerX, centerY);
        return;
      }

      var words = txt.split(' ');
      var line = '';
      var lines = [];

      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = ctx.measureText(testLine);
        var testWidth = metrics.width;
        if (testWidth > elementWidth && n > 0) {
          lines.push(line);
          line = words[n] + ' ';
        } else {
          line = testLine;
        }
      }

      centerY -= (lines.length / 2) * lineHeight;

      for (var n = 0; n < lines.length; n++) {
        ctx.fillText(lines[n], centerX, centerY);
        centerY += lineHeight;
      }
      ctx.fillText(line, centerX, centerY);
    }
  },
});

// for rounded corners
Chart.defaults.RoundedDoughnut = Chart.helpers.clone(Chart.defaults.doughnut);
Chart.controllers.RoundedDoughnut = Chart.controllers.doughnut.extend({
  draw: function (ease) {
    var ctx = this.chart.ctx;
    var easingDecimal = ease || 1;
    var arcs = this.getMeta().data;
    Chart.helpers.each(arcs, function (arc, i) {
      arc.transition(easingDecimal).draw();

      var pArc = arcs[i === 0 ? arcs.length - 1 : i - 1];
      var pColor = pArc._view.backgroundColor;

      var vm = arc._view;
      var radius = (vm.outerRadius + vm.innerRadius) / 2;
      var thickness = (vm.outerRadius - vm.innerRadius) / 2.2;
      var startAngle = Math.PI - vm.startAngle - Math.PI / 2;
      var angle = Math.PI - vm.endAngle - Math.PI / 2;

      ctx.save();
      ctx.translate(vm.x, vm.y);

      ctx.fillStyle = i === 0 ? vm.backgroundColor : pColor;
      ctx.beginPath();
      ctx.arc(radius * Math.sin(startAngle), radius * Math.cos(startAngle), thickness, 0, 2 * Math.PI);
      ctx.fill();

      ctx.fillStyle = vm.backgroundColor;
      ctx.beginPath();
      ctx.arc(radius * Math.sin(angle), radius * Math.cos(angle), thickness, 0, 2 * Math.PI);
      ctx.fill();

      ctx.restore();
    });
  }
});

// chart
var myChart = new Chart(ctx1, {
  type: 'RoundedDoughnut',
  data: {
    labels: ['Web', 'iOS', 'Android'],
    datasets: [{
      data: [20, 45, 35],
      backgroundColor: ['#FF965D', '#304EFD', '#FFD140'],
      weight: 1,
      borderWidth: 1,
    }, ],
  },
  options: {
    responsive: true,
    legend: {
      display: true,
      position: 'right',
      labels: {
        usePointStyle: true,
        boxWidth: 6,
        generateLabels: function (chart) {
          var data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map(function (label, i) {
              var meta = chart.getDatasetMeta(0);
              var ds = data.datasets[0];
              var arc = meta.data[i];
              var custom = arc && arc.custom || {};
              var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
              var arcOpts = chart.options.elements.arc;
              var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
              var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

              var value = chart.config.data.datasets[arc._datasetIndex].data[arc._index];

              return {
                text: label + " : " + value + "%",
                fillStyle: fill,
                lineWidth: bw,
              };
            });
          } else {
            return [];
          }
        }
      }
    },
    rotation: 1 * Math.PI,
    cutoutPercentage: 88,
    elements: {
      center: {
        text: '1833',
        color: '#3E434A',
        fontStyle: 'Poppins',
        sidePadding: 40,
        minFontSize: 16,
        lineHeight: 20,
      },
    },
    tooltips: {
      backgroundColor: 'rgba(247, 247, 247, 0.9)',
      titleFontColor: '#3E434A',
      bodyFontColor: 'rgba(80, 80, 80)',
      displayColors: false,
      bodyFontSize: 20,
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.labels[tooltipItem['index']] + ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem['index']] + '%';
          return label;
        }
      }
    }
  },
});
// rounded edges
Chart.elements.Rectangle.prototype.draw = function () {
  var ctx = this._chart.ctx;
  var vm = this._view;
  var left, right, top, bottom, signX, signY, borderSkipped, radius;
  var borderWidth = vm.borderWidth;
  var cornerRadius = 10;

  left = vm.x - vm.width / 2;
  right = vm.x + vm.width / 2;
  top = vm.y;
  bottom = vm.base;
  signX = 1;
  signY = bottom > top ? 1 : -1;
  borderSkipped = vm.borderSkipped || 'bottom';

  if (borderWidth) {
    var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
    borderWidth = borderWidth > barSize ? barSize : borderWidth;
    var halfStroke = borderWidth / 2;
    var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
    var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
    var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
    var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
    if (borderLeft !== borderRight) {
      top = borderTop;
      bottom = borderBottom;
    }
    if (borderTop !== borderBottom) {
      left = borderLeft;
      right = borderRight;
    }
  }

  ctx.beginPath();
  ctx.fillStyle = vm.backgroundColor;
  ctx.strokeStyle = vm.borderColor;
  ctx.lineWidth = borderWidth;
  var corners = [
    [left, bottom],
    [left, top],
    [right, top],
    [right, bottom]
  ];

  var borders = ['bottom', 'left', 'top', 'right'];
  var startCorner = borders.indexOf(borderSkipped, 0);
  if (startCorner === -1) {
    startCorner = 0;
  }

  function cornerAt(index) {
    return corners[(startCorner + index) % 4];
  }

  var corner = cornerAt(0);
  ctx.moveTo(corner[0], corner[1]);

  for (var i = 1; i < 4; i++) {
    corner = cornerAt(i);
    nextCornerId = i + 1;
    if (nextCornerId == 4) {
      nextCornerId = 0
    }

    nextCorner = cornerAt(nextCornerId);

    width = corners[2][0] - corners[1][0];
    height = corners[0][1] - corners[1][1];
    x = corners[1][0];
    y = corners[1][1];

    var radius = cornerRadius;

    if (radius > height / 2) {
      radius = height / 2;
    }
    if (radius > width / 2) {
      radius = width / 2;
    }

    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
  }

  ctx.fill();
  if (borderWidth) {
    ctx.stroke();
  }
};

// chart
var ctx = document.getElementById('appUsageGraph').getContext('2d');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
    ],
    datasets: [{
      barPercentage: 0.5,
      label: 'Visitors',
      fill: true,
      data: [{
          x: '21 July',
          y: 1100
        },
        {
          x: '22 July',
          y: 800
        },
        {
          x: '23 July',
          y: 520
        },
        {
          x: '24 July',
          y: 602
        },
        {
          x: '25 July',
          y: 852
        },
        {
          x: '26 July',
          y: 963
        },
      ],
      backgroundColor: '#304EFD',
    }]
  },
  options: {
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
          drawOnChartArea: false,
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          beginAtZero: true,
        },
      }]
    },
    legend: {
      display: false
    },
    tooltips: {
      backgroundColor: 'rgba(247, 247, 247, 0.9)',
      titleFontColor: '#3E434A',
      bodyFontColor: 'rgba(80, 80, 80)',
      displayColors: false,
      callbacks: {
        title: function (tooltipItem, data) {
          let title = 'Visitors: ' + tooltipItem[0].yLabel
          return title;
        },
        label: function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].data[tooltipItem['index']]['x'];
          return label;
        }
      }
    }
  },
});
var items = [
  { content: "my first widget" },
  { w: 2, content: "another longer widget!" },
  { h: 0, w: 3, content: "another widget!" },
];
var grid = GridStack.init();
grid.load(items);

function addItem() {
  // $("#myModal").modal("show");
  var newItem = { content: "New Widget" };

  var newItem = [
    {
      x: 0,
      y: 0,
      w: 5,
      h: 5,
      content: "hhh",
    },
  ];
  grid.addWidget(
    '<div class="grid-stack-item"><div class="grid-stack-item-content"><div id="radialbar"></div></div></div>',
    { w: 3 }
  );

  if ($(".widgetSelection").val() == "radialbar") {
    radialchart();
  }
}

function radialchart() {
  var optionsRadial = {
    series: [75],
    chart: {
      height: 350,
      type: "radialBar",
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: "#fff",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: "#888",
            fontSize: "17px",
          },
          value: {
            formatter: function (val) {
              return parseInt(val);
            },
            color: "#111",
            fontSize: "36px",
            show: true,
          },
        },
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Percent"],
  };

  var chart = new ApexCharts(
    document.querySelector("#radialbar"),
    optionsRadial
  );
  chart.render();
}

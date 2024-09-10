var dom = document.getElementById("chart-container");
var myChart = echarts.init(dom, null, {
  renderer: "canvas",
  useDirtyRect: false,
});
var app = {};

var option;

const glueLevel = [
  {
    value: 97.5,
  },
];

option = {
  title: {
    show: true,
    fontSize: 80,
    valueAnimation: true,
    offsetCenter: ["0%", "100%"],
    formatter: function (value) {
      return glueLevel.value + " %";
    },
    color: "#000", // Set a specific color for the detail text
  },
  xAxis: {
    show: false,
    data: [glueLevel.value],
  },
  yAxis: {
    show: false,
    yscale: false,
  },
  series: [
    {
      type: "bar",
      z: 2,
      barGap: "-100%",
      data: [glueLevel],
      itemStyle: {
        color: "#888888",
        borderRadius: [0, 0, 20, 20],
      },
      data: glueLevel,
    },
    {
      type: "bar",
      z: 1,
      data: [100],
      itemStyle: {
        color: "#BBBBBB",
        borderRadius: [20, 20, 20, 20],
      },
    },
  ],
};

setInterval(function () {
  glueLevel[0].value = Math.trunc(+(Math.random() * 100));
  myChart.setOption({
    series: [
      {
        data: glueLevel,
      },
    ],
  });
}, 2000);

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);

if (option && typeof option === "object") {
  myChart.setOption(option);
}

window.addEventListener("resize", myChart.resize);

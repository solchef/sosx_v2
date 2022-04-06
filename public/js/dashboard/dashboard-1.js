(function($) {
    /* "use strict" */


 var dzChartlist = function(){
	
	var screenWidth = $(window).width();
	let draw = Chart.controllers.line.__super__.draw; //draw shadow
	
	var widgetChart1 = function(){
		if(jQuery('#widgetChart1').length > 0 ){
			const chart_widget_1 = document.getElementById("widgetChart1").getContext('2d');
			new Chart(chart_widget_1, {
				type: "line",
				data: {
					labels: ["January", "February", "March", "April", "May"],

					datasets: [{
						label: "Sales Stats",
						backgroundColor: ['rgba(19, 180, 151, 0.1)'],
						borderColor: '#43c4d3',
						pointBackgroundColor: '#43c4d3',
						pointBorderColor: '#43c4d3',
						borderWidth:4,
						borderRadius:10,
						pointHoverBackgroundColor: '#43c4d3',
						pointHoverBorderColor: '#43c4d3',
						
						data: [0, 4, 2, 5, 6]
					}]
				},
				options: {
					title: {
						display: !1
					},
					tooltips: {
						intersect: !1,
						mode: "nearest",
						xPadding: 10,
						yPadding: 10,
						caretPadding: 10
					},
					
					legend: {
						display: !1
					},
					responsive: !0,
					maintainAspectRatio: !1,
					hover: {
						mode: "index"
					},
					scales: {
						xAxes: [{
							display: !1,
							gridLines: !1,
							scaleLabel: {
								display: !0,
								labelString: "Month"
							}
						}],
						yAxes: [{
							display: !1,
							gridLines: !1,
							scaleLabel: {
								display: !0,
								labelString: "Value"
							},
							ticks: {
								beginAtZero: !0
							}
						}]
					},
					elements: {
						
						point: {
							radius: 0,
							borderWidth: 0
						}
					},
					layout: {
						padding: {
							left: 0,
							right: 0,
							top: 5,
							bottom: 0
						}
					}
				}
			});

		}
	}
	var widgetChart1b = function(){
		if(jQuery('#widgetChart1b').length > 0 ){
			const chart_widget_1b = document.getElementById("widgetChart1b").getContext('2d');
			new Chart(chart_widget_1b, {
				type: "line",
				data: {
					labels: ["January", "February", "March", "April", "May"],

					datasets: [{
						label: "Sales Stats",
						backgroundColor: ['rgba(19, 180, 151, 0.1)'],
						borderColor: '#43c4d3',
						pointBackgroundColor: '#43c4d3',
						pointBorderColor: '#43c4d3',
						borderWidth:4,
						borderRadius:10,
						pointHoverBackgroundColor: '#43c4d3',
						pointHoverBorderColor: '#43c4d3',
						
						data: [0, 4, 2, 5, 6]
					}]
				},
				options: {
					title: {
						display: !1
					},
					tooltips: {
						intersect: !1,
						mode: "nearest",
						xPadding: 10,
						yPadding: 10,
						caretPadding: 10
					},
					
					legend: {
						display: !1
					},
					responsive: !0,
					maintainAspectRatio: !1,
					hover: {
						mode: "index"
					},
					scales: {
						xAxes: [{
							display: !1,
							gridLines: !1,
							scaleLabel: {
								display: !0,
								labelString: "Month"
							}
						}],
						yAxes: [{
							display: !1,
							gridLines: !1,
							scaleLabel: {
								display: !0,
								labelString: "Value"
							},
							ticks: {
								beginAtZero: !0
							}
						}]
					},
					elements: {
						
						point: {
							radius: 0,
							borderWidth: 0
						}
					},
					layout: {
						padding: {
							left: 0,
							right: 0,
							top: 5,
							bottom: 0
						}
					}
				}
			});

		}
	}
	var widgetChart1c = function(){
		if(jQuery('#widgetChart1c').length > 0 ){
			const chart_widget_1c = document.getElementById("widgetChart1c").getContext('2d');
			new Chart(chart_widget_1c, {
				type: "line",
				data: {
					labels: ["January", "February", "March", "April", "May"],

					datasets: [{
						label: "Sales Stats",
						backgroundColor: ['rgba(19, 180, 151, 0.1)'],
						borderColor: '#43c4d3',
						pointBackgroundColor: '#43c4d3',
						pointBorderColor: '#43c4d3',
						borderWidth:4,
						borderRadius:10,
						pointHoverBackgroundColor: '#43c4d3',
						pointHoverBorderColor: '#43c4d3',
						
						data: [0, 4, 2, 5, 6]
					}]
				},
				options: {
					title: {
						display: !1
					},
					tooltips: {
						intersect: !1,
						mode: "nearest",
						xPadding: 10,
						yPadding: 10,
						caretPadding: 10
					},
					
					legend: {
						display: !1
					},
					responsive: !0,
					maintainAspectRatio: !1,
					hover: {
						mode: "index"
					},
					scales: {
						xAxes: [{
							display: !1,
							gridLines: !1,
							scaleLabel: {
								display: !0,
								labelString: "Month"
							}
						}],
						yAxes: [{
							display: !1,
							gridLines: !1,
							scaleLabel: {
								display: !0,
								labelString: "Value"
							},
							ticks: {
								beginAtZero: !0
							}
						}]
					},
					elements: {
						
						point: {
							radius: 0,
							borderWidth: 0
						}
					},
					layout: {
						padding: {
							left: 0,
							right: 0,
							top: 5,
							bottom: 0
						}
					}
				}
			});

		}
	}
	var widgetChart1d = function(){
		if(jQuery('#widgetChart1d').length > 0 ){
			const chart_widget_1d = document.getElementById("widgetChart1d").getContext('2d');
			new Chart(chart_widget_1d, {
				type: "line",
				data: {
					labels: ["January", "February", "March", "April", "May"],

					datasets: [{
						label: "Sales Stats",
						backgroundColor: ['rgba(19, 180, 151, 0.1)'],
						borderColor: '#43c4d3',
						pointBackgroundColor: '#43c4d3',
						pointBorderColor: '#43c4d3',
						borderWidth:4,
						borderRadius:10,
						pointHoverBackgroundColor: '#43c4d3',
						pointHoverBorderColor: '#43c4d3',
						
						data: [0, 4, 2, 5, 6]
					}]
				},
				options: {
					title: {
						display: !1
					},
					tooltips: {
						intersect: !1,
						mode: "nearest",
						xPadding: 10,
						yPadding: 10,
						caretPadding: 10
					},
					
					legend: {
						display: !1
					},
					responsive: !0,
					maintainAspectRatio: !1,
					hover: {
						mode: "index"
					},
					scales: {
						xAxes: [{
							display: !1,
							gridLines: !1,
							scaleLabel: {
								display: !0,
								labelString: "Month"
							}
						}],
						yAxes: [{
							display: !1,
							gridLines: !1,
							scaleLabel: {
								display: !0,
								labelString: "Value"
							},
							ticks: {
								beginAtZero: !0
							}
						}]
					},
					elements: {
						
						point: {
							radius: 0,
							borderWidth: 0
						}
					},
					layout: {
						padding: {
							left: 0,
							right: 0,
							top: 5,
							bottom: 0
						}
					}
				}
			});

		}
	}
	var widgetChart4 = function(){
		if(jQuery('#widgetChart4').length > 0 ){
			const chart_widget_1 = document.getElementById("widgetChart4").getContext('2d');
			new Chart(chart_widget_1, {
				type: "line",
				data: {
					labels: ["January", "February", "March", "April", "May"],

					datasets: [{
						label: "Sales Stats",
						backgroundColor: ['rgba(19, 180, 151, 0)'],
						borderColor: '#43c4d3',
						pointBackgroundColor: '#43c4d3',
						pointBorderColor: '#43c4d3',
						borderWidth:2,
						borderRadius:10,
						pointHoverBackgroundColor: '#43c4d3',
						pointHoverBorderColor: '#43c4d3',
						
						data: [0, 4, 2, 5, 6]
					}]
				},
				options: {
					title: {
						display: !1
					},
					tooltips: {
						intersect: !1,
						mode: "nearest",
						xPadding: 10,
						yPadding: 10,
						caretPadding: 10
					},
					
					legend: {
						display: !1
					},
					responsive: !0,
					maintainAspectRatio: !1,
					hover: {
						mode: "index"
					},
					scales: {
						xAxes: [{
							display: !1,
							gridLines: !1,
							scaleLabel: {
								display: !0,
								labelString: "Month"
							}
						}],
						yAxes: [{
							display: !1,
							gridLines: !1,
							scaleLabel: {
								display: !0,
								labelString: "Value"
							},
							ticks: {
								beginAtZero: !0
							}
						}]
					},
					elements: {
						line: {
							tension: .15,
						},
						point: {
							radius: 0,
							borderWidth: 0
						}
					},
					layout: {
						padding: {
							left: 0,
							right: 0,
							top: 5,
							bottom: 0
						}
					}
				}
			});

		}
	}
	var chartBar = function(){
		if(jQuery('#widgetChart2').length > 0 ){
	
			const widgetChart2 = document.getElementById("widgetChart2").getContext('2d');
			//generate gradient
			

			// widgetChart1.attr('height', '100');

			new Chart(widgetChart2, {
				type: 'bar',
				data: {
					defaultFontFamily: 'Poppins',
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
					datasets: [
						{
							label: "My First dataset",
							data: [15, 40, 55, 40, 25, 35, 40, 50, 85, 95, 54, 35,15, 40, 55, 40, 25, 35, 40, 50],
							borderColor: '#43c4d3',
							borderWidth: "0",
							backgroundColor: ['#43c4d3','#036C59','#43c4d3','#036C59','#43c4d3','#036C59','#43c4d3','#036C59','#43c4d3','#036C59','#43c4d3','#036C59','#43c4d3','#036C59','#43c4d3','#036C59','#43c4d3','#036C59','#43c4d3','#036C59',], 
							hoverBackgroundColor: '#43c4d3'
						}
					]
				},
				options: {
					legend: false,
					responsive: true, 
					maintainAspectRatio: false,  
					scales: {
						yAxes: [{
							display: false, 
							ticks: {
								beginAtZero: true, 
								display: false, 
								max: 100, 
								min: 0, 
								stepSize: 10
							}, 
							gridLines: {
								display: false, 
								drawBorder: false
							}
						}],
						xAxes: [{
							display: false, 
							barPercentage: 0.4, 
							gridLines: {
								display: false, 
								drawBorder: false
							}, 
							ticks: {
								display: false
							}
						}]
					}
				}
			});

		}
		
		
	}
	 var doughnutChart = function(){
		if(jQuery('#doughnut_chart').length > 0 ){
			//doughut chart
			const doughnut_chart = document.getElementById("doughnut_chart").getContext('2d');
			// doughnut_chart.height = 100;
			new Chart(doughnut_chart, {
				type: 'doughnut',
				data: {
					weight: 5,	
					defaultFontFamily: 'Poppins',
					datasets: [{
						data: [35, 25, 25,15],
						borderWidth: 5, 
						borderColor: "rgba(47,54,61,1)",
						backgroundColor: [
							"rgba(175, 54, 54, 1)",
							"rgba(60, 101, 245, 1)",
							"rgba(27, 211, 68, 1)",
							"rgba(255, 247, 66, 1)"
						],
						hoverBackgroundColor: [
							"rgba(175, 54, 54, 0.5)",
							"rgba(60, 101, 245, 0.5)",
							"rgba(27, 211, 68, 0.5)",
							"rgba(255, 247, 66, 0.5)"
						]

					}],
					// labels: [
					//     "green",
					//     "green",
					//     "green",
					//     "green"
					// ]
				},
				options: {
					weight: 1,	
					 cutoutPercentage: 60,
					responsive: true,
					maintainAspectRatio: false
				}
			});
		}
	}
	var lineChart2 = function(){
		
		if(jQuery('#lineChart_2').length > 0 ){


		//basic line chart
			const lineChart_2 = document.getElementById("lineChart_2").getContext('2d');

			Chart.controllers.line = Chart.controllers.line.extend({
				draw: function () {
					draw.apply(this, arguments);
					let nk = this.chart.chart.ctx;
					let _stroke = nk.stroke;
					nk.stroke = function () {
						nk.save();
						nk.shadowColor = 'rgba(19, 180, 151, 1)';
						nk.shadowBlur = 10;
						nk.shadowOffsetX = 0;
						nk.shadowOffsetY = 0;
						_stroke.apply(this, arguments)
						nk.restore();
					}
				}
			});
			
			lineChart_2.height = 385;

			new Chart(lineChart_2, {
				type: 'line',
				data: {
					defaultFontFamily: 'Poppins',
					labels: ["Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul"],
					datasets: [
						{
							label: "My First dataset",
							data: [25, 20, 60, 41, 66, 45, 80],
							borderColor: 'rgba(19, 180, 151, 1)',
							borderWidth: "2",
							backgroundColor: 'transparent',
							pointBackgroundColor: 'transparent',
							pointBorderColor:'transparent',
							pointHoverBackgroundColor:'rgba(19,180,151,1)',
							pointBorderWidth:30,
							pointHoverRadius: 10,
						}
					]
				},
				options: {
					legend: false, 
					scales: {
						yAxes: [{
							color: "rgba(255, 255, 255,1)",
							ticks: {
								beginAtZero: true, 
								max: 100, 
								min: 0, 
								stepSize: 20, 
								padding: 10								
							},
							gridLines: {
								color: "rgba(255, 255, 255,0.05)",
								drawBorder: true
							}
						}],
						xAxes: [{
							ticks: {
								padding: 5
							},
							gridLines: {
								color: "rgba(255, 255, 255,0.05)",
								drawBorder: true
							}
						}]
					}
				}
			});
			
		}
	}
	var lineChart = function(){
		var optionsTimeline = {
			chart: {
				type: "bar",
				height: 350,
				stacked: true,
				toolbar: {
					show: false
				},
				sparkline: {
					//enabled: true
				},
				offsetX: 0,
			},
			series: [
				 {
					name: "New Clients",
					data: [180, 150, 200, 100, 80, 70, 40]
				}
			],
			
			plotOptions: {
				bar: {
					columnWidth: "25%",
					endingShape: "rounded",
					startingShape: "rounded",
					
					colors: {
						backgroundBarColors: ['#3B444D', '#3B444D', '#3B444D', '#3B444D','#3B444D','#3B444D','#3B444D','#3B444D'],
						backgroundBarOpacity: 1,
						backgroundBarRadius: 5,
					},

				},
				distributed: true
			},
			colors:['#43c4d3'],
			grid: {
				borderColor:'#323940'
			},
			legend: {
				show: false
			},
			fill: {
			  opacity: 1
			},
			dataLabels: {
				enabled: false,
				colors: ['#000'],
				dropShadow: {
				  enabled: true,
				  top: 1,
				  left: 1,
				  blur: 1,
				  opacity: 1
			  }
			},
			xaxis: {
			 categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
			  labels: {
			   style: {
				  colors: '#787878',
				  fontSize: '13px',
				  fontFamily: 'poppins',
				  fontWeight: 100,
				  cssClass: 'apexcharts-xaxis-label',
				},
			  },
			  crosshairs: {
				show: false,
			  },
			  axisBorder: {
				  show: false,
				},
			},
			
			yaxis: {
				show: false
			},
			
			tooltip: {
				x: {
					show: true
				}
			}
		};
		var chartTimelineRender =  new ApexCharts(document.querySelector("#lineChart"), optionsTimeline);
		 chartTimelineRender.render();	
	}
	
	var lineChart4 = function(){
		//dual line chart
		if(jQuery('#lineChart_4').length > 0 ){
			const lineChart_4 = document.getElementById("lineChart_4").getContext('2d');
			//generate gradient
			const lineChart_4gradientStroke1 = lineChart_4.createLinearGradient(500, 0, 100, 0);
			lineChart_4gradientStroke1.addColorStop(0, "rgba(19, 180, 151, 1)");
			lineChart_4gradientStroke1.addColorStop(1, "rgba(19, 180, 151, 1)");

			const lineChart_4gradientStroke2 = lineChart_4.createLinearGradient(500, 0, 100, 0);
			lineChart_4gradientStroke2.addColorStop(0, "rgba(217, 183, 95, 1)");
			lineChart_4gradientStroke2.addColorStop(1, "rgba(217, 183, 95, 1)");

			Chart.controllers.line = Chart.controllers.line.extend({
				draw: function () {
					draw.apply(this, arguments);
					let nk = this.chart.chart.ctx;
					let _stroke = nk.stroke;
					nk.stroke = function () {
						nk.save();
						nk.shadowColor = 'rgba(19, 180, 151, .8)';
						nk.shadowBlur = 10;
						nk.shadowOffsetX = 0;
						nk.shadowOffsetY = 0;
						_stroke.apply(this, arguments)
						nk.restore();
					}
				}
			});
				
			lineChart_4.height = 100;

			new Chart(lineChart_4, {
				type: 'line',
				data: {
					defaultFontFamily: 'Poppins',
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
					datasets: [
						{
							label: "My First dataset",
							data: [0, 20, 60, 62, 50, 45, 65],
							borderColor: 'rgba(19, 180, 151, 1)',
							borderWidth: "2",
							backgroundColor: 'transparent', 
							pointBackgroundColor: 'rgba(54, 201, 95, 0.5)'
						}, {
							label: "My First dataset",
							data: [30, 20, 20, 20, 35, 65, 45],
							borderColor: lineChart_4gradientStroke2,
							borderWidth: "2",
							backgroundColor: 'transparent', 
							pointBackgroundColor: 'rgba(254, 176, 25, 1)'
						}
					]
				},
				options: {
					title: {
						display: !1
					},
					tooltips: {
						intersect: !1,
						mode: "nearest",
						xPadding: 10,
						yPadding: 10,
						caretPadding: 10
					},
					
					legend: {
						display: !1
					},
					responsive: !0,
					maintainAspectRatio: !1,
					hover: {
						mode: "index"
					},
					scales: {
						xAxes: [{
							display: !1,
							gridLines: !1,
							scaleLabel: {
								display: !0,
								labelString: "Month"
							}
						}],
						yAxes: [{
							display: !1,
							gridLines: !1,
							scaleLabel: {
								display: !0,
								labelString: "Value"
							},
							ticks: {
								beginAtZero: !0
							}
						}]
					},
					elements: {
						point: {
							radius: 0,
							borderWidth: 0
						}
					},
					layout: {
						padding: {
							left: 0,
							right: 0,
							top: 5,
							bottom: 0
						}
					}
				}
			});
		}
	}
	/* Function ============ */
		return {
			init:function(){
				
			},
			
			
			load:function(){
				widgetChart1();
				widgetChart1b();
				widgetChart1c();
				widgetChart1d();
				widgetChart4();
				chartBar();
				doughnutChart();
				lineChart2();
				lineChart();
				lineChart4();
				
			},
			
			resize:function(){
			}
		}
	
	}();

	jQuery(document).ready(function(){
	});
		
	jQuery(window).on('load',function(){
		setTimeout(function(){
			dzChartlist.load();
		}, 1000); 
		
	});

	jQuery(window).on('resize',function(){
		
		
	});     

})(jQuery);

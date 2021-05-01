
    Popover = function() {
        var e = $('[data-toggle="popover"]');
        e.length && e.each(function() {
            ! function(e) {
                var t = "";
                e.data("color") && (t = " popover-" + e.data("color"));
                var a = {
                    trigger: "focus",
                    template: '<div class="popover' + t + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                };
                e.popover(a)
            }($(this))
        })
    }(),
    PurposeStyle = function() {
        var e = getComputedStyle(document.body);
        return {
            colors: {
                gray: {
                    100: "#f6f9fc",
                    200: "#e9ecef",
                    300: "#dee2e6",
                    400: "#ced4da",
                    500: "#adb5bd",
                    600: "#8898aa",
                    700: "#525f7f",
                    800: "#32325d",
                    900: "#212529"
                },
                theme: {
                    primary: e.getPropertyValue("--primary") ? e.getPropertyValue("--primary").replace(" ", "") : "#6e00ff",
                    info: e.getPropertyValue("--info") ? e.getPropertyValue("--info").replace(" ", "") : "#00B8D9",
                    success: e.getPropertyValue("--success") ? e.getPropertyValue("--success").replace(" ", "") : "#36B37E",
                    danger: e.getPropertyValue("--danger") ? e.getPropertyValue("--danger").replace(" ", "") : "#FF5630",
                    warning: e.getPropertyValue("--warning") ? e.getPropertyValue("--warning").replace(" ", "") : "#FFAB00",
                    dark: e.getPropertyValue("--dark") ? e.getPropertyValue("--dark").replace(" ", "") : "#212529"
                },
                transparent: "transparent"
            },
            fonts: {
                base: "Nunito"
            }
        }
    }(),
   
  
   
    ProgressCircle = (Popover = function() {
        var e = $('[data-toggle="popover"]'),
            t = "";
        e.length && e.each(function() {
            ! function(e) {
                e.data("color") && (t = "popover-" + e.data("color"));
                var a = {
                    template: '<div class="popover ' + t + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                };
                e.popover(a)
            }($(this))
        })
    }(), function() {
        var e = $(".progress-circle");
        e.length && e.each(function() {
            var e, t, a, n, o, i;
            e = $(this), t = e.data().progress, a = e.data().text ? e.data().text : "", n = e.data().textclass ? e.data().textclass : "progressbar-text", o = e.data().color ? e.data().color : "primary", i = {
                color: PurposeStyle.colors.theme[o],
                strokeWidth: 7,
                trailWidth: 2,
                text: {
                    value: a,
                    className: n
                },
                svgStyle: {
                    display: "block"
                },
                duration: 1500,
                easing: "easeInOut"
            }, new ProgressBar.Circle(e[0], i).animate(t / 100)
        })
    }()),
  
 WorkedHoursChart = function() {
        var e = $("#apex-worked-hours");
        e.length && e.each(function() {
            ! function(e) {
                var t = {
                        chart: {
                            width: "100%",
                            type: "line",
                            zoom: {
                                enabled: !1
                            },
                            toolbar: {
                                show: !1
                            },
                            shadow: {
                                enabled: !1
                            }
                        },
                        plotOptions: {
                            bar: {
                                horizontal: !1,
                                columnWidth: "30%",
                                endingShape: "rounded"
                            }
                        },
                        stroke: {
                            show: !0,
                            width: 2,
                            colors: ["transparent"]
                        },
                        series: [{
                            name: "Total KM",
                            data: [40, 30, 100, 90, 20]
                        }],
                        xaxis: {
                            labels: {
                                format: "MMM",
                                style: {
                                    colors: PurposeStyle.colors.gray[600],
                                    fontSize: "14px",
                                    fontFamily: PurposeStyle.fonts.base,
                                    cssClass: "apexcharts-xaxis-label"
                                }
                            },
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !0,
                                borderType: "solid",
                                color: PurposeStyle.colors.gray[300],
                                height: 6,
                                offsetX: 0,
                                offsetY: 0
                            },
                            type: "datetime",
                            categories: ["1/11/2000", "2/11/2000", "3/11/2000", "4/11/2000", "5/11/2000"]
                        },
                        yaxis: {
                            labels: {
                                style: {
                                    color: PurposeStyle.colors.gray[600],
                                    fontSize: "12px",
                                    fontFamily: PurposeStyle.fonts.base
                                }
                            },
                            axisBorder: {
                                show: !1
                            },
                            axisTicks: {
                                show: !0,
                                borderType: "solid",
                                color: PurposeStyle.colors.gray[300],
                                height: 6,
                                offsetX: 0,
                                offsetY: 0
                            }
                        },
                        fill: {
                            type: "solid"
                        },
                        markers: {
                            size: 4,
                            opacity: .7,
                            strokeColor: "#fff",
                            strokeWidth: 3,
                            hover: {
                                size: 7
                            }
                        },
                        grid: {
                            borderColor: PurposeStyle.colors.gray[300],
                            strokeDashArray: 5
                        },
                        dataLabels: {
                            enabled: !1
                        }
                    },
                    a = (e.data().dataset, e.data().labels, e.data().color),
                    n = e.data().height;
                e.data().type, t.colors = [PurposeStyle.colors.theme[a]], t.markers.colors = [PurposeStyle.colors.theme[a]], t.chart.height = n || 350;
                var o = new ApexCharts(e[0], t);
                setTimeout(function() {
                    o.render()
                }, 300)
            }($(this))
        })
    }();
    
    // Datepicker = function() {
    //     var e = $('[data-toggle="date"]'),
    //         t = $('[data-toggle="datetime"]'),
    //         a = $('[data-toggle="time"]');
    //     e.length && e.each(function() {
    //         $(this).flatpickr({
    //             enableTime: !1,
    //             allowInput: !0
    //         })
    //     }), t.length && t.each(function() {
    //         $(this).flatpickr({
    //             enableTime: !0,
    //             allowInput: !0
    //         })
    //     }), a.length && a.each(function() {
    //         $(this).flatpickr({
    //             noCalendar: !0,
    //             enableTime: !0,
    //             allowInput: !0
    //         })
    //     })
    // }();

var icons = { parking: { icon: 'https://tarantelleromane.files.wordpress.com/2016/10/map-marker.png?w=20' } };


// REPLACE WITH DATA FROM API
//TITLE | POSITION - LAT , LNG | ICON | TITLE | CONTENT
var airports = [
{
  title: 'Kollam beach',
  position: {
    lat: 8.8879509,
    lng: 76.5955013 },
  icon: 'parking',
  content: '<h6>157 beach St, Worcester, MA</h6><p>beach Beach resort</p>' },




{
  title: 'Varkala',
  position: {
    lat: 8.734150,
    lng: 76.725502 },
  icon: 'parking',
  content: '<h6>157 Highland St, Worcester, MA</h6><p>Varkala Beach resort</p>' }];


function initMap() {

  var uk = {
   lat: 8.8879509,
    lng: 76.5955013 };


  var map = new google.maps.Map(document.getElementById('map1'), {
    zoom:9,
    center: uk,
    disableDefaultUI: true,
 });


  var InfoWindows = new google.maps.InfoWindow({});

  airports.forEach(function (airport) {
    var marker = new google.maps.Marker({
      position: { lat: airport.position.lat, lng: airport.position.lng },
      map: map,
      icon: icons[airport.icon].icon,
      title: airport.title });

    marker.addListener('mouseover', function () {
      InfoWindows.open(map, this);
      InfoWindows.setContent(airport.content);
    });
  });
}
//# sourceURL=pen.js

 



<%--
  Created by IntelliJ IDEA.
  User: Ragchaa
  Date: 6/13/2019
  Time: 2:11 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <title>Title</title>

    <script type="text/javascript"
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>


    <script src="https://code.highcharts.com/maps/highmaps.js"></script>
    <script src="https://code.highcharts.com/maps/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/mapdata/countries/us/custom/us-all-mainland.js"></script>


    <link href="resources/css/index.css" rel="stylesheet"/>
    <link href="resources/css/header.css" rel="stylesheet">
    <link href="resources/css/dashboard.css" rel="stylesheet">


    <script type="text/javascript" src="js/main.js"></script>

    <style>
        #usaid {
            height: 500px;
            min-width: 310px;
            max-width: 800px;
            margin: 0 auto;
        }
        .loading {
            margin-top: 10em;
            text-align: center;
            color: gray;
        }
    </style>

</head>
<body>

<div class="header">
    <div class="headerContent">
        <div class="menuItem leftMenu">
            <a href="/"><img src="resources/images/logo_burger.png"/></a>

        </div>
        <div class="rightMenu">
            <div class="menuItem userMenu">
                <c:if test="${user==null}"><a href="/login">Login</a></c:if>

                <c:if test="${user!=null}">
                    Hello, ${user.username}!<br />
                    <a href="/logout">(logout)</a>
                </c:if>
            </div>
            <%--  <div class="menuItem">
                <a href="/payment">Dashboard</a>
              </div>--%>
            <div class="menuItem">
                <a href="/order">Orders</a>
            </div>

            <div class="menuItem">
                <a href="/payment">Dashboard</a>
            </div>

            <div class="menuItem">
                <a href="/placeOrder.jsp">Cart</a>
                [${cart.items.size()}]
            </div>
        </div>
    </div>
</div>


<div class="container">

    <section id="">
        <span class="information">
            <br>
            235<br>
            Total order
        </span>
        <span class="information">
            <br>
            235<br>
            Total Income
        </span>
        <span class="information">
            <br>
            235<br>
            Total Users
        </span>
        <span class="information">
            <br>
            235<br>
            Total Product
        </span>
    </section>

    <section id="main">
        <div class="main">
            <div>
                <select id="sel">
                    <option value="1">Iowa</option>
                    <option value="2">Illinois</option>
                </select>
                <button id="cha">show</button>
            </div>

            <div id="container"></div>
        </div>
    </section>

    <section id="map">
        <div id="usaid"></div>
    </section>

</div>


<script language="javascript">
    $(function () {
        var data = [
            ['us-ma', 0],
            ['us-wa', 1],
            ['us-ca', 2],
            ['us-or', 3],
            ['us-wi', 4],
            ['us-me', 5],
            ['us-mi', 6],
            ['us-nv', 7],
            ['us-nm', 8],
            ['us-co', 9],
            ['us-wy', 10],
            ['us-ks', 11],
            ['us-ne', 12],
            ['us-ok', 13],
            ['us-mo', 14],
            ['us-il', 15],
            ['us-in', 16],
            ['us-vt', 17],
            ['us-ar', 18],
            ['us-tx', 19],
            ['us-ri', 20],
            ['us-al', 21],
            ['us-ms', 22],
            ['us-nc', 23],
            ['us-va', 24],
            ['us-ia', 25],
            ['us-md', 26],
            ['us-de', 27],
            ['us-pa', 28],
            ['us-nj', 29],
            ['us-ny', 30],
            ['us-id', 31],
            ['us-sd', 32],
            ['us-ct', 33],
            ['us-nh', 34],
            ['us-ky', 35],
            ['us-oh', 36],
            ['us-tn', 37],
            ['us-wv', 38],
            ['us-dc', 39],
            ['us-la', 40],
            ['us-fl', 41],
            ['us-ga', 42],
            ['us-sc', 43],
            ['us-mn', 44],
            ['us-mt', 45],
            ['us-nd', 46],
            ['us-az', 47],
            ['us-ut', 48]
        ];

// Create the chart
        Highcharts.mapChart('usaid', {
            chart: {
                map: 'countries/us/custom/us-all-mainland'
            },

            title: {
                text: 'Highmaps basic demo'
            },

            subtitle: {
                text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/us/custom/us-all-mainland.js">United States of America, mainland</a>'
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            colorAxis: {
                min: 0
            },

            series: [{
                data: data,
                name: 'Random data',
                states: {
                    hover: {
                        color: '#BADA55'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }]
        });
    });

  /*  $(function () {
        Highcharts.chart('container', {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Income Growth by Region'
            },
            subtitle: {
                text: 'Source: WAP project'
            },
            xAxis: {
                categories: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],

                tickmarkPlacement: 'on',
                title: {
                    enabled: false
                }
            },
            yAxis: {
                title: {
                    text: 'billions'
                },
                labels: {
                    formatter: function () {
                        return this.value / 1000;
                    }
                }
            },
            tooltip: {
                split: true,
                valueSuffix: ' millions'
            },
            plotOptions: {
                area: {
                    stacking: 'normal',
                    lineColor: '#666666',
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: '#666666'
                    }
                }
            },
            series: [{
                name: 'Fairfield',
                data: ${state}
            }, {
                name: 'Ottumwa',
                data: [106, 107, 111, 133, 221, 767, 1766]
            }]
        });
    });*/
</script>


</body>
</html>


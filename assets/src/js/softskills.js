anychart.onDocumentReady(function () {
    var data1 = [
                    {x: "LeaderShip", value: 55},
                    {x: "Problem-solving", value: 45},
                    {x: "Adaptability and flexibility", value: 30},
                    {x: "Ability to accept feedback", value: 20},
                    {x: "Time management", value: 80},
                    {x: "Follow through", value: 85},
                    ];

                    var data2 = [
                    {x: "LeaderShip", value: 65},
                    {x: "Problem-solving", value: 49},
                    {x: "Adaptability and flexibility", value: 49},
                    {x: "Ability to accept feedback", value: 45},
                    {x: "Time management", value: 75},
                    {x: "Follow through", value: 80},
                    ]; 
                    
                    var data3 = [
                    {x: "LeaderShip", value: 75},
                    {x: "Problem-solving", value: 80},
                    {x: "Adaptability and flexibility", value: 65},
                    {x: "Ability to accept feedback", value: 75},
                    {x: "Time management", value: 64},
                    {x: "Follow through", value: 90},
                    ]; 

    var chart = anychart.radar();
    chart.title(" ").legend(true);

    chart.yScale()
    .minimum(20)
    .maximum(90)
    .ticks({'interval':10});
    chart.yGrid().palette(["gray 0.1", "gray 0.2"]);


		chart.area(data1).name('in 2014').markers(true).fill("#E55934", 0.3).stroke("#E55934");
    chart.area(data2).name('in 2018').markers(true).fill("#9BC53D", 0.3).stroke("#9BC53D");
    chart.area(data3).name('in 2022').markers(true).fill("#5BC0EB", 0.3).stroke("#5BC0EB");

    chart.container('container');
    chart.draw();
});
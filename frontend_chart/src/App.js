import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

 
class App extends Component {	
	render() {
		const month_plastic = {
				animationEnabled: true,
				title:{
					text: "월별 플라스틱 배출량"
				},
				axisY : {
					title: "단위 리터 (L)",
					includeZero: false,
					suffix: " %"
				},
				toolTip: {
					shared: true
				},
				data: [{
					type: "spline",
					name: "HDPE",
					showInLegend: true,
					dataPoints: [
						{ y: 155, label: "Jan" },
						{ y: 150, label: "Feb" },
						{ y: 152, label: "Mar" },
						{ y: 148, label: "Apr" },
						{ y: 142, label: "May" },
						{ y: 150, label: "Jun" },
						{ y: 146, label: "Jul" },
						{ y: 149, label: "Aug" },
						{ y: 153, label: "Sept" },
						{ y: 158, label: "Oct" },
						{ y: 154, label: "Nov" },
						{ y: 150, label: "Dec" }
					]
				},
				{
					type: "spline",
					name: "PETE",
					showInLegend: true,
					dataPoints: [
						{ y: 172, label: "Jan" },
						{ y: 173, label: "Feb" },
						{ y: 175, label: "Mar" },
						{ y: 172, label: "Apr" },
						{ y: 162, label: "May" },
						{ y: 165, label: "Jun" },
						{ y: 172, label: "Jul" },
						{ y: 168, label: "Aug" },
						{ y: 175, label: "Sept" },
						{ y: 170, label: "Oct" },
						{ y: 165, label: "Nov" },
						{ y: 169, label: "Dec" }
					]
				},
				{
                                        type: "spline",
                                        name: "LDPE",
                                        showInLegend: true,
                                        dataPoints: [
                                                { y: 172, label: "Jan" },
                                                { y: 123, label: "Feb" },
                                                { y: 135, label: "Mar" },
                                                { y: 132, label: "Apr" },
                                                { y: 132, label: "May" },
                                                { y: 135, label: "Jun" },
                                                { y: 132, label: "Jul" },
                                                { y: 138, label: "Aug" },
                                                { y: 135, label: "Sept" },
                                                { y: 130, label: "Oct" },
                                                { y: 135, label: "Nov" },
                                                { y: 139, label: "Dec" }
                                        ]
                                },
				{
                                        type: "spline",
                                        name: "PP",
                                        showInLegend: true,
                                        dataPoints: [
                                                { y: 66, label: "Jan" },
                                                { y: 100, label: "Feb" },
                                                { y: 95, label: "Mar" },
                                                { y: 82, label: "Apr" },
                                                { y: 72, label: "May" },
                                                { y: 81, label: "Jun" },
                                                { y: 85, label: "Jul" },
                                                { y: 89, label: "Aug" },
                                                { y: 87, label: "Sept" },
                                                { y: 89, label: "Oct" },
                                                { y: 99, label: "Nov" },
                                                { y: 110, label: "Dec" }
                                        ]
                                }
				]
		}
		 const pollution = {
                                animationEnabled: true,
                                title:{
                                        text: "월별 플라스틱 오염도"
                                },
                                axisY : {
                                        title: "단위 (%)",
                                        includeZero: false,
                                        suffix: " %",
					maximum:30
                                },
                                toolTip: {
                                        shared: true
                                },
                                data: [{
                                        type: "spline",
                                        name: "오염도 pollution",
                                        showInLegend: true,
                                        dataPoints: [
                                                { y: 10, label: "Jan" },
                                                { y: 11, label: "Feb" },
                                                { y: 12, label: "Mar" },
                                                { y: 11, label: "Apr" },
                                                { y: 9, label: "May" },
                                                { y: 10, label: "Jun" },
                                                { y: 11, label: "Jul" },
                                                { y: 10, label: "Aug" },
                                                { y: 9, label: "Sept" },
                                                { y: 11, label: "Oct" },
                                                { y: 9, label: "Nov" },
                                                { y: 9, label: "Dec" }
                                        ]
                                }
				]

		}	
		return (
		<div>
		 <div style={{ width: '75%' , margin:'auto'}} >
                        <CanvasJSChart options = {month_plastic}/>
		</div>
		 <div style={{ width: '75%' , margin:'auto'}} >
                        <CanvasJSChart options = {pollution}/>
		</div>
		</div>
		);
	}
}
 
export default App;

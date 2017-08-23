import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines'; 

class WeatherList extends Component {

	renderWeather(cityData){
		const name =cityData.city.name;
		console.log(cityData);
		const temperature =cityData.list.map(weather => weather.main.temp);
		console.log(temperature);
		const pressure =cityData.list.map(weather => weather.main.pressure);
		const humidity =cityData.list.map(weather => weather.main.humidity);

		return (
			<tr key={name}>
				<td>{name}</td>
				<td>
					<Sparklines height={120} width={140} data={temperature}>
						<SparklinesLine color="blue" />
					</Sparklines>
				</td>
				<td>
					<Sparklines height={120} width={140} data={pressure}>
						<SparklinesLine color="blue" />
					</Sparklines>
				</td>
				<td>
					<Sparklines height={120} width={140} data={humidity}>
						<SparklinesLine color="blue" />
					</Sparklines>
				</td>
			</tr>
		)
	}


	render(){
		return (
			<table className = "table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}

}

function mapStateToProps({weather}) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);
import React, {Component} from 'react';
import 'whatwg-fetch';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import Intro from '../../components/Intro'
export default class Series extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  onSeriesInputChange = e => {
    this.setState({seriesName: e.target.value, isFetching: true})
    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
        .then(json => this.setState({series: json, isFetching: false}))
  }
  render() {
    const {series, seriesName, isFetching } = this.state;
    return (
    <div>
      <h1>Series Container</h1>
        <Intro message="Find your favorite TV Show"/>
          <div>
              <input
                value={seriesName}
                type="text"
                onChange={this.onSeriesInputChange}/>
          </div>
          { !isFetching && series.length === 0 && seriesName.trim() === ''
            &&
            <p>Please Enter series name into the input </p>
          }
          {
            !isFetching && series.length === 0 && seriesName.trim() !== ''
            &&
            <p>No Tv Show Found</p>
          }
          {
            isFetching && <Loader/>
          }
          {
            !isFetching && <SeriesList list={this.state.series}/>
          }
    </div>
    )
  }
}

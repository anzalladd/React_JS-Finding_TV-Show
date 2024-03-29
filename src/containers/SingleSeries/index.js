import React, { Component } from 'react';
import Loader from '../../components/Loader';

export default class SingleSeries extends Component {
  state = {
    show: null
  }
  componentDidMount(){
    const { id } = this.props.match.params;
    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
        .then(json => this.setState({show: json}))
  }
  render() {
    const {  show } = this.state;
    return (
      <div>
          {show === null && <Loader/>}
          {
            show !== null
            &&
            <div>
            <p>Title: {show.name}</p>
            <p>Premiered: {show.premiered}</p>
            <p>Rating: {show.rating.average}</p>
            <p>Episodes: {show._embedded.episodes.length}</p>
            <img alt="cover" src={show.image.medium}/>
            </div>
          }
      </div>
    );
  }
}

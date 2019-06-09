import React, { Component } from 'react';
import * as contentful from 'contentful';
import Title from '../../../sharedComponents/title';
import Subtitle from '../../../sharedComponents/subtitle';

import './Summary.scss';


class Summary extends Component {
  state = {
    posts: []
  }

  client = contentful.createClient({
    space: 'yzc3im4v4u3u',
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT
  })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries({ 'content_type': 'summary' })

  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  render() {
    return (
      <div className="Summary row center-xs">
        <Title>Profile</Title>
        <Subtitle>I build things in the pixel aether</Subtitle>
        <div className="profile-content col-xl-5 col-lg-6 col-md-9 col-sm-11 col-xs-12">
          <div className="picture" />
          <p className="description">
            {
              this.state.posts[0] && 
              this.state.posts[0].fields.description
            }
            <br /> <br />
            <i className="fa fa-map-marker-alt" /> <span className="location">
              {
                this.state.posts[0] &&
                this.state.posts[0].fields.location
              }
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Summary;

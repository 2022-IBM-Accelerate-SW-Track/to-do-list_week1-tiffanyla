import React, { Component } from 'react';
import "./About.css";
import tiff from "../assets/tiff.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={tiff}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Tiffany La</div>
        <div className="brief_description">
          I am currently a rising junior studying Applied Math and Data Science at UC Berkeley. Some of my interests include playing tennis, designing, and playing video games. 
        </div>
      </div>
    </div>
      </div>
    )
  }
}
import React, {Component } from 'react';
import { Link, Route, Prompt } from 'react-router-dom'
import './footer.css'

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer">
            <div className='container'>
                <p>&copy; Copyright 2013 By Projex - All rights Reserved!</p>

            </div>
        </footer>
    );
  }
};
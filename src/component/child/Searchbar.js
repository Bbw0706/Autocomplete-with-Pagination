import React, { Component } from 'react';
import {Row, Autocomplete} from "react-materialize"

import "../../styles/myform.css"

class Searchbar extends Component {
  render() {
    const obj = {}

    this.props.data.map((item,index) => {
     return obj[item.name] = null;
    })

    // console.log(obj)
    return (
            <Row>
              <Autocomplete data={obj} s={10} m={10} l={4} title="Search Starwars Person..."/>
            </Row>
    );
  }
}

export default Searchbar;

import React, { Component } from 'react'
import {Collection, CollectionItem, Pagination} from "react-materialize";

export default class List extends Component {
  handleSelect(e){
    this.props.Click(e)
  }
  render() {
      const {data,itemperpage, currentpage} = this.props;

      const list = data.map((item) =>{
        return item.name;
      })

      const indexOfLastItem = currentpage * itemperpage;
      const indexOfFirstItem = indexOfLastItem - itemperpage;
      const currenItem = list.slice(indexOfFirstItem, indexOfLastItem)

      const itemList = currenItem.map((item, index) =>(
          <CollectionItem key={index} id={index} href="#">{item}</CollectionItem>
      ))

    return (
      <Collection>
      <Pagination items={Math.ceil(list.length / itemperpage)} activePage={1} onSelect={this.handleSelect.bind(this)} />
        {itemList}
      </Collection>
    )
  }
}

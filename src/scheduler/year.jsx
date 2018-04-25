/* req v3.1
 * Copyright (c) 2016, 2017, 2018 Eugene Y. Q. Shen.
 *
 * req is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, either version
 * 3 of the License, or (at your option) any later version.
 *
 * req is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 */
import React from "react";
import {DropTarget} from "react-dnd";
import * as constants from "../const.js";

const year_drop_target = {
  drop(props, monitor) {
    props.updateTerm(monitor.getItem().code, props.year, "W1");
  }
};

function drop_collect(connect, monitor) {
  return {connect_drop_target: connect.dropTarget()};
};


class Year extends React.Component {
  constructor(props) {
    // this.props.year: the current year (1, 2, 3, 4)
    // this.props.start_year: the calendar year of the first year
    // this.props.req_list: the list of required courses and packages
    // this.props.done_list: the list of courses completed this year
    // this.props.updateTerm: callback for when user updates the course term
    super(props);
  };


  render() {
    return this.props.connect_drop_target(
      <div>
        Term: {this.props.start_year + this.props.year - 1}
        <br />
        Completed Courses:
        <ul>
          {this.props.done_list.map(
            ({code}) => <li key={code}>{code}</li>)}
        </ul>
        <br />
        Required Courses:
        <ul>
          {this.props.req_list.map(
            ({code}) => <li key={code}>{code}</li>)}
        </ul>
        <br />
      </div>
    );
  };
};


export default DropTarget("button", year_drop_target, drop_collect)(Year);
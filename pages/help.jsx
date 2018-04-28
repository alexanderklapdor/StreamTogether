//Imports
import PropTypes from "prop-types";
import React, { Component } from "react";
import Link from "next/link";
import OwnHeader from "../components/Header";
import TopBox from "../components/TopBox";
import {
  Card,
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Accordion,
  activeIndex,
  Statistic
} from "semantic-ui-react";

export default class Help extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "help"
    };
  }

  //----------------------------------Render-------------------------------//
  render() {
    const activeItem = this.state.activeItem;

    return (
      <OwnHeader>
        <TopBox activeItem={activeItem} layer1="Help" />
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <p style={{ fontSize: "1.33em" }}>
                  Here are some important things that may will help you.
                </p>
                <p>How to create a room...</p>
                <p>how to register...</p>
                <p> How to log in</p>
                <p> ... </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </OwnHeader>
    );
  }
}

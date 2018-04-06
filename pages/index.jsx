//Imports
import PropTypes from "prop-types";
import React, { Component } from "react";
import Link from "next/link";
import OwnHeader from "../components/Header";
import {
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
  Visibility
} from "semantic-ui-react";

//Header Settings
const HomepageHeading = () => (
  <Container text>
    <Header
      as="h1"
      content="Welcome on StreamTogether"
      inverted
      style={{
        fontSize: "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: "2em"
      }}
    />
    <Header
      as="h2"
      content="Stream videos with your friends!"
      inverted
      style={{
        fontSize: "1.7em",
        fontWeight: "normal",
        marginTop: "1.5em"
      }}
    />
  
  </Container>
);

//Nav Bar
class DesktopContainer extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;
    const { activeItem } = this.state;

    return (
      <OwnHeader>
        <Responsive {...Responsive.onlyComputer}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              color="grey"
              textAlign="center"
              style={{ minHeight: 550, padding: "1em 0em" }}
              vertical
            >
              <Menu
                fixed={fixed ? "top" : null}
                inverted={!fixed}
                secondary={!fixed}
                size="large"
              >
                <Container>
                  <Menu.Item
                    name="home"
                    active={activeItem === "home"}
                    onClick={this.handleItemClick}
                    active
                  >
                    Start
                  </Menu.Item>
                  <Link href="/rooms">
                    <Menu.Item
                      name="rooms"
                      active={activeItem === "rooms"}
                      onClick={this.handleItemClick}
                    >
                      Rooms
                    </Menu.Item>
                  </Link>	  
                  <Link href="/help">
                    <Menu.Item
                      name="help"
                      active={activeItem === "help"}
                      onClick={this.handleItemClick}
                    >
                      Help
                    </Menu.Item>

                  </Link>
                  <Menu.Item position="right">
                    <Link href="/login">
                      <Button as="logIn" inverted={!fixed} color="green">
                        Log In
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button
                        as="signUp"
                        inverted={!fixed}
                        color="orange"
                        style={{ marginLeft: "0.5em" }}
                      >
                        Sign Up
                      </Button>
                    </Link>
                  </Menu.Item>
                </Container>
              </Menu>
              <HomepageHeading />
            </Segment>
          </Visibility>
          {children}
        </Responsive>
      </OwnHeader>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h1" style={{ fontSize: "2em" }}>
              StreamTogether step for step
            </Header>
			 <Header as="h4" style={{ fontSize: "2em" }}>
              Step 1:
            </Header>
            <p style={{ fontSize: "1.33em" }}>  
			    <Button primary size="huge">
					Create Room
				<Icon name="right arrow" />
				</Button>
            </p>
			<p style={{ fontSize: "1.33em" }}> 
			You do not need to register to create a room.
			</p>
			<p style={{ fontSize: "1.33em" }}> 
			But: Get more functions by creating your own account!
			</p>
          </Grid.Column>  
    	 </Grid.Row>
		 
		 <Grid.Row>
			<Grid.Column width={8}>
			 <Header as="h4" style={{ fontSize: "2em" }}>
              Step 2:
            </Header>
			<p style={{ fontSize: "1.33em" }}> 
			Share your room with others by inviting them.
			</p>
          </Grid.Column>
		  <Grid.Column floated="right" width={7}>
            <Image
              bordered
              rounded
              size="large"
              src="../static/Tomorrowland2015.jpg"
            />
          </Grid.Column>	
		</Grid.Row>
		
		<Grid.Row>
			<Grid.Column width={8}>
			 <Header as="h4" style={{ fontSize: "2em" }}>
              Step 3:
            </Header>
			<p style={{ fontSize: "1.33em" }}> 
			Watch. Videos. Together.
			</p>
          </Grid.Column>
		</Grid.Row>
			
			

		
		
		
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
	  <Grid.Row>
	  <Grid.Column textAlign="center">
	  <Header as="h4" style={{ fontSize: "2em" }}>
         Why do you should use StreamTogether?
      </Header>
	  </Grid.Column>
	  </Grid.Row>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Stream with friends
            </Header>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Another reason
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image avatar src="../static/Tomorrowland2015.jpg" />
              <b>I/b> am the BOSS</b>
            </p>
          </Grid.Column>
		    <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              And one more reason
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image avatar src="../static/Tomorrowland2015.jpg" />
              <b>I</b> am the <b>BOSS</b>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <Link href="/contact">
                  <List.Item as="a">Contact Us</List.Item>
                </Link>
                <Link href="/impressum">
                  <List.Item as="a">Impressum</List.Item>
                </Link>
                <Link href="/dataprivacy">
                  <List.Item as="a">Data privacy</List.Item>
                </Link>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <Link href="/help">
                  <List.Item as="a">Help</List.Item>
                </Link>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>Bla Bla BLAAA Bla Bla Bla Bla BLaaaa MIMIMIMIM</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default HomepageLayout;

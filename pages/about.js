import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/nextjs-material-kit/pages/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="ArciTech"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={8} sm={8} md={8}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src={require("assets/img/arcitech.svg")}
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <h1 className={classes.title}>
                    Projects
              </h1>
                  <h4 classname={classes.subtitle}>
                    Alongwith learning, hands on is quite important. If you have developed something interesting and want your project to be featured here then
                    Click the below button.
                <br />
                    <br />
                  </h4>
                  <br />
                  <div>
                    <Button
                      color="primary"
                      href="https://forms.gle/YWtu3sDrqGTH1DJe7"
                    >
                      Submit Project
                    </Button>
                    <br />
                    <br />
                  </div>
                </div>
              </GridItem>
            </GridContainer>


            {/* <div className={classes.description}>
              <p>
                Arcitech community is an initiative with the vision of creating a freindly enviroment
                where one will develop his/her own skills as well as guide others to develop theirs.
                Our goal is to develop solutions for real life problems spread the thinking of peer-to-peer learning.
              </p>
              <br />
              <p>
                This community is open for all those who are interested in learning, developing and
                sharing knowledge. Here, in Arcitech, we conduct workshops, seminars and other fun
                activities, thus making learning more easy and developing more fun.
              </p>
            </div> */}
            {/* <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "ArciTech",
                      tabIcon: "arcitech.svg",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2020/01/pylogo-1200.png?w=780&h=408&crop=1"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png    "
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "SNU",
                      tabIcon: "snu.png",
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="https://images.shiksha.com/mediadata/images/1551262547phpxCQNlo.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://snuniv.ac.in/assets/images/bg/bg8.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://snuniv.ac.in/assets/images/event/annual-fest-details.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="https://snuniv.ac.in/assets/images/snu-faculty-1.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://snuniv.ac.in/assets/images/event/tigsa-1.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="https://snuniv.ac.in/assets/images/event/1547447250_swami-vivekananda-156th_thumb.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

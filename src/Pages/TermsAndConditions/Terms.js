import { Container, Typography } from "@mui/material";
import React from "react";
import Footer from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import Bullet from "../../Assets/Images/bullet.svg";

const Terms = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar bs="TERMS" />
      <Container
        sx={{
          marginTop: "100px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "left",
            color: "#4A2902",
            fontWeight: "bold",
            fontFamily: "Sora",
          }}
        >
          Privacy Policy
        </Typography>

        <div
          sx={{
            my: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            width: "100%",
            paddingLeft: "0px",
            mx: 0,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Sora",
              my: 2,
            }}
          >
            Last updated: January 04, 2022
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              my: 1,
            }}
          >
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of your information when you use the
            Service and tells you about your privacy rights and how the law
            protects you.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              my: 1,
            }}
          >
            We use your Personal data to provide and improve the Service. By
            using the Service, you agree to the collection and use of
            information in accordance with this Privacy Policy. This Privacy
            Policy has been created with the help of the{" "}
            <a href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/">
              Privacy Policy Template.
            </a>
          </Typography>
        </div>

        <div>
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              justifyContent: "left",
              color: "#4A2902",
              fontWeight: "bold",
              my: 2,
              fontFamily: "Sora",
            }}
          >
            Interpretations And Definitions
          </Typography>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "left",
              color: "#4A2902",
              fontWeight: "bold",
              my: 2,
              fontFamily: "Sora",
            }}
          >
            Interpretations
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              my: 1,
            }}
          >
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "left",
              color: "#4A2902",
              fontWeight: "bold",
              my: 2,
              fontFamily: "Sora",
            }}
          >
            Definitions
          </Typography>
          <Typography
            sx={{
              fontFamily: "Sora",
              my: 1,
            }}
          >
            For the purposes of this Privacy Policy:
          </Typography>

          <div>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                {" "}
                <span style={{ fontWeight: "bold" }}>Account</span> means a
                unique account created for you to access our Service or parts of
                our Service.
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                {" "}
                <span style={{ fontWeight: "bold" }}>Company</span>
                (referred to as either "the Company", "We", "Us" or "Our" in
                this Agreement) refers to Legal Factory, Radhey Prem, 19-A,
                Ground Floor, near Ajmer Club, Civil Lines, Ajmer, Rajasthan
                305001.
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                {" "}
                <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                  Cookies
                </span>
                are small files that are placed on your computer, mobile device
                or any other device by a website, containing the details of your
                browsing history on that website among its many uses.
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                {" "}
                <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                  {" "}
                  Country
                </span>
                refers to: Rajasthan, India
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                {" "}
                <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                  Device
                </span>
                means any device that can access the Service such as a computer,
                a cellphone or a digital tablet.
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                {" "}
                <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                  {" "}
                  Personal Data
                </span>
                is any information that relates to an identified or identifiable
                individual.
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                {" "}
                <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                  Service
                </span>
                refers to the Website.
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                {" "}
                <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                  {" "}
                  Service Provider
                </span>
                means any natural or legal person who processes the data on
                behalf of the Company. It refers to third-party companies or
                individuals employed by the Company to facilitate the Service,
                to provide the Service on behalf of the Company, to perform
                services related to the Service or to assist the Company in
                analyzing how the Service is used.
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                {" "}
                <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                  Third-party Social Media Service
                </span>
                refers to any website or any social network website through
                which a User can log in or create an account to use the Service.
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                {" "}
                <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                  Usage Data
                </span>
                refers to data collected automatically, either generated by the
                use of the Service or from the Service infrastructure itself
                (for example, the duration of a page visit).
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                {" "}
                <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                  Website
                </span>
                refers to Legal Factory, accessible from{" "}
                <a href="https://legalfactory.in/">https://legalfactory.in</a>
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                {" "}
                <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                  You
                </span>
                means the individual accessing or using the Service, or the
                company, or other legal entity on behalf of which such
                individual is accessing or using the Service, as applicable.
              </Typography>
            </Typography>
          </div>

          <div>
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 2,
                fontFamily: "Sora",
              }}
            >
              Collecting and Using your Personal Data
            </Typography>

            <Typography
              variant="h5"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 2,
                fontFamily: "Sora",
              }}
            >
              Types of Data Collected
            </Typography>

            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 2,
                fontFamily: "Sora",
              }}
            >
              Personal Data
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              While using Our Service, We may ask you to provide Us with certain
              personally identifiable information that can be used to contact or
              identify you. Personally identifiable information may include, but
              is not limited to:
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                Email address
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                First name and last name
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                Phone number
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                Address, State, Province, ZIP/Postal code, City
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                Usage Data
              </Typography>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 2,
                fontFamily: "Sora",
              }}
            >
              Usage Data
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              Usage Data is collected automatically when using the Service.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              Usage Data may include information such as your Device's Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that you visit, the time and date of your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              When you access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device you use, your mobile device
              unique ID, the IP address of your mobile device, your mobile
              operating system, the type of mobile Internet browser you use,
              unique device identifiers and other diagnostic data.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              We may also collect information that your browser sends whenever
              you visit our Service or when you access the Service by or through
              a mobile device
            </Typography>

            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 2,
                fontFamily: "Sora",
              }}
            >
              Information from Third-Party Social Media Services
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              The Company allows you to create an account and log in to use the
              Service through the following Third-party Social Media Services:
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                Google
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                Facebook
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                Twitter
              </Typography>
            </Typography>

            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              If you decide to register through or otherwise grant us access to
              a Third-Party Social Media Service, We may collect Personal data
              that is already associated with your Third-Party Social Media
              Service's account, such as your name, your email address, your
              activities or your contact list associated with that account.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              You may also have the option of sharing additional information
              with the Company through your Third-Party Social Media Service's
              account. If you choose to provide such information and Personal
              Data, during registration or otherwise, you are giving the Company
              permission to use, share, and store it in a manner consistent with
              this Privacy Policy.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 2,
                fontFamily: "Sora",
              }}
            >
              Tracking Technologies and Cookies
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              We use Cookies and similar tracking technologies to track the
              activity on Our Service and store certain information. Tracking
              technologies used are beacons, tags, and scripts to collect and
              track information and to improve and analyze Our Service. The
              technologies We use may include:
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  Cookies or Browser Cookies.{" "}
                </span>
                A cookie is a small file placed on your Device. You can instruct
                your browser to refuse all Cookies or to indicate when a Cookie
                is being sent. However, if you do not accept Cookies, you may
                not be able to use some parts of our Service. Unless you have
                adjusted your browser setting so that it will refuse Cookies,
                our Service may use Cookies.
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />

              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  Flash Cookies.{" "}
                </span>{" "}
                Certain features of our Service may use local stored objects (or
                Flash Cookies) to collect and store information about your
                preferences or your activity on our Service. Flash Cookies are
                not managed by the same browser settings as those used for
                Browser Cookies. For more information on how you can delete
                Flash Cookies, please read "Where can I change the settings for
                disabling, or deleting local shared objects?" available at
                <a href="https://www.adobe.com/products/flashplayer/end-of-life.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_">
                  https://www.adobe.com/products/flashplayer/end-of-life.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_
                </a>
              </Typography>
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  Web Beacons.{" "}
                </span>{" "}
                Certain sections of our Service and our emails may contain small
                electronic files known as web beacons (also referred to as clear
                gifs, pixel tags, and single-pixel gifs) that permit the
                Company, for example, to count users who have visited those
                pages or opened an email and for other related website
                statistics (for example, recording the popularity of a certain
                section and verifying system and server integrity).
              </Typography>
            </Typography>

            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              Cookies can be "Persistent" or "Session" Cookies. Persistent
              Cookies remain on your personal computer or mobile device when you
              go offline, while Session Cookies are deleted as soon as you close
              your web browser. Learn more about cookies:{" "}
              <a href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking">
                Use of Cookies by Free Privacy Policy.
              </a>
            </Typography>

            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              We use both Session and Persistent Cookies for the purposes set
              out below:
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />

              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  Necessary / Essential Cookies{" "}
                </span>{" "}
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              Type: Session Cookies
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              Administered by: Us
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              Purpose: These Cookies are essential to provide you with services
              available through the Website and to enable you to use some of its
              features. They help to authenticate users and prevent fraudulent
              use of user accounts. Without these Cookies, the services that you
              have asked for cannot be provided, and We only use these Cookies
              to provide you with those services.
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />

              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  Cookies Policy / Notice Acceptance Cookies{" "}
                </span>{" "}
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              Type: Persistent Cookies
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              Administered by: Us
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              Purpose: These Cookies identify if users have accepted the use of
              cookies on the Website.
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />

              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  Functionality Cookies{" "}
                </span>{" "}
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              Type: Persistent Cookies
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              Administered by: Us
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              Purpose: These Cookies allow us to remember choices you make when
              you use the Website, such as remembering your login details or
              language preference. The purpose of these Cookies is to provide
              you with a more personal experience and to avoid you having to
              re-enter your preferences every time you use the Website.
            </Typography>

            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              For more information about the cookies we use and your choices
              regarding cookies, please visit our Cookies Policy or the Cookies
              section of our Privacy Policy.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 2,
                fontFamily: "Sora",
              }}
            >
              Use of your Personal Data
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              The Company may use Personal Data for the following purposes:
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  To provide and maintain our Service{" "}
                </span>
                , including to monitor the usage of our Service.
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  To manage your Account:{" "}
                </span>
                to manage your registration as a user of the Service. The
                Personal Data you provide can give you access to different
                functionalities of the Service that are available to you as a
                registered user.
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  For the performance of a contract:{" "}
                </span>
                the development, compliance and undertaking of the purchase
                contract for the products, items or services you have purchased
                or of any other contract with Us through the Service.
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  To contact you:{" "}
                </span>
                To contact you by email, telephone calls, SMS, or other
                equivalent forms of electronic communication, such as a mobile
                application's push notifications regarding updates or
                informative communications related to the functionalities,
                products or contracted services, including the security updates,
                when necessary or reasonable for their implementation.
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  To provide you{" "}
                </span>
                with news, special offers and general information about other
                goods, services and events which we offer that are similar to
                those that you have already purchased or enquired about unless
                you have opted not to receive such information.
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  To manage your requests:{" "}
                </span>
                To attend and manage your requests to Us.
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  For business transfers:{" "}
                </span>
                We may use your information to evaluate or conduct a merger,
                divestiture, restructuring, reorganization, dissolution, or
                other sale or transfer of some or all of Our assets, whether as
                a going concern or as part of bankruptcy, liquidation, or
                similar proceeding, in which Personal Data held by Us about our
                Service users is among the assets transferred.
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  For other purposes:{" "}
                </span>
                We may use your information for other purposes, such as data
                analysis, identifying usage trends, determining the
                effectiveness of our promotional campaigns and to evaluate and
                improve our Service, products, services, marketing and your
                experience.
              </Typography>
            </Typography>

            <Typography
              sx={{
                fontFamily: "Sora",
                my: 3,
                fontWeight:"bold"
              }}
            >
              We may share your personal information in the following
              situations:
            </Typography>

            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  With Service Providers:{" "}
                </span>
                We may share your personal information with Service Providers to
                monitor and analyze the use of our Service, to contact you.
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  For business transfers:{" "}
                </span>
                We may share or transfer your personal information in connection
                with, or during negotiations of, any merger, sale of Company
                assets, financing, or acquisition of all or a portion of Our
                business to another company.
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  With Affiliates:{" "}
                </span>
                We may share your information with Our affiliates, in which case
                we will require those affiliates to honor this Privacy Policy.
                Affiliates include Our parent company and any other
                subsidiaries, joint venture partners or other companies that We
                control or that are under common control with Us.
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  With business partners:{" "}
                </span>
                We may share your information with Our business partners to
                offer you certain products, services or promotions.
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  With other users:{" "}
                </span>
                when you share personal information or otherwise interact in the
                public areas with other users, such information may be viewed by
                all users and may be publicly distributed outside. If you
                interact with other users or register through a Third-Party
                Social Media Service, your contacts on the Third-Party Social
                Media Service may see your name, profile, pictures and
                description of your activity. Similarly, other users will be
                able to view descriptions of your activity, communicate with you
                and view your profile.
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  With your consent:{" "}
                </span>
                We may disclose your personal information for any other purpose
                with your consent.
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                <span style={{ marginRight: "3px", fontWeight: "bold" }}>
                  For business transfers:{" "}
                </span>
                We may use your information to evaluate or conduct a merger,
                divestiture, restructuring, reorganization, dissolution, or
                other sale or transfer of some or all of Our assets, whether as
                a going concern or as part of bankruptcy, liquidation, or
                similar proceeding, in which Personal Data held by Us about our
                Service users is among the assets transferred.
              </Typography>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 2,
                fontFamily: "Sora",
              }}
            >
              Retention of your Personal Data
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              The Company will retain your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              The Company will also retain Usage Data for internal analysis
              purposes. Usage Data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer time periods.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 2,
                fontFamily: "Sora",
              }}
            >
              Transfer of your Personal Data
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              Your information, including Personal Data, is processed at the
              Company's operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from your jurisdiction.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              our consent to this Privacy Policy followed by your submission of
              such information represents your agreement to that transfer.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              The Company will take all steps reasonably necessary to ensure
              that your data is treated securely and in accordance with this
              Privacy Policy and no transfer of your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of your data and other
              personal information.
            </Typography>

            <Typography
              variant="h5"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 2,
                fontFamily: "Sora",
              }}
            >
              Disclosure of your Personal Data
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 2,
                fontFamily: "Sora",
              }}
            >
              Business Transactions
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              If the Company is involved in a merger, acquisition or asset sale,
              your Personal Data may be transferred. We will provide notice
              before your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 2,
                fontFamily: "Sora",
              }}
            >
              Other legal requirements
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              The Company may disclose your Personal Data in the good faith
              belief that such action is necessary to:
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                Comply with a legal obligation
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                Protect and defend the rights or property of the Company
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                Protect the personal safety of Users of the Service or the
                public
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                Protect against legal liability
              </Typography>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 2,
                fontFamily: "Sora",
              }}
            >
              Security of your Personal Data
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              The security of your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect your Personal Data,
              We cannot guarantee its absolute security.
            </Typography>

            <Typography
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 3,
                fontFamily: "Sora",
              }}
            >
              Children's Privacy
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13. If you are a parent or guardian and you are
              aware that your child has provided Us with Personal Data, please
              contact Us. If We become aware that We have collected Personal
              Data from anyone under the age of 13 without verification of
              parental consent, We take steps to remove that information from
              Our servers.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              If We need to rely on consent as a legal basis for processing your
              information and your country requires consent from a parent, We
              may require your parent's consent before We collect and use that
              information.
            </Typography>

            <Typography
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 3,
                fontFamily: "Sora",
              }}
            >
              Links to Other Websites
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              Our Service may contain links to other websites that are not
              operated by Us. If you click on a third party link, you will be
              directed to that third party's site. We strongly advise you to
              review the Privacy Policy of every site you visit.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </Typography>

            <Typography
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 3,
                fontFamily: "Sora",
              }}
            >
              Changes to this Privacy Policy
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              We may update Our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              We will let you know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              "Last updated" date at the top of this Privacy Policy.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </Typography>

            <Typography
              variant="h4"
              sx={{
                display: "flex",
                justifyContent: "left",
                color: "#4A2902",
                fontWeight: "bold",
                my: 3,
                fontFamily: "Sora",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                fontFamily: "Sora",
                my: 1,
              }}
            >
              If you have any questions about this Privacy Policy, you can
              contact us:
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                By email : support@legalfactory.in
              </Typography>
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
                fontFamily: "Sora",
                display: "flex",
                width: "100%",
              }}
            >
              <img src={Bullet} alt="Bullet" style={{ marginRight: "15px" }} />
              <Typography sx={{ width: "100%", fontFamily: "Sora" }}>
                By visiting this page on our website:
               <a href="https://www.legalfactory.in">https://www.legalfactory.in</a> 
              </Typography>
            </Typography>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Terms;

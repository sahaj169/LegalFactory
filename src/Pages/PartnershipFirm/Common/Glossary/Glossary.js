import React from 'react'
import { Grid, Typography } from "@mui/material";

import Arrow from "../../../../Assets/Images/arraow.svg";

const Glossary = () => {
  return (
 <>
      <Grid
        container
        direction="column"
        sx={{ marginLeft: "20px", marginTop: "59px" }}
      >
        <Grid item>
          <Typography
            sx={{
              color: "#E99101",
              fontSize: "26px",
              fontWeight: "600",
              marginRight: "280px",
            }}
          >
            FAQs on LLP: Merger of Benefits of a Partnership Firm & Security of
            a Private Limited Company.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              marginTop: "41px",
              fontSize: "15px",
              fontWeight: "500",
              marginRight: "280px",
              color: "#773106",
            }}
          >
            <img
              src={Arrow}
              alt="Bullet"
              style={{ marginRight: "15px", height: "10px" }}
            />
            A What is the eligibility of designated partners/partners in an LLP?
          </Typography>
          <Typography
            sx={{
              marginTop: "20px",
              fontSize: "15px",
              fontWeight: "500",
              marginRight: "280px",
              color: "#773106",
            }}
          >
            Any new LLP can be started with at least 2 partners minimum one
            needs to be Indian resident . There is no maximum limit for number
            of partners.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          background: "rgba(233, 148, 16, 0.17)",
          marginLeft: "-30px",
          marginRight: "330px",
          padding: "30px",
          marginTop: "3rem",
        }}
      >
        <Grid container direction="column" sx={{ marginLeft: "20px" }}>
          <Grid item>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
              }}
            >
              <img
                src={Arrow}
                alt="Bullet"
                style={{ marginRight: "15px", height: "10px" }}
              />
              I am an NRI. Can I start an LLP business in India?
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
              }}
            >
              Any new LLP can be started with at least 2 partners minimum one
              needs to be Indian resident.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        sx={{ marginLeft: "20px", marginTop: "59px" }}
      >
        <Grid item>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "500",
              marginRight: "280px",
              color: "#773106",
            }}
          >
            <img
              src={Arrow}
              alt="Bullet"
              style={{ marginRight: "15px", height: "10px" }}
            />
            Can a body corporate start an LLP business in India?
          </Typography>
          <Typography
            sx={{
              marginTop: "20px",
              fontSize: "15px",
              fontWeight: "500",
              marginRight: "280px",
              color: "#773106",
            }}
          >
            In case of a body corporate being a partner of an LLP , a natural
            person has to be nominated for as a partner.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          background: "rgba(233, 148, 16, 0.17)",
          marginLeft: "-30px",
          marginRight: "330px",
          padding: "30px",
          marginTop: "3rem",
        }}
      >
        <Grid container direction="column" sx={{ marginLeft: "20px" }}>
          <Grid item>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
              }}
            >
              <img
                src={Arrow}
                alt="Bullet"
                style={{ marginRight: "15px", height: "10px" }}
              />
              What is an LLP agreement?
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
              }}
            >
              This is considered as a model code of conduct for the LLP and its
              partners as this specifies the mode of operation , nature of
              business,ratio of profit and loss etc besides other minute and
              specific details required for day to day operation of LLP.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        sx={{ marginLeft: "20px", marginTop: "59px" }}
      >
        <Grid item>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "500",
              marginRight: "280px",
              color: "#773106",
            }}
          >
            <img
              src={Arrow}
              alt="Bullet"
              style={{ marginRight: "15px", height: "10px" }}
            />
            Is it cheaper to run an LLP than a private limited company?
          </Typography>
          <Typography
            sx={{
              marginTop: "20px",
              fontSize: "15px",
              fontWeight: "500",
              marginRight: "280px",
              color: "#773106",
            }}
          >
            Yes, it is much cheaper to run an LLP than a private limited
            company.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          background: "rgba(233, 148, 16, 0.17)",
          marginLeft: "-30px",
          marginRight: "330px",
          padding: "30px",
          marginTop: "3rem",
        }}
      >
        <Grid container direction="column" sx={{ marginLeft: "20px" }}>
          <Grid item>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
              }}
            >
              <img
                src={Arrow}
                alt="Bullet"
                style={{ marginRight: "15px", height: "10px" }}
              />
              How does LLP registrations work for foreign directors?
            </Typography>
            <Typography
              sx={{
                marginTop: "20px",
                fontSize: "15px",
                fontWeight: "500",
                marginRight: "280px",
                color: "#773106",
              }}
            >
              As per FDI rules in india a , foreign investors are now permitted
              to have a 100% FDI in the automatic route LLP. The 100% FDI in the
              LLP is granted to foreign companies who operate in activities or
              sectors where 100% FDI is considered permissible through the
              channels of the automatic route. Thus providing ease of doing and
              set up business for forgein investors in case of an LLP. The LLPs
              will also be permitted to opt for downstream investment in a
              different company or even choose LLP in those sectors which allow
              100% FDI in accordance with the automatic route. This does not
              come up with any performance constraints that are FDI linked.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
    
  )
}

export default Glossary

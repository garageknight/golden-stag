import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import GoldFace from "../components/gold-face"
import SEO from "../components/seo"
import { Map } from "../components/Map"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`, `goldy`, `golden`, `stag`]}
    />
    <div>
      <p className="left">
        The Date:<span className="right">Friday 29th March</span>
      </p>
      <p className="left">
        The Time:<span className="right">12:00pm</span>
      </p>
      <p className="left">
        The Place:<span className="right">The Three Tuns</span>
      </p>
      <p className="left">
        The Plan: <span className="right">STAAAAAAAG!</span>
      </p>
    </div>
    <Map
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    <p className="left" style={{ paddingTop: 25 }}>
      Bring clothing suitable for outdoor activities.
    </p>
    <p className="left">Drivers required.</p>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <GoldFace />
    </div> */}
  </Layout>
)
// AIzaSyC8KdJVuEUcjDFj1isq2BS2GwFkm6TeWE4

export default IndexPage

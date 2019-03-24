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
    <h3>The Date: Friday 29th March </h3>
    <h3>The Time: 12:00pm</h3>
    <h3>The Place: The Three Tuns</h3>
    <h3>The Plan: STAAAAAAAG!</h3>
    <Map
      isMarkerShown
      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
    <h3 style={{ paddingTop: 25 }}>
      Bring clothing suitable for outdoor activities
    </h3>
    <h3>Drivers Required</h3>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <GoldFace />
    </div> */}
  </Layout>
)
// AIzaSyC8KdJVuEUcjDFj1isq2BS2GwFkm6TeWE4

export default IndexPage

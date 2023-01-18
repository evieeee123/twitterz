import {getProviders} from "next-auth/react"
import React from 'react'

// client side
export default function signin({providers}) {
  return (
    <div>
      <img src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png" alt="twitter img sign in" />
      <div className="">
        {Object.values(providers).map((provider) => (
          <div className="">
            <img src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="twitter logo" />
            <p>This app is created for leaning purposes</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// server side
export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers
    }
  }
}
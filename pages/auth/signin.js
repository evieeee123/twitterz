import {getProviders, signIn} from "next-auth/react"
import React from 'react'

// client side
export default function signin({providers}) {
  return (
    <div className="flex justify-center mt-20 space-x-4">
      <img className="object-cover md:w-44 md:h-80 rotate-6 hidden md:inline-flex" src="https://cdn.cms-twdigitalassets.com/content/dam/help-twitter/en/twitter-tips/desktop-assets/ch-01/ch12findphone.png.twimg.1920.png" alt="twitter img sign in" />
      <div className="">
        {Object.values(providers).map((provider) => (
          <div className="flex flex-col items-center">
            <img className="w-36 object-cover" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="twitter logo" />
            <p className="text-sm text-center italic my-10">This app is created for leaning purposes</p>
            <button onClick={() => signIn(provider.id, {callbackUrl: "/"})} className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500">Sign in with {provider.name}</button>
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
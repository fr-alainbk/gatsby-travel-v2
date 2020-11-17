import React from "react"
import { GiEarthAmerica } from "react-icons/gi"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"
import { FaMoneyCheck } from "react-icons/fa"

export const StatsData = [
  {
    icon: (
      <GiEarthAmerica
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "100+ Destinations To Visit",
    desc: "Travel to over 100 unique places",
  },
  {
    icon: (
      <MdAirplanemodeActive
        css={`
          color: #f3a82e;
        `}
      />
    ),
    title: "More Than 500k Trips Made",
    desc: "Numbers don't lie, over 500k trips made already.",
  },
  {
    icon: (
      <MdTimer
        css={`
          color: #f34f2e;
        `}
      />
    ),
    title: "Very Fast Support",
    desc: "Our support team is here for you 24/7",
  },
  {
    icon: (
      <FaMoneyCheck
        css={`
          color: #3af576;
        `}
      />
    ),
    title: "Amazing Deals",
    desc: "Among the lowest prices in the market",
  },
]

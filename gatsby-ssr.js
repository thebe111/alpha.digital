import * as React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/alpha.digital/fonts/gilroy-extrabold.otf"
      as="font"
      type="font/opentype"
      crossOrigin="anonymous"
      key="gilroyExtraboldFont"
    />,
  ])
}

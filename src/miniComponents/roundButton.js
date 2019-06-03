import React from "react"
/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import styled from "@emotion/styled"

const RoundButton = ({ color, ...props }) => {
  return (
    <div
      css={css`
				background-color: ${color};
				border-radius: 999px;
				${({stl}) => stl}
			`}
			{...props}
    >
      { props.children }
    </div>
  )
}

export default RoundButton

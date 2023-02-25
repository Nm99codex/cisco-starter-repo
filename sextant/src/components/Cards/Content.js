import React from 'react'

function Content(props) {
  return (
    <div className={`text-[1rem] font-[700] p-2 bg-slate-200 rounded-lg text-[${props.color}]`}>{props.children}</div>
  )
}

export default Content
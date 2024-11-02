import React from 'react'

export const experimental_ppr = true

const page = async({ params } : { params: Promise<{ id: string }>}) => {

  const id = (await params).id
  return (
    <>{id}</>
  )
}

export default page

import { client } from '@/sanity/lib/client'
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import React from 'react'

export const experimental_ppr = true

const page = async({ params } : { params: Promise<{ id: string }>}) => {

  const id = (await params).id
  console.log("Start up id:" ,id)
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id })
  if(!post) return notFound()

  return (
    <>{post.title}</>
  )
}

export default page

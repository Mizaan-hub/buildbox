import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
  `*[_type == "startup" && defined(slug.current)]
  | order(_createdAt desc){
   author->{
     _id,
     name,
     image,
     bio
   },
   _id,
   title,
   slug,
   _createdAt,
   views,
   category,
   image,
   description
  }`
)

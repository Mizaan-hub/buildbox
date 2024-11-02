import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(
  `*[_type == "startup" &&
  defined(slug.current ) &&
  !defined($search) || title match $search || category match $search || author->name match $search
  ]
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
);

export const STARTUP_BY_ID_QUERY = defineQuery(
  `*[_type == "startup" &&
  _id == $id][0]
  {
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
  description,
  pitch
  }`
);

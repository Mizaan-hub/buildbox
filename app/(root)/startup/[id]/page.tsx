import { formateDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import markdownIt from 'markdown-it'
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";

export const experimental_ppr = true;

const md = markdownIt()

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  console.log("Start up id:", id);
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });
  if (!post) return notFound();

  const parsedContent = md.render(post?.pitch || '')

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formateDate(post?._createdAt)}</p>
        <h1 className="heading">{post.title}</h1>
        <p className="sub-heading !max-w-5xl">{post.description}</p>
      </section>
      <section className="section_container">
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt="thumbnail"
          className="w-full h-auto rounded-xl"
        />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={post.author.image}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />
              <div>
                <p className="text-20-medium-1">{post.author.name}</p>
                <p className="text-16-medium-1">{post.author.username}</p>
              </div>
            </Link>
            <p className="category-tag-1">{post.category}</p>
          </div>

          <h3 className="text-30-bold-1">Pitch Details</h3>
          <hr className="divider" />
          {parsedContent? (
            <article
            className="prose prose-invert max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{__html: parsedContent}} />
          ):(
            <p className="no-result">No details Provided</p>
          )}
        </div>
        <hr className="divider" />

        {/* TODO: EDITOR SELECTED STARTUPS */}

        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default page;

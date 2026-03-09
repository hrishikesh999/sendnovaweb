import type { Metadata } from "next"
import Link from "next/link"
import { client } from "../../../sanity/lib/client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Blog — Sendnova",
  description:
    "Thoughts on thoughtful outreach. Read articles about cold email, personalization, and building real connections.",
  openGraph: {
    title: "Blog — Sendnova",
    description:
      "Thoughts on thoughtful outreach. Read articles about cold email, personalization, and building real connections.",
    type: "website",
  },
}

interface Post {
  _id: string
  title: string
  slug: { current: string }
  description: string
  publishedAt: string
}

async function getPosts(): Promise<Post[]> {
  return client.fetch(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      description,
      publishedAt
    }`
  )
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Blog
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600 md:text-xl">
            Thoughts on thoughtful outreach.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl md:mt-20">
          {posts.length === 0 ? (
            <p className="text-center text-slate-500">
              No posts yet. Check back soon.
            </p>
          ) : (
            <div className="divide-y divide-slate-100">
              {posts.map((post) => (
                <article key={post._id} className="py-10 first:pt-0 last:pb-0">
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="group block"
                  >
                    {post.publishedAt && (
                      <time className="text-sm text-slate-400">
                        {formatDate(post.publishedAt)}
                      </time>
                    )}
                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-blue-600 md:text-2xl">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="mt-3 text-base leading-relaxed text-slate-600">
                        {post.description}
                      </p>
                    )}
                    <span className="mt-4 inline-block text-sm font-medium text-blue-600">
                      Read more →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}

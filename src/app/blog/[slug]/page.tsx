import type { Metadata } from "next"
import type { PortableTextBlock } from "@portabletext/types"
import { notFound } from "next/navigation"
import { PortableText } from "@portabletext/react"
import Link from "next/link"
import { client } from "../../../../sanity/lib/client"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"

export const revalidate = 60

interface Post {
  _id: string
  title: string
  slug: { current: string }
  description: string
  publishedAt: string
  content: PortableTextBlock[]
}

async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      publishedAt,
      content
    }`,
    { slug }
  )
}

async function getAllSlugs(): Promise<string[]> {
  const slugs: { current: string }[] = await client.fetch(
    `*[_type == "post"].slug`
  )
  return slugs.map((s) => s.current)
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  return {
    title: `${post.title} — Sendnova Blog`,
    description: post.description,
    openGraph: {
      title: `${post.title} — Sendnova Blog`,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
    },
  }
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) notFound()

  return (
    <Section>
      <Container>
        <article className="mx-auto max-w-2xl">
          <header className="mb-12">
            <Link
              href="/blog"
              className="text-sm font-medium text-slate-400 transition-colors hover:text-slate-600"
            >
              ← Back to blog
            </Link>
            {post.publishedAt && (
              <time className="mt-6 block text-sm text-slate-400">
                {formatDate(post.publishedAt)}
              </time>
            )}
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              {post.title}
            </h1>
            {post.description && (
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                {post.description}
              </p>
            )}
          </header>

          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
            {post.content && <PortableText value={post.content} />}
          </div>
        </article>
      </Container>
    </Section>
  )
}

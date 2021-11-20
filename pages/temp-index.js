// import Link from '@/components/Link'
// import { PageSEO } from '@/components/SEO'
// import Tag from '@/components/Tag'
// import siteMetadata from '@/data/siteMetadata'
// import { getAllFilesFrontMatter } from '@/lib/mdx'
// import formatDate from '@/lib/utils/formatDate'
// import GhostContentAPI from "@tryghost/content-api";

// import NewsletterForm from '@/components/NewsletterForm'
// const CONTENT_API_KEY = "";
// const SITE_URL = "";
// const MAX_DISPLAY = 5

// export async function getStaticProps() {
//   const posts = await getAllFilesFrontMatter('blog')
//   const ghostPosts = await getPosts();

//   return { props: { posts, ghostPosts } }
// }

// // const api = new GhostContentAPI({
// //   url: SITE_URL,
// //   key: CONTENT_API_KEY,
// //   version: "v3",
// // });

// // export async function getPosts() {
// //   const posts = await api.posts
// //     .browse({
// //       limit: "all",
// //       fields: ["title", "slug", "custom_excerpt", "reading_time", "updated_at"],
// //       include :['tags']
// //     })
// //     .catch((err) => {
// //       console.error(err);
// //     });

// //   // const titles = posts.map(post => post.title)
// //   return posts;
// // }

// export default function Home({ posts, ghostPosts }) {
//   console.log('posts', ghostPosts)
//   return (
//     <>
//       <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
//       <div className="divide-y divide-gray-200 dark:divide-gray-700">
//         <div className="pt-6 pb-8 space-y-2 md:space-y-5">
//           <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
//             Latest
//           </h1>
//           <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
//             {siteMetadata.description}
//           </p>
//         </div>
//         <ul className="divide-y divide-gray-200 dark:divide-gray-700">
//           {!ghostPosts.length && 'No posts found.'}
//           {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
//             const { slug, date, title, summary, tags } = frontMatter
//             return (
//               <li key={slug} className="py-12">
//                 <article>
//                   <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
//                     <dl>
//                       <dt className="sr-only">Published on</dt>
//                       <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
//                         <time dateTime={date}>{formatDate(date)}</time>
//                       </dd>
//                     </dl>
//                     <div className="space-y-5 xl:col-span-3">
//                       <div className="space-y-6">
//                         <div>
//                           <h2 className="text-2xl font-bold leading-8 tracking-tight">
//                             <Link
//                               href={`/blog/${slug}`}
//                               className="text-gray-900 dark:text-gray-100"
//                             >
//                               {title}
//                             </Link>
//                           </h2>
//                           <div className="flex flex-wrap">
//                             {tags.map((tag) => (
//                               <Tag key={tag} text={tag} />
//                             ))}
//                           </div>
//                         </div>
//                         <div className="prose text-gray-500 max-w-none dark:text-gray-400">
//                           {summary}
//                         </div>
//                       </div>
//                       <div className="text-base font-medium leading-6">
//                         <Link
//                           href={`/blog/${slug}`}
//                           className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
//                           aria-label={`Read "${title}"`}
//                         >
//                           Read more &rarr;
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               </li>
//             )
//           })}
//           {/* {ghostPosts.slice(0, MAX_DISPLAY).map( ghostIndPost => {
//             const { custom_excerpt, slug, tags, title, updated_at } = ghostIndPost
//             return (
//               <li key={slug} className="py-12">
//                 <article>
//                   <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
//                     <dl>
//                       <dt className="sr-only">Published on</dt>
//                       <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
//                         <time dateTime={updated_at}>{formatDate(updated_at)}</time>
//                       </dd>
//                     </dl>
//                     <div className="space-y-5 xl:col-span-3">
//                       <div className="space-y-6">
//                         <div>
//                           <h2 className="text-2xl font-bold leading-8 tracking-tight">
//                             <Link
//                               href={`/blog/${slug}`}
//                               className="text-gray-900 dark:text-gray-100"
//                             >
//                               {title}
//                             </Link>
//                           </h2>
//                           <div className="flex flex-wrap">
//                             {tags.map((tag) => (
//                               <Tag key={tag} text={tag} />
//                             ))}
//                           </div>
//                         </div>
//                         <div className="prose text-gray-500 max-w-none dark:text-gray-400">
//                           {custom_excerpt}
//                         </div>
//                       </div>
//                       <div className="text-base font-medium leading-6">
//                         <Link
//                           href={`/blog/${slug}`}
//                           className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
//                           aria-label={`Read "${title}"`}
//                         >
//                           Read more &rarr;
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </article>
//               </li>
//             )
//           })} */}
//         </ul>
//       </div>
//       {posts.length > MAX_DISPLAY && (
//         <div className="flex justify-end text-base font-medium leading-6">
//           <Link
//             href="/blog"
//             className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
//             aria-label="all posts"
//           >
//             All Posts &rarr;
//           </Link>
//         </div>
//       )}
//       {siteMetadata.newsletter.provider !== '' && (
//         <div className="flex items-center justify-center pt-4">
//           <NewsletterForm />
//         </div>
//       )}
//     </>
//   )
// }
export default function Home() {
  return <></>
}
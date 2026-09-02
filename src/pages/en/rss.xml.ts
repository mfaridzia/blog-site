import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../../config/site.config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => {
    return !data.draft && data.lang === 'en';
  });

  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: siteConfig.title.en,
    description: siteConfig.description.en,
    site: context.site || siteConfig.siteUrl,
    items: posts.map((post) => {
      const slug = post.id.replace(/^en\//, '').replace(/\.(md|mdx)$/, '');
      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/en/posts/${slug}/`
      };
    }),
    customData: `<language>en-US</language>`
  });
}

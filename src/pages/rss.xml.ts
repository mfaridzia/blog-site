import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site.config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => {
    return !data.draft && data.lang === 'id';
  });

  posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: siteConfig.title.id,
    description: siteConfig.description.id,
    site: context.site || siteConfig.siteUrl,
    items: posts.map((post) => {
      const slug = post.id.replace(/^id\//, '').replace(/\.(md|mdx)$/, '');
      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/posts/${slug}/`
      };
    }),
    customData: `<language>id-ID</language>`
  });
}

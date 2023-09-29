interface Types {
  data?: readonly {
    article_id: string;
    category: string;
    content: string;
    country: string;
    creator: string;
    description: string;
    image_url: string;
    keywords: string;
    language: string;
    link: string;
    pubDate: string;
    source_id: string;
    source_priority: number;
    title: string;
    video_url: string;
  }[];
}

export default Types;
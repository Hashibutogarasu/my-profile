import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  metadata: {
    name: 'Karasu',
    description: '( ᐛ👐)',
    twitter_id: '@Columba_Karasu',
    url: new URL(
      process.env.NEXT_PUBLIC_VERCEL_URL || `http://localhost:${process.env.PORT || '8080'}`,
    ),
  },
};

export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  mode: 'payment' | 'subscription';
}

export const stripeProducts: StripeProduct[] = [
  {
    id: 'prod_TLgdE0eJfzWZdJ',
    priceId: 'price_1SOzG9KR0fraz8hdWPDTmUiP',
    name: 'Clynton Chorale',
    description: 'Premium choral music experience with professional arrangements and exclusive content.',
    price: 5.99,
    currency: 'SGD',
    mode: 'payment'
  },
  {
    id: 'chorale-piano-notes',
    priceId: 'price_chorale_piano_notes',
    name: 'Chorale Piano Notes',
    description: 'Master the art of chorale harmonization with these comprehensive piano arrangements and exercises.',
    price: 15,
    currency: 'SGD',
    mode: 'payment'
  },
  {
    id: 'etude-piano-notes',
    priceId: 'price_etude_piano_notes',
    name: 'Etude Piano Notes',
    description: 'Technical studies designed to improve your piano technique with challenging and musical exercises.',
    price: 20,
    currency: 'SGD',
    mode: 'payment'
  },
  {
    id: 'fantasie-piano-notes',
    priceId: 'price_fantasie_piano_notes',
    name: 'Fantasie Piano Notes',
    description: 'Explore the imaginative world of fantasy pieces with these expressive and creative piano compositions.',
    price: 18,
    currency: 'SGD',
    mode: 'payment'
  },
  {
    id: 'leider-ohne-worter-piano-notes',
    priceId: 'price_leider_ohne_worter_piano_notes',
    name: 'Leider Ohne Worter denken kann',
    description: 'Songs without words that speak through melody - expressive piano pieces that convey deep emotions.',
    price: 25,
    currency: 'SGD',
    mode: 'payment'
  },
  {
    id: 'nocturne-piano-notes',
    priceId: 'price_nocturne_piano_notes',
    name: 'Nocturne Piano Notes',
    description: 'Beautiful night music pieces that capture the essence of evening tranquility and romantic expression.',
    price: 12,
    currency: 'SGD',
    mode: 'payment'
  },
  {
    id: 'synthetic-scales-piano-notes',
    priceId: 'price_synthetic_scales_piano_notes',
    name: 'Synthetic Scales Piano Notes',
    description: 'Explore modern synthetic scales and their applications in contemporary piano composition and improvisation.',
    price: 22,
    currency: 'SGD',
    mode: 'payment'
  },
  {
    id: 'loh-serialism-piano-notes',
    priceId: 'price_loh_serialism_piano_notes',
    name: 'Loh Serialism Piano Notes',
    description: 'Advanced twelve-tone technique compositions showcasing modern serialist approaches to piano music.',
    price: 28,
    currency: 'SGD',
    mode: 'payment'
  },
  {
    id: 'pop-piano-notes',
    priceId: 'price_pop_piano_notes',
    name: 'Pop Piano Notes',
    description: 'Contemporary pop arrangements for piano featuring popular melodies and modern chord progressions.',
    price: 16,
    currency: 'SGD',
    mode: 'payment'
  },
  {
    id: 'indian-piano-notes',
    priceId: 'price_indian_piano_notes',
    name: 'Indian Piano Notes',
    description: 'Traditional Indian melodies and ragas adapted for piano with authentic ornamentations and scales.',
    price: 24,
    currency: 'SGD',
    mode: 'payment'
  },
  {
    id: 'chinese-piano-notes',
    priceId: 'price_chinese_piano_notes',
    name: 'Chinese Piano Notes',
    description: 'Beautiful Chinese folk melodies and traditional pieces arranged for piano with cultural authenticity.',
    price: 21,
    currency: 'SGD',
    mode: 'payment'
  },
  {
    id: 'neo-baroque-piano-notes',
    priceId: 'price_neo_baroque_piano_notes',
    name: 'Neo-baroque Piano Notes',
    description: 'Modern interpretations of baroque style featuring contemporary harmonies with classical structures.',
    price: 26,
    currency: 'SGD',
    mode: 'payment'
  },
  {
    id: 'x-golden-piano-notes',
    priceId: 'price_x_golden_piano_notes',
    name: 'X-Golden Piano Notes',
    description: 'Exclusive golden collection of premium piano compositions with advanced techniques and expressions.',
    price: 35,
    currency: 'SGD',
    mode: 'payment'
  },
  {
    id: 'soda-pop-piano-notes',
    priceId: 'price_soda_pop_piano_notes',
    name: 'Soda Pop Piano Notes',
    description: 'Fun and bubbly piano pieces with a modern twist, perfect for contemporary performance and enjoyment.',
    price: 14,
    currency: 'SGD',
    mode: 'payment'
  }
];

export const getProductById = (id: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.id === id);
};

export const getProductByPriceId = (priceId: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.priceId === priceId);
};
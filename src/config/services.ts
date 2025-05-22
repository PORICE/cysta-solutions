interface ServiceImages {
  [key: string]: {
    gallery: string[];
    thumbnail: string;
  };
}

export const serviceImages: ServiceImages = {
  residential: {
    thumbnail: '/images/services/residential/thumbnail.jpg',
    gallery: [
      '/images/services/residential/1.jpg',
      '/images/services/residential/2.jpg',
      '/images/services/residential/3.jpg',
      '/images/services/residential/4.jpg',
      '/images/services/residential/5.jpg',
      '/images/services/residential/6.jpg',
    ],
  },
  commercial: {
    thumbnail: '/images/services/commercial/thumbnail.jpg',
    gallery: [
      '/images/services/commercial/1.jpg',
      '/images/services/commercial/2.jpg',
      '/images/services/commercial/3.jpg',
      '/images/services/commercial/4.jpg',
      '/images/services/commercial/5.jpg',
      '/images/services/commercial/6.jpg',
    ],
  },
  exhibitions: {
    thumbnail: '/images/services/exhibitions/thumbnail.jpg',
    gallery: [
      '/images/services/exhibitions/1.jpg',
      '/images/services/exhibitions/2.jpg',
      '/images/services/exhibitions/3.jpg',
      '/images/services/exhibitions/4.jpg',
      '/images/services/exhibitions/5.jpg',
      '/images/services/exhibitions/6.jpg',
    ],
  },
  // Add other services as needed
};

export const getServiceImages = (serviceSlug: string) => {
  return serviceImages[serviceSlug as keyof typeof serviceImages] || {
    thumbnail: '/images/placeholder.svg',
    gallery: Array(6).fill('/images/placeholder.svg'),
  };
};

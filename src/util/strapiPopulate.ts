// lib/strapiPopulate.ts
export const servicePopulate = {
  Blocks: {
    on: {
      "hero.hero": {
        populate: {
          featuredImage: { fields: ["url"] },
        },
      },
      "global.services-second-section": {
        populate: {
          serviceCards: {
            populate: { icon: { fields: ["url"] } },
          },
        },
      },
      "global.value-card": {
        populate: { cta: true },
      },
      "global.testimonial-section": {
        populate: {
          testimonialCards: {
            populate: { profileImage: { fields: ["url"] } },
          },
        },
      },
      "global.faq-section": {
        populate: { faqs: true },
      },
      "global.explore-more-services-section": {
        populate: {
          exploreMoreServiceCards: {
            populate: { exploreMoreServicesCta: true },
          },
        },
      },
      "global.from-our-blog-section": {
        populate: { fromOurBlogCards: true },
      },
      "global.need-to-take-action-section": {
        populate: ["cta"],
      },
    },
  },
};

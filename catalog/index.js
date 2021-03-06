import React from "react";
import ReactDOM from "react-dom";
import { Catalog, pageLoader } from "catalog";

const pages = [
  {
    path: "/",
    title: "Welcome",
    content: pageLoader(() => import("./docs/intro.md"))
  },
  {
    title: "Development",
    pages: [
      {
        path: "/setup",
        title: "Setup",
        content: pageLoader(() => import("./docs/development/intro.md"))
      },
      {
        path: "/global-fragments",
        title: "Global Fragments",
        content: pageLoader(() => import("./docs/development/global-fragments.md"))
      },
      {
        path: "/layouts-partials",
        title: "Layouts & Partials",
        content: pageLoader(() => import("./docs/development/layouts-partials.md"))
      },
      {
        path: "/favicon",
        title: "Favicon",
        content: pageLoader(() => import("./docs/development/favicon.md"))
      },
      {
        path: "/image-optimization",
        title: "Image Optimization",
        content: pageLoader(() => import("./docs/development/image-optimization.md"))
      }
    ]
  },
  {
    title: "Basics",
    pages: [
      {
        path: "/colors",
        title: "Colors",
        content: pageLoader(() => import("./docs/basics/colors.md"))
      },
      {
        path: "/typography",
        title: "Typography",
        content: pageLoader(() => import("./docs/basics/type.md"))
      },
      {
        path: "/buttons",
        title: "Buttons",
        content: pageLoader(() => import("./docs/basics/buttons.md"))
      }
    ]
  },
  {
    path: "/social-media",
    title: "Social Media",
    content: pageLoader(() => import("./docs/social-media/social-media.md"))
  },
  {
    title: "Header Options",
    pages: [
      {
        path: "/topbar",
        title: "Top Bar",
        content: pageLoader(() => import("./docs/elements/headers/topbar.md"))
      },
      {
        path: "/basic",
        title: "Basic Header",
        content: pageLoader(() => import("./docs/elements/headers/basic-header.md"))
      },
      {
        path: "/inline",
        title: "Inline Header",
        content: pageLoader(() => import("./docs/elements/headers/inline-header.md"))
      }
    ]
  },
  {
    title: "Sliders & Main Banners",
    pages: [
      {
        path: "/full-width-slider",
        title: "Full Width Slider",
        content: pageLoader(() => import("./docs/elements/sliders/full-width-slider.md"))
      },
      {
        path: "/contained-slider",
        title: "Contained Slider",
        content: pageLoader(() => import("./docs/elements/sliders/contained-slider.md"))
      },
      {
        path: "/2-column-slider",
        title: "2 Column Slider",
        content: pageLoader(() => import("./docs/elements/sliders/2-column-slider.md"))
      },
      {
        path: "/static-banner",
        title: "Static Banner",
        content: pageLoader(() => import("./docs/elements/sliders/static.md"))
      }
    ]
  },
  {
    title: "Call to Actions",
    pages: [
      {
        path: "/cta-mixin",
        title: "CTA Mixin",
        content: pageLoader(() => import("./docs/elements/calltoactions/cta-mixin.md"))
      },
      {
        path: "/basic-cta",
        title: "Basic CTA",
        content: pageLoader(() => import("./docs/elements/calltoactions/cta-basic.md"))
      },
      {
        path: "/2-column-cta",
        title: "2 Column",
        content: pageLoader(() => import("./docs/elements/calltoactions/cta-2-column.md"))
      },
      {
        path: "/cta-fullwidth",
        title: "Full Width",
        content: pageLoader(() => import("./docs/elements/calltoactions/cta-full.md"))
      }
    ]
  },
  {
    title: "Homepage Blocks",
    pages: [
      {
        path: "/homepage-intro",
        title: "Intro",
        content: pageLoader(() => import("./docs/homepage/intro.md"))
      },
      {
        path: "/homepage-standard",
        title: "Typical",
        content: pageLoader(() => import("./docs/homepage/typical.md"))
      },
      {
        path: "/homepage-services",
        title: "Services",
        content: pageLoader(() => import("./docs/homepage/services.md"))
      },
      {
        path: "/logo-bar",
        title: "Logo Bar",
        content: pageLoader(() => import("./docs/homepage/logo-bar.md"))
      },
      {
        path: "/testimonial-slider",
        title: "Testimonial Slider",
        content: pageLoader(() => import("./docs/homepage/testimonials.md"))
      },
      {
        path: "/manufacturers",
        title: "Manufacturers",
        content: pageLoader(() => import("./docs/homepage/manufacturer.md"))
      }
    ]
  },
  {
    title: "Footers",
    pages: [
      {
        path: "/footer-basic.md",
        title: "Basic",
        content: pageLoader(() => import("./docs/footer/basic.md"))
      },
      {
        path: "/standard-footer",
        title: "3 Column Footer",
        content: pageLoader(() => import("./docs/footer/3-column-footer.md"))
      }
    ]
  },
  {
    path: "/geo-pages",
    title: "Geo Pages",
    content: pageLoader(() => import("./docs/geo-page/geo-page.md"))
  },{
    title: "Widgets/Components",
    pages: [
      {
        path: "/media-box",
        title: "Media Box (Staff & Map)",
        content: pageLoader(() => import("./docs/widgets/widgets.md"))
      },
      {
        path: "/hearing-aids",
        title: "Hearing Aids",
        content: pageLoader(() => import("./docs/components/hearing-aids.md"))
      },
      {
        path: "/survey",
        title: "Hearing Survey",
        content: pageLoader(() => import("./docs/widgets/survey.md"))
      },
      {
        path: "/blog-news",
        title: "Blog & News Feed",
        content: pageLoader(() => import("./docs/widgets/blog-news.md"))
      }
    ]
  }
];

ReactDOM.render(
  <Catalog
    title="Audiology Design Design System"
    pages={pages}
    theme={{
      pageHeadingBackground: "#e04f3d",
      brandColor: "#333",
      sidebarColorHeading: "#7264ac",
      sidebarColorText: "#1c2a39"
    }}
  />,
  document.getElementById("catalog")
);

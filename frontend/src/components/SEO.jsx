import React from "react";
import { Helmet } from "react-helmet";
function SEO({ page }) {
  const { title, description } = {};

  return (
    <Helmet>
      <title>{title || "Blenzo"}</title>
      <meta
        name="description"
        content={description || "default description"}
      ></meta>
    </Helmet>
  );
}

export default SEO;

import { getStrapiURL } from "@/lib/utils";
import qs from "qs";
import { Header } from "./Header";

async function loader() {
  const { fetchData } = await import("@/lib/fetch");

  const path = "/api/global";
  const baseUrl = getStrapiURL();

  const query = qs.stringify({
    populate: {
      topnav: {
        populate: {
          logoLink: {
            populate: {
              image: {
                fields: ["url", "alternativeText", "name"],
              },
            },
          },
          link: {
            populate: true,
          },
          cta: {
            populate: true,
          },
        },
      },
    },
  });

  const url = new URL(path, baseUrl);
  url.search = query;

  const data = await fetchData(url.href);
  return data;
}

export async function Navbar() {
  const data = await loader();
  if (!data) return null;
  const { topnav } = data;
  const { logoLink, link: navigation, cta } = topnav;

  return <Header logoLink={logoLink} links={navigation} cta={cta} />;
}

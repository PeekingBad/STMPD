import Link from "next/link";
import Image from "next/image";
import { getStrapiURL } from "@/lib/utils";
import qs from "qs";

import { SocialIcon } from "react-social-icons";
import { Container } from "@/components/Container";

async function loader() {
  const { fetchData } = await import("@/lib/fetch");
  const path = "/api/global";
  const baseUrl = getStrapiURL();

  const query = qs.stringify({
    populate: {
      footer: {
        populate: {
          logoLink: {
            populate: {
              image: {
                fields: ["url", "alternativeText", "name"],
              },
            },
          },
          menuLink: {
            populate: {
              links: {
                populate: true,
              },
            },
          },
          socialLink: {
            populate: true,
          },
          legal: {
            populate: true,
          },
        },
      },
    },
  });

  const url = new URL(path, baseUrl);
  url.search = "?" + query;
  const data = await fetchData(url.href);
  return data;
}

interface FooterData {
  id: number;
  footer: {
    logoLink: {
      id: number;
      text: string;
      href: string;
      image: {
        id: number;
        url: string;
        alternativeText: string | null;
        name: string;
      };
    };
    socialLink: {
      id: number;
      href: string;
      icon: {
        id: number;
        url: string;
        alternativeText: string | null;
        name: string;
      };
      text: string;
    }[];
    legal: {
      id: number;
      text: string;
      href: string;
    };
    menuLink: {
      id: number;
      title: string;
      links: {
        id: number;
        href: string;
        text: string;
        external: boolean;
      }[];
    }[];
  };
}

export async function Footer() {
  const data = (await loader()) as FooterData;
  if (!data || !data.footer) return null;

  const { logoLink, menuLink, socialLink, legal } = data.footer;

  return (
    <div className="relative">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              <Link
                href={logoLink.href}
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
              >
                <Image
                  src={logoLink.image.url}
                  alt={logoLink.image.alternativeText || "logo"}
                  width={32}
                  height={32}
                  className="w-8"
                />
                <span>{logoLink.text}</span>
              </Link>
            </div>

            <div className="mt-5">
              <a
                href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
                target="_blank"
                rel="noopener"
                className="relative block w-44"
              >
                <Image
                  src="/img/vercel.svg"
                  alt="Powered by Vercel"
                  width="212"
                  height="44"
                />
              </a>
            </div>
          </div>

          {menuLink.map((item) => (
            <div key={item.id}>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
                {item.links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              {socialLink.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-indigo-500"
                >
                  <span className="sr-only">{item.text}</span>
                  <SocialIcon
                    network={item.text.toLocaleLowerCase()}
                    url={item.href}
                    target="_blank"
                    style={{ height: 25, width: 25 }}
                    bgColor="transparent"
                    fgColor="currentColor"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          <Link href={legal.href} className="hover:underline">
            {legal.text}
          </Link>
        </div>
      </Container>
    </div>
  );
}

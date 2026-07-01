import { Metadata } from "next";
import ProductDetailClient from "./productSlugClient";


type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Generate static params automatically for all products
export async function generateStaticParams() {
  try {
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://citiplumb.com";

    const response = await fetch(`${baseUrl}/api/products`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("Failed to fetch products for static params");
      return [];
    }

    const products = await response.json();
    console.log(`Generated static params for ${products.length} products`);

    return products.map((product: any) => ({
      slug: product.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Fungsi helper untuk fetch product
async function fetchProduct(slug: string) {
  try {
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://citiplumb.com";

    const response = await fetch(`${baseUrl}/api/products/${slug}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// Fungsi helper untuk generate metadata
function generateProductMetadata(product: any, slug: string): Metadata {
  if (!product) {
    return {
      title: "Product Not Found | CITI PLUMB",
      description: "The product you're looking for could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const name = product.name || "Product";
  const description =
    product.description || `${name} - Premium quality product from CITI PLUMB`;
  const category = product.category?.name || "";
  const image = product.image || "/images/default-product.jpg";

  const keywords = [
    name,
    "CITI PLUMB",
    category,
    "kitchen fixtures",
    "bathroom fixtures",
    "plumbing products",
    "premium plumbing",
    "Indonesia manufacturer",
    name.toLowerCase().replace(/\s+/g, "-"),
  ]
    .filter(Boolean)
    .join(", ");

  return {
    title: `${name} | CITI PLUMB - Premium Plumbing Products`,
    description: description,
    keywords: keywords,
    openGraph: {
      title: `${name} | CITI PLUMB`,
      description: description,
      type: "website",
      url: `https://citiplumb.com/products/${slug}`,
      siteName: "CITI PLUMB",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} | CITI PLUMB`,
      description: description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://citiplumb.com/products/${slug}`,
    },
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: Promise<Metadata>,
): Promise<Metadata> {
  const { slug } = await params;
  const product = await fetchProduct(slug);
  return generateProductMetadata(product, slug);
}

// Server Component - tanpa 'use client'
export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await fetchProduct(slug);

  // Jika produk tidak ditemukan
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Product Not Found
          </h1>
          <p className="text-gray-600 mt-2">
            The product you're looking for does not exist.
          </p>
          <a
            href="/products"
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            Back to Products
          </a>
        </div>
      </div>
    );
  }

  // Render client component dengan data produk
  return <ProductDetailClient />;
}

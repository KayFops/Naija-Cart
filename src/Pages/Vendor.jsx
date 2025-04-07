import { MainLayout } from "@/components/layout/main-layout";
import { VendorCard } from "@/components/ui/vendor-card";
import { vendors } from "@/data/products";

export default function Vendors() {
  return (
    <MainLayout>
      <div className="bg-muted py-10">
        <div className="naija-container">
          <h1 className="text-3xl font-bold">Our Vendors</h1>
          <p className="mt-2 text-muted-foreground">
            Trusted Nigerian businesses and artisans
          </p>
        </div>
      </div>

      <section className="py-10">
        <div className="naija-container">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {vendors.map((vendor) => (
              <VendorCard
                key={vendor.id}
                id={vendor.id}
                name={vendor.name}
                image={vendor.image}
                description={vendor.description}
                rating={vendor.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-10">
        <div className="naija-container">
          <h2 className="mb-4 text-2xl font-bold">Become a Vendor</h2>
          <div className="rounded-lg bg-background p-6 shadow">
            <p className="mb-4 text-muted-foreground">
              Join our marketplace and showcase your products to thousands of customers across Nigeria and beyond.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-semibold">Create an Account</h3>
                <p className="text-sm text-muted-foreground">
                  Sign up for a vendor account and complete your business profile.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-semibold">List Your Products</h3>
                <p className="text-sm text-muted-foreground">
                  Upload your product catalog with high-quality images and descriptions.
                </p>
              </div>
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-semibold">Start Selling</h3>
                <p className="text-sm text-muted-foreground">
                  Manage orders, track sales, and grow your business with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
import React from 'react'

const PopularPro = () => {
  return (
    <section className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="naija-container">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Popular Products</h2>
            <Button asChild variant="outline">
              <Link to="/categories">View All</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default PopularPro
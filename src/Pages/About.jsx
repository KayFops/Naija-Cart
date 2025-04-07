import React from 'react'

const About = () => {
  return (
    <div className='px-[70px]'>
        <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-naija-green/80 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1596012510343-de296879e189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="About Naija Cart"
          className="h-[40vh] w-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="naija-container">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl font-bold">About Naija Cart</h1>
              <p className="mt-4 text-lg">
                Connecting Nigerian artisans and businesses with customers worldwide
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="naija-container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              Naija Cart was founded in 2023 with a mission to showcase the rich cultural heritage and craftsmanship of Nigeria to the world. We recognized the immense talent and creativity of Nigerian artisans, farmers, and entrepreneurs but saw that they lacked a dedicated platform to reach customers globally.
            </p>
            <p className="mb-4 text-muted-foreground">
              Our founders, a team of Nigerian tech enthusiasts and business professionals, came together to create a marketplace that celebrates Nigerian products while providing opportunities for local businesses to thrive in the digital economy.
            </p>
            <p className="text-muted-foreground">
              Today, Naija Cart connects thousands of Nigerian vendors with customers across the country and beyond, serving as a bridge between traditional craftsmanship and modern e-commerce.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted py-12">
        <div className="naija-container">
          <h2 className="mb-8 text-center text-2xl font-bold">Our Mission & Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-background p-6 shadow">
              <div className="mb-4 rounded-full bg-naija-green/10 p-3 text-naija-green inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold">Global Reach</h3>
              <p className="text-sm text-muted-foreground">
                We aim to showcase Nigerian products to a global audience, creating international market access for local vendors.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow">
              <div className="mb-4 rounded-full bg-naija-green/10 p-3 text-naija-green inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold">Cultural Preservation</h3>
              <p className="text-sm text-muted-foreground">
                We celebrate and preserve Nigerian cultural heritage by promoting traditional crafts and products.
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow">
              <div className="mb-4 rounded-full bg-naija-green/10 p-3 text-naija-green inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="mb-2 font-semibold">Economic Empowerment</h3>
              <p className="text-sm text-muted-foreground">
                We're committed to supporting small businesses and artisans, helping them grow through e-commerce.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="naija-container">
          <h2 className="mb-8 text-center text-2xl font-bold">Our Team</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                  alt="CEO"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-semibold">Oluwaseun Adebayo</h3>
              <p className="text-sm text-muted-foreground">CEO & Co-Founder</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                  alt="CTO"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-semibold">Amara Okafor</h3>
              <p className="text-sm text-muted-foreground">CTO & Co-Founder</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                  alt="COO"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-semibold">Emeka Nwachukwu</h3>
              <p className="text-sm text-muted-foreground">COO</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                  alt="CMO"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-semibold">Fatima Ibrahim</h3>
              <p className="text-sm text-muted-foreground">CMO</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
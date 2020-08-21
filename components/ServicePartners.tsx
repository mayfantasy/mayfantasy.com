const ServicePartners = () => {
  const items: Array<{ name: string; src: string }> = [
    { name: 'Google Cloud Logo', src: '/logo/google-cloud-logo.png' }, // Google Cloud
    { name: 'Vercel Logo', src: '/logo/vercel-logo.png' }, // Vercel
    { name: 'Nextjs Logo', src: '/logo/next-logo.png' }, // NextJS
    { name: 'Reactjs Logo', src: '/logo/react-logo.png' }, // React
    { name: 'FaunaDB Logo', src: '/logo/faunadb-logo.png' }, // FunaDB
    { name: 'MongoDB logo', src: '/logo/mongo-logo.png' }, // MongoDB
    { name: 'Shopify Logo', src: '/logo/shopify-logo.png' }, // Shopify
    { name: 'Mailchimp Logo', src: '/logo/mailchimp-logo.png' }, // Mailchimp
    { name: 'Zoho Logo', src: '/logo/zoho-logo.png' }, // Zoho
    { name: 'Adobe Logo', src: '/logo/adobe-logo.png' } // Adobe
  ]
  return (
    <div className="flex flex-row flex-wrap">
      {items.map((item) => (
        <div
          className="w-1/3 lg:w-1/5 p-3"
          style={{ height: 60 }}
          key={item.name}
        >
          <img
            loading="lazy"
            alt={item.name}
            src={item.src}
            className="h-full"
          />
        </div>
      ))}
    </div>
  )
}

export default ServicePartners

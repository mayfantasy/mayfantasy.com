const ServicePartners = () => {
  const items: string[] = [
    '/logo/google-cloud-logo.png', // Google Cloud
    '/logo/vercel-logo.png', // Vercel
    '/logo/next-logo.png', // NextJS
    '/logo/react-logo.png', // React
    '/logo/faunadb-logo.png', // FunaDB
    '/logo/mongo-logo.png', // MongoDB
    '/logo/shopify-logo.png', // Shopify
    '/logo/mailchimp-logo.png', // Mailchimp
    '/logo/zoho-logo.png', // Zoho
    '/logo/adobe-logo.png' // Adobe
  ]
  return (
    <div className="flex flex-row flex-wrap">
      {items.map((item) => (
        <div className="w-1/3 lg:w-1/5 p-3" style={{ height: 60 }} key={item}>
          <img src={item} className="h-full" />
        </div>
      ))}
    </div>
  )
}

export default ServicePartners

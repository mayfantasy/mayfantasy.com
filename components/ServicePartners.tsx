const ServicePartners = () => {
  const items: string[] = [
    '/google-cloud-logo.png', // Google Cloud
    '/vercel-logo.png', // Vercel
    '/next-logo.png', // NextJS
    '/react-logo.png', // React
    '/faunadb-logo.png', // FunaDB
    '/mongo-logo.png', // MongoDB
    '/shopify-logo.png', // Shopify
    '/mailchimp-logo.png', // Mailchimp
    '/zoho-logo.png', // Zoho
    '/adobe-logo.png' // Adobe
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

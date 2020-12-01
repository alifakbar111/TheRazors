export type ProductType = {
  id: number
  title: string
  price: number
  description: string
  featured: boolean
  created_at: string
  updated_at: string
  image: ImageType
}

export type ImageType = {
  id: number
  name: string
  hash: string
  sha256: string
  ext: string
  mime: string
  size: string
  url: string
  provider: string
  provider_metadata: number,
  created_at: string
  updated_at: string
}
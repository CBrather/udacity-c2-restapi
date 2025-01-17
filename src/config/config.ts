export const config = {
  username: process.env.UDAGRAM_POSTGRES_USERNAME,
  password: process.env.UDAGRAM_POSTGRES_PASSWORD,
  database: process.env.UDAGRAM_POSTGRES_DATABASE,
  host: process.env.UDAGRAM_POSTGRES_HOST,
  dialect: 'postgres',
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.UDAGRAM_MEDIA_BUCKET,
  jwtSecret: process.env.UDAGRAM_JWT_SECRET,
  imageFilterUrl: process.env.UDAGRAM_IMAGE_FILTER_URL
};

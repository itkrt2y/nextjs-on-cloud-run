# Next.js on Google Cloud Run

## Keywords

- Google Cloud Run
- Next.js
- TypeScript

## Development

```
yarn install
yarn dev
```

## Deploy

https://cloud.google.com/run/docs/quickstarts/build-and-deploy

### Build image

```
gcloud builds submit \
  --tag gcr.io/$(gcloud config get-value project)/nextjs-on-cloud-run
```

### Deploy image

```
gcloud run deploy \
  --image gcr.io/$(gcloud config get-value project)/nextjs-on-cloud-run \
  --platform managed
```

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

### Build image

```
gcloud builds submit \
  --tag gcr.io/$(gcloud config get-value project)/helloworld
```

### Deploy image

```
gcloud beta run deploy \
  --image gcr.io/$(gcloud config get-value project)/helloworld \
  --platform managed
```

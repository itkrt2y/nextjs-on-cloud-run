# Next.js on Google Cloud Run template

## Keywords

- Google Cloud Run
- Next.js

## How to use

### Development

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

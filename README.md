# BP Service Stations Tracker Example App

## Tech Stack

**Client:** React Native, TypeScript

**Server:** Node, Express, GraphQL

## Run Locally

Clone the project

```bash
git clone https://github.com/jhjdev/bpexercise
```

Go to the project directory

```bash
cd bpexercise
```

Install dependencies

```bash
yarn
```

Install the GraphQL API

```bash
cd chargepoint-server
npm install
```

Build for Android

```bash
cd android
./gradlew clean
```

Build for ios

```bash
cd ios
pod install
```

Start the API

```bash
yarn api
```

Start Metro Bundler

```bash
yarn start
```

Start the iOS Simulator

```bash
yarn ios
```

Start the Android Emulator

```bash
yarn android
```

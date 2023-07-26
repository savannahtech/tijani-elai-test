# bookstore-frontend-ass

Starbucks Frontend Application with NextJs

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

# Production url

Visit on [Vercel](https://tijani-elai-test-o7bq.vercel.app/)

# localhost url

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

```
Test Login details
email: olutimedia@gmail.com
pass: password
```

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

<details>
  <summary><h2>Deploy on Local</h2></summary>

### 🧑‍🍳 Before We Start

1. Create a Postgresql locally or with any cloud free host account, such as AWS RDS.

### 1. Get connection details

1. Navigate to your RDS cluster's dashboard.
2. Get **Endpoint**, **Port** and **User** field from the Connection tab.
3. Build your DATABASE_URL string: `postgres://<User>:<Password>@<Endpoint>:<Port>/<DB_NAME>?sslaccept=strict`

You will use this DATABASE_URL string to connect to TiDB Cloud Serverless cluster later.

### 2. Deploy on your workspace

1. Clone the code.
   ```shell
   git clone https://github.com/savannahtech/tijani-elai-test.git
   cd tijani-elai-test
   ```
2. Set DATABASE_URL environment variables.
   ```shell
   export DATABASE_URL=${your_DATABASE_URL_string}
   ```
3. Install dependence.
   ```shell
   npm install .
   ```
4. Migrate your database.
   ```shell
   npx prisma migrate dev / npx prisma db push
   ```
5. Start the app.
   ```shell
   npm run dev
   ```

🎉 Mission Completes.

The app is now running, navigate to http://localhost:3000/ in your browser to explore its UI.

</details>

<details>
  <summary><h2>Deploy on Vercel</h2></summary>

### 🧑‍🍳 Before We Start

1. Create a [AWS RDS](https://signin.aws.amazon.com/) account and get your free trial cluster.
2. Create a [Vercel](https://vercel.com/signup) account.

### 1. Get connection details

1. Navigate to your RDS cluster's dashboard.
2. Get **Endpoint**, **Port** and **User** field from the Connection tab.
3. Build your DATABASE_URL string: `postgres://<User>:<Password>@<Endpoint>:<Port>/<db_name>?sslaccept=strict`

You will use this DATABASE_URL string to connect to AWS RDS Cloud cluster later.

### 2. Deploy on Vercel

The **Deploy** button will take you through Vercel's project creation flow. Vercel will help to clone this job to your own GitHub repository and automatically deploy it.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-name=tijani-elai-test&repository-url=https%3A%2F%2Fgithub.com%2Fsavannahtech%2Ftijani-elai-test&env=DATABASE_URL&envDescription=tijani-elai-test%20Cloud%20connection%20string)

1. Click the **Deploy** button.
2. Click **GitHub** button and authenticate GitHub account.
3. Select your **Git Scope** and fill in **Repository Name** for your own GitHub repository.
4. Click **Create** to create the git repository.
5. Enter the DATABASE_URL string, get in the previous step, in the **Value** field.
6. Click **Deploy**.

🎉 Mission Completes.

Now wait for the deployment to complete, then you can view your site on the default domain generated by Vercel.

</details>

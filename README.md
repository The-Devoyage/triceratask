# TriceraTask

An application for task tracking and management built with React and @the-devoyage/subgraph.

While the primary purpose of creating this app is to demonstrate the capabilities of the API Generator, `@the-devoyage/subgraph`, this app also can demonstrate
quick examples of how to interact with the generated API.

## Getting Started

### Clone this repo.

This repo includes the client/frontend along with the configuration needed to run the API.

### Install Subgraph (v0.0.12 minimum)

You may download a build or generate your own build of the latest subgraph version by following instructions within the [GitHub Repo](https://github.com/the-devoyage/subgraph).

### Environment Variables

Example environment variable files are found throughout the repo.

1. Required - Within the root directory, copy over the environment variables from `.env.example` to `.env` and configure accordingly.
2. Choose One - Within the API Directory, there are several supported database examples. SQL Data Sources will require an environment
   file for migrations to be performed, demonstrated with the example.
3. Required - Set environment variables defined in the api config file, more below.

### Configure the database.

Subgraph supports the ability to work between many databases. By default, this application is deployed with SqLite. The setup process should be similar regardless
of your choice.

1. Spin up a local database in the dialect of your choice (SqLite will be used for this readme). With SqLite, create the database file in the `api` directory of this folder.
2. Run the migrations by navigating to the database folder, `./api/dbs/sqlite`.

### Start the API

Using subgraph, spin up the API. `subgraph -c ./api/config/config.toml`.

In the configuration file, `./api/config/config.toml` there are several environment variables that need to be set on the system.

- TRICERATASK_SQLITE_EXTENSIONS - A path to point to the plugins directory, `./api/plugins/uuid`
- TRICERATASK_MIGRATIONS_PATH - A path to point to the migrations folder, `./api/dbs/sqlite/migrations`
- TRICERATASK_SQL_URI - The path to the sqlite DB File.
- Auth Env Vars - These should be set as shown by example in the config file, `./api/config/config.toml`

### Start the Client

Start the react frontend in dev mode.

Install Deps.

```
npm install
```

Then Start.

```
npm run dev
```

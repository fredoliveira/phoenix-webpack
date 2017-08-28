# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :bender,
  ecto_repos: [Bender.Repo]

# Configures the endpoint
config :bender, BenderWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "y9H2lTC8d2xcQ0RCcg+dHvTVs9RTsM7gEpBWsm+ZTBF3hL8QncQsDiOS5UvnOdWn",
  render_errors: [view: BenderWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Bender.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

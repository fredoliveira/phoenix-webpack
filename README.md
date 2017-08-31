# What is this?

This is a small, business-logic free phoenix 1.3 application setup to use Webpack 3 and Yarn rather than brunch for javascript dependencies and asset compilation. 

# Getting started

To start the application:

  * Run `mix bender.setup`, which will:
    * Grab dependencies and compile (same as `mix deps.get`)
    * Install frontend dependencies via yarn (see the mix task at `lib/mix/tasks/bender/frontend.ex`)
    * Create your database (same as `mix ecto.create`)
    * Seed your database file if a seeds file exists
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

# Learn more about Phoenix

  * Official website: http://www.phoenixframework.org/
  * Guides: http://phoenixframework.org/docs/overview
  * Docs: https://hexdocs.pm/phoenix

# Get in touch

You can get in touch with me on twitter ([at @f](http://twitter.com/f)) or via [helloform.com](http://helloform.com).

FROM ruby

COPY ./Gemfile /app/

WORKDIR /app/

RUN bundler install
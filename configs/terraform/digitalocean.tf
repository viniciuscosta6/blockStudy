terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }
}

locals {
  envs = { for tuple in regexall("(.*)=(.*)", file("../../.env")) : tuple[0] => tuple[1] }
}

provider "digitalocean" {
  token = local.envs["DO_TOKEN"]
}

resource "digitalocean_droplet" "web" {
  image  = "docker-20-04"
  name   = "wp-boilerplate"
  region = "nyc2"
  size   = "s-1vcpu-1gb" // https://slugs.do-api.dev/
}
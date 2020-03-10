<h1 align="center">
Code Challenge - gRPC microservices
</h1>

<p align="center">Two simple microservices that communicate with an REST API via gRPC.</p>

<p align="center">
  <a href="https://github.com/Rocketseat/youtube-challenge-grpc/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/rocketseat/youtube-challenge-grpc?color=%237159c1&logoColor=%237159c1&style=flat" alt="Contributors">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/github/license/rocketseat/youtube-challenge-grpc?color=%237159c1&logo=mit" alt="License">
  </a>
</p>

<hr>

## Participants

| [<img src="https://avatars3.githubusercontent.com/u/10366880?s=460&v=4" width="75px;"/>](https://github.com/guilhermerodz) | [<img src="https://avatars2.githubusercontent.com/u/3085522?s=400&v=4" width="75px;"/>](https://github.com/higoribeiro) |
| :------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
|                                     [Guilherme Rodz](https://github.com/guilhermerodz)                                     |                                     [Higo Ribeiro](https://github.com/higoribeiro)                                      |

## Roadmap

- [x] Microservice for User
- [x] Microservice for Purchases
- [x] REST API that communicates with microservices

## Notes

- Both microservices are not restricted to communicate with API only.

## What can be better?

- Try usage of gRPC unidirectional and bidirectional `streams`;
- Improve security and credentials;

## Dependencies

- [Node](https://nodejs.org/en/) = 10

## Getting started

1. Clone this repository;<br />
2. Run `npm or yarn install` at each project in order to install dependencies.<br />
3. Run `yarn dev` on microservices.<br />
4. Run `yarn dev` on API.<br />
5. Enjoy sending requests to REST API available at `http://localhost:3333`.<br />
   5.1. You can import `Insomnia file` inside `api` folder.<br />

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

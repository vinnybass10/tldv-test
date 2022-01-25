# tl;dv Challenge API

This is a simple REST API that aims to allow CRUD of videos.

The architecture set up for this API seeks to follow design patterns such as SOLID principles.

### Domain Layer

Path: `src/domain`

It is the high-level directory of the application where the entities and business rules are located, and can be codified without worrying about the low level, as it only dictates how the external world (frameworks, providers, etc...) must communicate with the domain. . Our domain is then composed of 3 key components:
- `src/domain/entity` -> Dir that contains the structure of a given domain.
- `src/domain/data` -> A contract that dictates how the outside world should interact with our domain.
- `src/domain/useCases` -> Our use cases which contain our business rules.

In this directory we can see some principles in practice such as:
- Single responsibility principle -> Our domain, as well as what is inside it will have only one reason to change, reason is a broad word, so we can assume that by reason we mean a group or area, since these are the main ones reasons for a software to change.
- Open close principle -> Our interaction with the outside world (interface) is open to extension but closed to modification
- Dependency inversion principle -> As our use case depends on a contract (an interface) any change in the outside world (low level) will not affect our high level

### Providers Layer

Path: `src/providers`

Our low level, here we have our interaction with the external world, database, APIS etc... they must always follow a contract established by the domain. This is a clean architecture pattern.

### Infra Layer

Path: `src/infra`

Here we have two important things for each module:
- _Factorys_ -> Says how our use case should be created and instantiated. In many projects a lib is used to do the dependency injection, the factories are just a manual way to do it.
- _Controllers_ -> Our 'secretary' that just receives the data passes it to the use case and returns something. You are unaware of what is happening at our high level.

### Tests Layer

This API was also built with TDD in mind so it is easy to perform tests for each use case, the lib used was jest.

### How to run the project

This API uses docker to run the application and the database (mysql), to start the container just follow the steps below.

Run the docker containers (you must have docker installed on your machine, and ensure that ports 3000 and 3306 on your machine are free)
```sh
docker-compose up -d --build
```
(You can track it better by taking the -d parameter off, and track the logs, the connection will be up once the `Connection stabelish` log is printed)

Check if everything went well by running the command below
```sh
docker ps
```
Two listed images should appear.
```sh
CONTAINER ID   IMAGE      COMMAND                  CREATED        STATUS       PORTS                               NAMES
46e4871fa8d7   tldv_app   "docker-entrypoint.s…"   22 hours ago   Up 2 hours   0.0.0.0:3000->3000/tcp              app-tldv
61f952238ec2   mysql      "docker-entrypoint.s…"   22 hours ago   Up 2 hours   0.0.0.0:3306->3306/tcp, 33060/tcp   database-tldv
```

Now run the migrations
```sh
$ yarn run-migrations
```

### API Routes

Once the application is up and with the migrations already executed, it is first necessary to obtain an authentication token, for that just hit the following route:

`POST /user/auth` -> pass the following parameters in the body (this user will have already been created in migrations)

```ssh
{ "email": "teste@teste.com", "password": "123456"}
``` 


You will receive an auth token, with the token you can hit the following routes passing this token as a [Bearer Token](https://internationaltradeadministration.github.io/DevPortalMessages/IntroToNewAuthType.html#:~:text=If%20you're%20using%20Insomnia,in%20the%20%E2%80%9CPREFIX%E2%80%9D%20field.):

`POST /videos Create Video` -> pass the follow params, all required, the `url` and `thumbailUrl` should be an valid url
```ssh
{
	"name": "Video Teste 2",
	"url": "http://youtube.co/hahhaha",
	"thumbnailUrl": "http://testseasdasrver.com/img001",
	"isPrivate": false
}
```

`GET /videos Get video list` -> You must pass the limit and offset parameters in the querystring. Filters are the fields present in the video entity. With the addition of a parameter called moreViewsThen that will be responsible for bringing videos with a greater number of views than the one passed in the parameter

`GET /videos/:id Get Video by ID` -> pass the video ID on path parameter

`DELETE /videos/:id Delete Video by ID` -> pass the video ID on path parameter

`PUT /videos/:id Update Video by ID` -> pass the video ID on path parameter. For the body, you can pass the attributes that you want to change.


### How to run the tests

Run:
```ssh
$ yarn test
```

The application will create a directory called `coverage` at the root, with a folder called `lcov-report`, inside it should contain a file `index.html`, open this in your browser after running the tests, the coverage should be at 100% , in addition to all tests having passed, this way we guarantee that the application is fully covered by tests.
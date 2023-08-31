import {Configuration, NotTheRealNameApi, Response} from 'aaa-contract-client'

export var SomeMoreStuff : Response = {
  name: "DrJones",
  comment: "SomethingUseful"
}

var downstreamApi =  new NotTheRealNameApi(new Configuration({ basePath: "/api" }));

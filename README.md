# What is this?

This is a test package to experience creating a node package

# Installation

`npm install my-example-package-bored-api`

Then...

```
const examplePackage = require('my-example-package-bored-api');

examplePackage.getActivity();
examplePackage.getActivityByParticipants(2);
examplePackage.getActivityByPrice(0.1);

```

# Options

There are three supported functions: getActivity, getActivityByParticipants, getActivityByPrice

* getActivity takes no parameters and returns a random activity

* getActivityByParticipants takes one optional parameter and returns a random activity for the number of participants
    * *participants* - _number_ - Max 5 (Defaults to 1)

* getActivityByPrice takes one optional parameter and returns a random activity for the price scale
    * *price* - _number_ - 0.0, 0.1, 0.2, 0.3, 0.4, 0.5, or 0.6 (Defaults to 0.0)
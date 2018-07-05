var data = {
    f01: {
        name: "Alice",
        age: 15,
        follows: ["f02", "f03", "f04"]
    },
    f02: {
        name: "Bob",
        age: 20,
        follows: ["f05", "f06"]
    },
    f03: {
        name: "Charlie",
        age: 35,
        follows: ["f01", "f04", "f06"]
    },
    f04: {
        name: "Debbie",
        age: 40,
        follows: ["f01", "f02", "f03", "f05", "f06"]
    },
    f05: {
        name: "Elizabeth",
        age: 45,
        follows: ["f04"]
    },
    f06: {
        name: "Finn",
        age: 25,
        follows: ["f05"]
    }
};

// Pick a few of the following tasks and write functions to solve them:

// List everyone and for each of them, list the names of who they follow and who follows them

function followersArray(objectKey) {
    var followers = [];
    for (var person in data) {
        var follower = data[person].name;
        if (data[person].follows.indexOf(objectKey) > -1) {
            followers.push(follower);
        }
    }
    return followers;
}


function followers30Array(objectKey) {
    var followers = [];
    for (var person in data) {
        var follower = data[person].name;
        if (data[person].follows.indexOf(objectKey) > -1 && data[person].age > 30) {
            followers.push(follower);
        }
    }
    return followers;
}

function personName(index) {
    var name = "";
    name = data[index].name;
    return name;
}

function followsArray(objectKey) {
    var follow = data[objectKey].follows;
    var arrayFollow = [];
    for (var i = 0; i < follow.length; i++) {
        arrayFollow.push(personName(follow[i]));
    }
    return arrayFollow;
}

function follows30Array(objectKey) {
    var follow = data[objectKey].follows;
    var arrayFollow = [];
    for (var i = 0; i < follow.length; i++) {
      if (data[follow[i]].age > 30){
        arrayFollow.push(personName(follow[i]));
      }
    }
    return arrayFollow;
}

function everyone(data) {
    var list = {};
    for (var person in data) {
        list[personName(person)] = {};
        list[personName(person)].follows = followsArray(person);
        list[personName(person)].followers = followersArray(person);
    }
    return list;
}

// console.log(everyone(data));


function followsMost(data) {
    var mostFol = "";
    var numberFollows = 0;
    for (var person in data) {
        if (followsArray(person).length > numberFollows) {
            numberFollows = followsArray(person).length;
            mostFol = personName(person);
        } else if (followsArray(person).length === numberFollows) {
            mostFol += ' and ' + personName(person);
        }
    }
    return mostFol + ' follows ' + numberFollows + ' people.';
}

// console.log(followsMost(data));

function mostFollowers(data) {
    var mostFol = "";
    var numberFollowers = 0;
    for (var person in data) {
        if (followersArray(person).length > numberFollowers) {
            numberFollowers = followersArray(person).length;
            mostFol = personName(person);
        } else if (followersArray(person).length === numberFollowers) {
            mostFol += ' and ' + personName(person);
        }
    }
    return mostFol + ': ' + numberFollowers + ' followers.';
}

function mostFollowers30(data) {
    var mostFol = "";
    var numberFollowers = 0;
    for (var person in data) {
        if (followers30Array(person).length > numberFollowers) {
            numberFollowers = followers30Array(person).length;
            mostFol = personName(person);
        } else if (followers30Array(person).length === numberFollowers) {
            mostFol += ' and ' + personName(person);
        }
    }
    return mostFol + ': ' + numberFollowers + ' followers.';
}

function follows30Most(data) {
    var mostFol = "";
    var numberFollows = 0;
    for (var person in data) {
        if (follows30Array(person).length > numberFollows) {
            numberFollows = follows30Array(person).length;
            mostFol = personName(person);
        } else if (follows30Array(person).length === numberFollows) {
            mostFol += ' and ' + personName(person);
        }
    }
    return mostFol + ': ' + numberFollows + ' people.';
}

// console.log(follows30Most(data));

// console.log(mostFollowers30(data));


function everyoneAlone(data) {
    var doestFollow = [];
    for (var person in data) {
      var followers = followersArray(person);
      var follow = followsArray(person);
      for (var i = 0; i < follow.length; i++){
        if( followers.indexOf(follow[i]) < 0){
          if( doestFollow.indexOf(personName(person)) < 0)
          doestFollow.push(personName(person));
        }
      }
    }
    return doestFollow.join(', ') + ' follow some one that doesnt follow them back.';
}

function popularPeople(data) {
    var list = {};
    for (var person in data) {
        list[personName(person)] = {};
        list[personName(person)].reach = followsArray(person).length + followersArray(person).length;
    }
    return list;
}

console.log(popularPeople(data));

// console.log(everyoneAlone(data));


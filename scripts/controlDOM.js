(function () {
    let t = todoModule('myTodoDiv');

    // testing
    if(testMode) {
      t.addTodoItem('Go for shoping', 1);

      t.addTodoItem('Dring some bear with my friends', 2);
      t.addTodoItem('Go to sleep', 3);
    }

})();

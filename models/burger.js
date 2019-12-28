var ORM = require("../config/orm");

var selectAllBurgers = event => {
  event.preventDefault();
  ORM.selectAll();
};

var addBurger = event => {
  event.preventDefault();
  let NewBurgerName = $("#addBurgerSection")
    .val()
    .trim();

  ORM.insertOne(NewBurgerName, false);
};

var updateBurger = event => {
  event.preventDefault();
  function validateForm() {
    var isValid = true;
    $(".update-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });
    var questionLenghts = $(".chosen-select").length;
    console.log(questionLenghts);
    for (var i = 0; i < questionLenghts; i++) {
      if (
        $(".chosen-select")
          .eq(i)
          .val() === ""
      ) {
        isValid = false;
      }
    }
    return isValid;
  }
  var newBurgerName = $("#newBurgerName").val();
  var newBurgerDevoured = $("newBurgerDevoured")
    .val()
    .trim();
  var oldBurgerName = $("#oldBurgerName").val();

  if (validateForm()) {
    ORM.updateOne(newBurgerName, newBurgerDevoured, oldBurgerName);
    $("#newBurgerName").val("");
    $("newBurgerDevoured").val("");
    $("#oldBurgerName").val("");
  } else {
    alert("Please fill out all fields!");
  }
};

var deleteBurger = () => {
  return ORM.deleteOne();
};

exports.selectAllBurgers = selectAllBurgers;
exports.addBurger = addBurger;
exports.updateBurger = updateBurger;
exports.deleteBurger = deleteBurger;

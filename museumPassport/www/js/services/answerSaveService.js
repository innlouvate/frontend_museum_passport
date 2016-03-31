angular
  .module('museumPassport.answerSaveServices', [])
  .factory('Response', function(CreateAnswer, EditAnswer) {

    function save(question) {
      if(question.question.answer_id) {
        var data = JSON.stringify({"answer_id": question.question.answer_id, "entry": question.question.answer, "image": question.question.image, "user_id": window.localStorage['userId']});
        saveEdit(data, question.question.answer_id);
      } else {
        var data = JSON.stringify({"entry": question.question.answer, "image": "", "user_id": window.localStorage['userId']});
        saveNew(data, question.question.id);
      }
    };

    function saveUrl(question, url) {
      if(question.question.answer_id) {
        var data = JSON.stringify({"answer_id": question.question.answer_id, "entry": question.question.answer, "image": url, "user_id": window.localStorage['userId']});
        saveEdit(data, question.question.answer_id);
      } else {
        var data = JSON.stringify({"entry": "", "image": url, "user_id": window.localStorage['userId']});
        saveNew(data, question.question.id);
      }
    };

    function saveNew(data, question_id) {
      var answer = new CreateAnswer()
      answer.create(data, question_id);
    };

    function saveEdit(data, answer_id) {
      var answer = new EditAnswer(data, answer_id)
      answer.edit(data, answer_id);
    };

    return {
      save: save,
      saveUrl: saveUrl
    };
  });

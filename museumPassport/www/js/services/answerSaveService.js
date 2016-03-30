angular
  .module('museumPassport.answerSaveServices', [])
  .factory('Response', function(CreateAnswer, EditAnswer) {

    function save(question) {
      if(status(question) === 'new') {
        var data = JSON.stringify({"entry": question.question.answer, "user_id": window.localStorage['userId']});
        saveNew(data, question.question.id);
      } else {
        var data = JSON.stringify({"answer_id": question.question.answer_id, "entry": question.question.answer, "user_id": window.localStorage['userId']});
        saveEdit(data, question.question.answer_id);
      }
    }

    function saveUrl(question, url) {
      if(status(question) === 'new') {
        var data = JSON.stringify({"image": url, "user_id": window.localStorage['userId']});
        saveNew(data, question.question.id);
      } else {
        var data = JSON.stringify({"answer_id": question.question.answer_id, "image": url, "user_id": window.localStorage['userId']});
        saveEdit(data, question.question.answer_id);
      }
    }


    function status(question) {
      if(question.question.answer_id) {
        return 'edit';
      } else {
        return 'new'
      }
    }

    function saveNew(data, question_id) {
      var answer = new CreateAnswer()
      answer.create(data, question_id);
    };

    function saveEdit(data, answer_id) {
      var answer = new EditAnswer(data, answer_id)
      answer.edit(data, answer_id);
    };

    // function formatNew(answer) {
    //   var data = JSON.stringify({"entry": answer, "user_id": window.localStorage['userId']});
    //   return data;
    // };
    //
    // function formatUpdate(answer_id, answer) {
    //   var data = JSON.stringify({"answer_id": answer_id, "entry": answer, "user_id": window.localStorage['userId']});
    //   return data;
    // };


    return {
      save: save
    };
  })

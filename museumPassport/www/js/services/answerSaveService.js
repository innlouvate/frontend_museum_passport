angular
  .module('museumPassport.answerSaveServices', [])
  .factory('Response', function(CreateAnswer, EditAnswer) {

    function save(question) {
      if(status(question) === 'new') {
        var data = formatJson(question.question.answer);
        console.log(data)
        saveNew(data, question.question.id);
      } else {
        var data = formatUpdate(question.question.answer_id, question.question.answer);
        console.log(data)
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

    function formatJson(answer) {
      var data = JSON.stringify({"entry": answer, "user_id": window.localStorage['userId']});
      return data;
    };

    function formatUpdate(answer_id, answer) {
      var data = JSON.stringify({"answer_id": answer_id, "entry": answer, "user_id": window.localStorage['userId']});
      return data;
    };


    return {
      save: save
    };
  })

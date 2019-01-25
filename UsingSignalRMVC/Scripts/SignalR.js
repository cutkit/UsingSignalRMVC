


//$.connection.hub.start()
//    .done(function () {
//        console.log('well done!');
//        $.connection.myHub.server.callClientMethod("MethodCall","Connected with out method!");
//    })
//    .fail(function () {
//        alert('Error!!');
//    });
//$.connection.myHub.client.announce = function (message) {
//    $('#welcome-messages').append(message +'<br />');
//};

//(function() {
//    $.connection.hub.start()
//        .done(function () {
//            console.log('well done!');
//            $.connection.myHub.server.methodCall('send message to server');

//        })
//        .fail(function () {

//        });
//    $.connection.myHub.client.methodCall = function (mes) {
//        //alert('connected');
//        $('#welcome-messages').append(mes + '<br />');
//    };

//})();
$.connection.hub.start()
    .done(function () {
        console.log('well done!');
        $.connection.myHub.server.methodCall('send message to server');

    })
    .fail(function () {

    });
$.connection.myHub.client.methodCall = function (mes) {
    //alert('connected');
    $('#welcome-messages').append(mes + '<br />');
};